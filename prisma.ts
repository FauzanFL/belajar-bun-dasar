import { PrismaClient } from '@prisma/client'
 
const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Fauzan",
        enail: "fauzan@example.com",
        phone: "1234567890",
    }
});

console.log(contact)