import { Submarine } from "pinata-submarine"
import { } from "dotenv/config"
const submarine = new Submarine(`${process.env.SUBMARINE_KEY}`, `${process.env.GATEWAY}`)

const cid = "CID_GOES_HERE"
const foundContent = await submarine.getSubmarinedContentByCid(cid)
const item = foundContent.items[0]
const id = item.id

const response = await submarine.makeFilePublic(id)
console.log(response)
