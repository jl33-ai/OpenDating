/**
 * Interface for a user profile that can be matched
 */
export interface User {
    location: number[];
    gender: 'male' | 'female';
}
export type SearchFilter = object;
export type FindUser = (rules: SearchFilter[]) => User[];
//# sourceMappingURL=types.d.ts.map