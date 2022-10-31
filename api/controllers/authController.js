const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const moment = require("moment");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();
async function main() {
  const login = async (req, res) => {
    const { username, password, account_type } = req.body;
    //do some validation on the incomeing data
    if (!username || !password || !account_type) {
      return res.status(400).json({
        message: "Please fill in all the fields",
      });
    }

    //get the user from the database
    const user = await prisma.client.findUnique({ where: { username } });

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    bcrypt.compare(password, user.password, async (err, response) => {
      if (response) {
        console.log(user.id);
        const token = jwt.sign(
          { data: user.id, expiresIn: 300 },
          process.env.JWT_SECRET
        );
        return res.status(200).json({
          status: true,
          user: {
            username: user.username,
            account_type: user.account_type,
            created_at: moment(user.createdAt, "YYYYMMDD").fromNow(),
            token,
          },
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "Incorrect password",
        });
      }
    });
  };

  const register = async (req, res) => {
    //get the user data from req
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      password_confirmation,
      account_type,
    } = req.body;

    //do some validation on the user data

    if (
      !first_name ||
      !last_name ||
      !username ||
      !email ||
      !password ||
      !password_confirmation ||
      !account_type
    ) {
      return res.status(400).json({ error: "Please fill in all the fields" });
    }
    //check if the username ar email already exist in the database
    if (
      await prisma.client.findUnique({
        where: {
          username: username,
        },
      })
    ) {
      return res.json({
        status: false,
        message: "the user is already exists please pick a new one",
      });
    }
    if (
      await prisma.client.findUnique({
        where: {
          email: email,
        },
      })
    ) {
      return res.json({
        status: false,
        message: "the email is already exists please pick a new one",
      });
    }

    // hash the password with bcrypt
    bcrypt.hash(password, 10, async function (err, hash) {
      //store the user data in the database
      const user = await prisma.client.create({
        data: {
          first_name,
          last_name,
          username,
          email,
          password: hash,
        },
      });
      //return an object to indicate what has just happened
      return res.json({
        status: true,
        user: user,
      });
    });
  };
  module.exports = {
    login,
    register,
  };
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
