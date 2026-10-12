import { db } from "@/src/db"
import { User } from "../types/auth.types"

export interface IAauthRepository {
    userExists(email: string): Promise<User | undefined>
}

class AuthRepository implements IAauthRepository{
    // async userExists(mail: string) {
    //     const user = await (db as any).query.users.findFirst({
    //         where: (users: any, { eq }: any) => eq(users.email, mail),
          
    //    })

        //return !!user
        
    //}
    async userExists(email: string) {
        return await db.query.users.findFirst({
            where: (users: any, { eq }: any) => eq(users.email, email),
        })
        
    }
   
}

export const authRepository = new AuthRepository()