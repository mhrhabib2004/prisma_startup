import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginateShorting =async ()=>{
    const offfsetpeginate = await prisma.post.findMany({
        
    })
}