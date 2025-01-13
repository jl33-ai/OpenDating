/**
 * Sets up an in-memory MongoDB database for testing
 * Handles connection lifecycle and cleanup
 */
export declare class InMemoryDatabase {
    private mongoServer;
    /**
     * Starts an in-memory database and establishes connection
     * @throws Error if database is already running
     */
    create(): Promise<void>;
    /**
     * Clears all data in the database including
     * collections and indexes
     * */
    clear(): Promise<void>;
    /**
     * Checks if the database is currently connected
     * Uses mongoose's internal connection state
     */
    isConnected(): boolean;
    /**
     * Stops the database and cleans up connections
     * @throws Error if database is not running
     */
    stop(): Promise<void>;
    /**
     * Internal cleanup
     */
    private cleanup;
}
//# sourceMappingURL=database.d.ts.map