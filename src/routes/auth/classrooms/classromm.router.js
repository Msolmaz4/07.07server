import express from 'express';



const route = () => {

    const router = new express.Router();

    router.route('/').get((req,res) => {
        res.send ('All classrooms');


    });
   

    return router;
}
export default {
    route,
    routePrefix: `$/{config.version}/classroom`
}