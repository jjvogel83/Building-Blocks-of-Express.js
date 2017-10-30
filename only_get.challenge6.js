//Challenge 6 (Only GET)
//only_get.js
module.exports = function(req, res, next){
  if(req.method=='GET'){
    next();
  }else{
    res.send('Method is not allowed');
  }
};