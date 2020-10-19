const router = require('express').Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');


//Import user model
const User = require('../models/User');

//Validation
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).required(),
})

router.post('/register', async (req, res) => {


    //Validate user
    const {error} = schemaRegister.validate(req.body);

    if (error){
        return res.status(400).json({
            error: true,
            msg: error.details[0].message
        })
    }

    //Validate if the email already exists
    const existingEmail = await User.findOne({email: req.body.email});

    if (existingEmail){
        return res.status(400).json({
            error: true,
            msg: 'Email already exists'
        })
    }

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        
    });

    //Saving the user
    try{

        const savedUser = await user.save();

        res.json({
            error: null,
            msg : 'Registered',
            data: savedUser
        })

    }catch(e){
        res.status(400).json({
            e
        })
    }

    
    
})


//Joi schema for login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).required(),
})

//Login
router.post('/login', async (req, res) => {

    //Validate credentials
    const {error} = schemaLogin.validate(req.body);

    if (error){
        return res.status(400).json({
            error: true,
            msg: error.details[0].message
        })
    }

    //Validate if the user exists
    const existingUser = await User.findOne({email: req.body.email});

    if (!existingUser){
        return res.status(400).json({
            error: true,
            msg: 'User not found'
        })
    }

    //Comparing passwords
    const validPassword = await bcrypt.compare(req.body.password, existingUser.password);
    if (!validPassword){
        return res.status(400).json({
            error: true,
            msg: 'Password does not match'
        })
    }

    // create token
    const token = jwt.sign({
        name: existingUser.name,
        id: existingUser._id
    }, process.env.TOKEN_SECRET)
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})

module.exports = router;