import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginateShorting =async ()=>{
    // const offfsetpeginate = await prisma.post.findMany({
    //     skip : 3,
    //     take:3
    // })
    // console.log(offfsetpeginate);
    const curssortpeginate = await prisma.post.findMany({
        skip : 3,
        take:3,
        cursor : {
            id : 10
        }
    })
    // console.log(curssortpeginate);
    // shorting data

    const shorting =  await prisma.post.findMany({
        orderBy : {
            titel : "desc"
        }
    })
    console.log(shorting);
}
paginateShorting()