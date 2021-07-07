import express from 'express';
import crypto from 'crypto';
import User from '../../models/User';
import config from 'config';
import jwt from 'jsonwebtoken';



const route = () => {

    const router = new express.Router();
    router.route('/login').post((req, res) => {


        const { email, password } = req.body;
        User.findOne({ email: email }).then((user) => {

            if (!user) {
                res.send({
                    status: false,
                    message: 'es ist keine Email'
                })
            }
            else {
                if (user.password === pcrypto.createHmac('sha256', config.passSecret).update(password).digest('hex')) {
    
                    const token = jwt.sign({ userId: user_id }, config.jwtSecret);
    
                    res.send({
                        status: true,
                        token: token
                    })
    
                } else {
                    res.send({
                        status: false,
                        message: 'sie haben falsche password eingegeben'
                    })
                }
            

        }
        })

     

        router.route('/sign-up').post((req, res) => {
            const { email, password } = req.body;

            const passwordHashed = crypto.createHmac('sha256', config.passSecret).update(password).digest('hex');;

            const newUser = new User({
                email: email,
                password: crypto.createHmac('sha256', config.passSecret).update(password).digest('hex')
               

            });

            newUser.save().then((data) => {
                res.send({ status: true, user: data });
            },
                (err) => {
                    res.send({ status: false, error: err });
                }
            )


        });

    })


    return router;
}
export default {
    route,
    routePrefix: `$/{config.version}/auth`
}