import { prisma } from "../config/database.js";
import { User } from "../protocols.js";

export async function insertUserDB(user:User) {
    await prisma.users.create({
        data:user
    });
}

export async function getUserById(userId:number) {
    return await prisma.users.findFirst({
        where:{
            id:userId
        }
    });
}