import { collectionNames, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"


export const GET = async (req, {params}) =>{
    const p = await params
    const result = await dbConnect(collectionNames.products).findOne({_id: new ObjectId(p.id)})
    return NextResponse.json(result)
}