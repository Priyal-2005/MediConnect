const express = require('express');
const {PrismaClient} = require("@prisma/client");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// register
app.post("register", async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({message: "Please provide all required fields"});
        }

        // check if user exists
        const user = await prisma.user.findUnique({
            where: {email}
        })

        // if user exists then error
        if (user) {
            return res.status(400).json({message: "User already exists"});
        }

        // else, hash password and create user
        const hash = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data: {
                name,
                email,
                password: hash,
                role: role?.toUpperCase() || "PATIENT"
            }
        });
        return res.status(201).json({message: "User registered successfully"});
    }
    catch (error) {
        return res.status(500).json({error: "Internal Server Error"});
    }
})

// login
app.post("login", async (req, res) => {

});