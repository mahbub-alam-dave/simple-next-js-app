import { collectionNames, dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const POST = async(req) => {
    const product = await req.json()
    // console.log(data)
    const result  = await dbConnect(collectionNames.products).insertOne(product)
    return NextResponse.json(result)
}