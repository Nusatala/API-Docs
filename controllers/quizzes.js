const { PrismaClient } = require('@prisma/client');
const {jwt_payload} = require('./functions');

const prisma = new PrismaClient();

// GET request that get all the quizzes
const getQuizzes = async (req, res) => {
    try{
        const quizzes = await prisma.quizzes.findMany({
        });
        return res.status(200).json(quizzes);
    }catch (err) {
        return res.status(500).send({ "error": `${err}` });
    };
};

// POST request that handles register
const postQuizzes = async (req, res) => {
    const {level} = req.params;
    const {thumbnail} = req.body;
    let {total_question} = req.body;
    total_question = parseInt(total_question);

    const quizzes = await prisma.quizzes.create({
        data: {
          thumbnail: thumbnail,
          level: level,
          status: true,
        //   user_id: ,
          total_question: total_question,
          users: {
            connect: {
                id: 1,
            }
          }
        },
    });
    
    res.status(201).json(quizzes);
};


module.exports = {
    getQuizzes,
    postQuizzes
}