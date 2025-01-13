import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const DATABASE_IS_NOT_RUNNING: string = 'Database is not running';

/**
 * Sets up an in-memory MongoDB database for testing
 * Handles connection lifecycle and cleanup
 */
export class InMemoryDatabase {
    private mongoServer: MongoMemoryServer | null = null;

    /**
     * Starts an in-memory database and establishes connection
     * @throws Error if database is already running
     */
    public async create(): Promise<void> {
        if (this.isConnected()) {
            throw new Error('Database is already running');
        }

        try {
            this.mongoServer = await MongoMemoryServer.create();
            const uri = this.mongoServer.getUri();

            await mongoose.connect(uri);
        } catch (error) {
            await this.cleanup();
            throw new Error(
                `Failed to start database: ${error instanceof Error ? error.message : 'Unknown error'}`,
            );
        }
    }

    /**
     * Clears all data in the database including
     * collections and indexes
     * */
    public async clear(): Promise<void> {
        if (!this.isConnected()) {
            throw new Error(DATABASE_IS_NOT_RUNNING);
        }

        const collections = await mongoose.connection.db.collections();
        for (let collection of collections) {
            await collection.drop();
            await collection.dropIndexes();
        }
    }

    /**
     * Checks if the database is currently connected
     * Uses mongoose's internal connection state
     */
    public isConnected(): boolean {
        return (
            mongoose.connection.readyState ===
            mongoose.ConnectionStates.connected
        );
    }

    /**
     * Stops the database and cleans up connections
     * @throws Error if database is not running
     */
    public async stop(): Promise<void> {
        if (!this.isConnected()) {
            throw new Error(DATABASE_IS_NOT_RUNNING);
        }

        await this.cleanup();
    }

    /**
     * Internal cleanup
     */
    private async cleanup(): Promise<void> {
        if (this.isConnected()) {
            await mongoose.disconnect();
        }

        if (this.mongoServer) {
            await this.mongoServer.stop();
            this.mongoServer = null;
        }
    }
}
