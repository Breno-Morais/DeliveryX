const express = require('express')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

const router = express.Router()

const { getUser, getUserVerify } = require('../controllers/userController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

function generateToken(data) {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

router.get('/user__', authenticateJWT, async (req, res) => {
    const user = await getUser(req.user.email)

    if (user) {
        res.json({
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } else {
        res.status(401).send('Account does not exist');
    }
});

router.post('/login__', async (req, res) => {
    const user = await getUserVerify(req.body)
    if (user) {
        const token = generateToken({ email: user.email, name: user.name, role: user.role });

        res.json({
            accessToken: token,
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } else {
        res.status(401).send('Username or password incorrect');
    }
});

module.exports = router