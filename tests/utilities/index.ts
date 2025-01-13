import { User, UserDocument } from '@src/types';
import { UserModel } from '@src/model/user';

export async function createUser(user: User): Promise<UserDocument> {
    return (await UserModel.create(user)) as unknown as UserDocument;
}

export function logResult(result: User[]) {
    console.log(JSON.stringify(result, null, 2));
}
