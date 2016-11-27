const User = require ('../models/user');


module.exports.getUsers = (req, res) => {

  User.find({}, (err, results) => {
    if (err){
      res.send((err) => {
        console.log("There was an error: ", err)
      })
    }
    else{
      res.json(results);
    }
  })

}


module.exports.makeFriendship = (req, res) => {

  console.log("This is the req.body", req.body)



  User.findById(req.body.requesterId, (err, results) => {
    if (err){
      res.send((err) => {
        console.log("There was an error in the make friendship function", err)
      })
    }
    else{
      console.log("Results: ", results)
    }

  })

}



