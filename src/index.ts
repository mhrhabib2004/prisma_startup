import { PrismaClient } from "../generated/prisma";



const prisma = new PrismaClient()

const main = async() =>{
// const result = await prisma.post.create({
//     data : {
//         titel : "this is titel2",
//         content : "this is content..2",
//         authorName : "haib2"
//     }
// })
// console.log(result);

const getAllFromDb = await prisma.post.findMany();
console.log(getAllFromDb);
}

main()