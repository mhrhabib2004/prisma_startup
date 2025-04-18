import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()
const deletepost = async () =>{
    // const deletesingle =  await prisma.post.delete({
    //     where :{
    //         id : 1
    //     }
    // })
    // console.log(deletepost);

    const deletemany = await prisma.post.deleteMany({
        where : {
            published : false
        }
    });
    console.log(deletemany);
}
     
deletepost()