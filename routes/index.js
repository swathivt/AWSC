var  express = require('express');
var router = express.Router();

router.get("/", function(req,res) {
    let test = req.oidc.isAuthenticated();
    res.render("index",{ 
        title: "My auth app", 
        test1: test
    });
})

module.exports = router;

