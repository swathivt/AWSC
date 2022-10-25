var  express = require('express');
var router = express.Router();

const { requiresAuth } = require('express-openid-connect');
const axios = require('axios');

router.get("/", function(req,res) {
    let isAuthenticated = req.oidc.isAuthenticated();
    res.render("index",{ 
        title: "My auth app", 
        isAuthenticated: isAuthenticated
    });
})

// Trigger the endpoint, and call the middleware, if the user is logged in or out
router.get('/secure', requiresAuth(), async(req,res) => {

    let data = {}
    try{

        // calling the server to get the data, makesure you get the data before moving forward(async, await)
        const apiResponse = await axios.get('http://localhost:5000/public');
        data = apiResponse.data;
    }catch(e) {}

    //when there is not error, you will be redirected to the secure page with the data you get prompt api
    res.render('secure',{
        title: "Secured Page",
        isAuthenticated: req.oidc.isAuthenticated(),
        data
    })
})

module.exports = router;

