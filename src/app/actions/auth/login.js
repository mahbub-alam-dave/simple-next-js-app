"use server"
import bcrypt from "bcrypt"
import { collectionNames, dbConnect } from "@/lib/dbConnect";

export const loginUser =  async (loginData) => {
    const {email, password} = loginData;

    const usersCollection = dbConnect(collectionNames.users)

    const isExistUser = await usersCollection.findOne({email})

    if(!isExistUser) {
        return null
    }

    const isPasswordOk = await bcrypt.compare(password, isExistUser.password)

    if(!isPasswordOk) return null



    return isExistUser

}