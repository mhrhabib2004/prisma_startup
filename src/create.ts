import { PrismaClient } from "../generated/prisma";



const prisma = new PrismaClient()

const main = async() =>{

    // single data inhput
// const result = await prisma.post.create({
//     data : {
//         titel : "this is titel2",
//         content : "this is content..2",
//         authorName : "haib2"
//     }
// })
// console.log(result);
// many data input

const insertmany  = await prisma.post.createMany({
    data :[{
        titel : "titel 1",
        content : "contenet 1 ",
        authorName : "author 1 "
    },
    {
        titel : "titel 1",
        content : "contenet 1 ",
        authorName : "author 1 "
    },
    {
        titel : "titel 1",
        content : "contenet 1 ",
        authorName : "author 1 "
    },
    {
        titel : "titel 1",
        content : "contenet 1 ",
        authorName : "author 1 "
    }
]
})
console.log(insertmany);
}



main()