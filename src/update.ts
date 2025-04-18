import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


const update = async()=>{
    // const singleUpdates = await prisma.post.update({
    //     where :  {
    //         id : 4
    //     },
    //         data : {
    //             titel : "habib"
    //         }
        
    // })

    // console.log(singleUpdates);

    // const updatemany = await prisma.post.updateMany({
    //     where : {
    //         titel : "titel 1"
    //     },
    //     data : {
    //         published : true
    //     }
    // })

    // console.log(updatemany);

    const upsertData = await prisma.post.upsert({
        where :{
            id : 7
        },
        update : {
            authorName : "fahim"
        },
       create : {
        titel : "jfjfjdfj",
        content : "joidjkfhnjodfghgdhfr"
       }
    })
}

update()