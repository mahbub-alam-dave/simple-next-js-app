"use server"
import bcrypt from "bcrypt"
import { collectionNames, dbConnect } from "@/lib/dbConnect"

export const registerUser = async (registerData) => {

    const {name, email, password} = registerData

    if(!email || !password) {
        return
    }

    // check user availability
    const isUserExist = await dbConnect(collectionNames.users).findOne({email: registerData.email})

    if(!isUserExist) {
        const hashedPassword = await bcrypt.hash(password, 10)
        registerData.password = hashedPassword
        const result = await dbConnect(collectionNames.users).insertOne(registerData)
        console.log(result)
        const clientSideResult = {
  acknowledged: result.acknowledged,
  insertedId: result.insertedId.toString(), // <-- FIXED
};
        return {
    acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
        }
    }

    else {
        return 
    }


}