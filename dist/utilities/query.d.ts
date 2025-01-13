import { InMemoryDatabase } from '@src/utilities/database';
import { QueryExecutor, User } from '@src/types';
/**
 * Creates a query execution environment
 * @param database
 * @param targetUser
 * @param users
 *
 * @returns A query executor function that will execute a query within the environment
 */
export declare const createQueryExecutionEnvironment: (database: InMemoryDatabase, users: User[]) => Promise<{
    queryExecutor: QueryExecutor;
}>;
//# sourceMappingURL=query.d.ts.map