const contact = require('./models/contact.js');

var data = [
  {
     degree:"PhD."
    ,name:"John Doe"
    ,position:"CEO"
    ,phone:290
    ,email:"john.doe@email.com"
    ,PC: 10
    ,IP:"192.168.0.1"
    ,building:"1"
  },

  {
     degree:""
    ,name:"Test Contact 2"
    ,position:"CEO"
    ,phone:291
    ,email:"test.contact@email.com"
    ,PC: 13
    ,IP:"192.168.0.2"
    ,building:"2"
  },
  {
     degree:""
    ,name:"Test Contact 1"
    ,position:"Test"
    ,phone:291
    ,email:"test.contact@email.com"
    ,PC: 13
    ,IP:"192.168.0.2"
    ,building:"2"
  },
  {
     degree:"BSc."
    ,name:"James Smith"
    ,position:"IT"
    ,phone:288
    ,email:"james.smith@email.com"
    ,PC:12
    ,IP:"192.168.0.3"
    ,building:"1"

  }]


function seedDB(){
   //Remove all contacts
   contact.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all!");
         //add a few contacts
        data.forEach(function(seed){
            contact.create(seed, function(err, one){
                if(err){
                    console.log(err)
                } else {
                    console.log("added");

                }
            });
        });
    });

}


module.exports = seedDB;
