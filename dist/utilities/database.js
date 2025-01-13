"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const DATABASE_IS_NOT_RUNNING = 'Database is not running';
/**
 * Sets up an in-memory MongoDB database for testing
 * Handles connection lifecycle and cleanup
 */
class InMemoryDatabase {
    constructor() {
        this.mongoServer = null;
    }
    /**
     * Starts an in-memory database and establishes connection
     * @throws Error if database is already running
     */
    async create() {
        if (this.isConnected()) {
            throw new Error('Database is already running');
        }
        try {
            this.mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
            const uri = this.mongoServer.getUri();
            await mongoose_1.default.connect(uri);
        }
        catch (error) {
            await this.cleanup();
            throw new Error(`Failed to start database: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    /**
     * Clears all data in the database including
     * collections and indexes
     * */
    async clear() {
        if (!this.isConnected()) {
            throw new Error(DATABASE_IS_NOT_RUNNING);
        }
        const collections = await mongoose_1.default.connection.db.collections();
        for (let collection of collections) {
            await collection.drop();
            await collection.dropIndexes();
        }
    }
    /**
     * Checks if the database is currently connected
     * Uses mongoose's internal connection state
     */
    isConnected() {
        return (mongoose_1.default.connection.readyState ===
            mongoose_1.default.ConnectionStates.connected);
    }
    /**
     * Stops the database and cleans up connections
     * @throws Error if database is not running
     */
    async stop() {
        if (!this.isConnected()) {
            throw new Error(DATABASE_IS_NOT_RUNNING);
        }
        await this.cleanup();
    }
    /**
     * Internal cleanup
     */
    async cleanup() {
        if (this.isConnected()) {
            await mongoose_1.default.disconnect();
        }
        if (this.mongoServer) {
            await this.mongoServer.stop();
            this.mongoServer = null;
        }
    }
}
exports.InMemoryDatabase = InMemoryDatabase;
//# sourceMappingURL=database.js.map