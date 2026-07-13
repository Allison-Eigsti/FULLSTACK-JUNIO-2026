const { prismaClient } = require("./generated/prisma");

const prisma = new prismaClient();

async function main() {
    const newUser = await prisma.user.create({ 
        data: {
            name: "John Doe",
            email: "john.doe@example.com",
            age: 30
        }
    });
    console.log(newUser);
}

main();