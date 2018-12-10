const Contact = require('../models/contact.js');

exports.home = function (req, res) {
  Contact.find({}, function(err, contacts){
      res.render('index',{title: "Contacts", contacts: contacts });
  })

};
exports.detail = function (req, res) {
  Contact.findById(req.params.id, function(err, contacts){
      if (err) return next(err);
      res.render('detail',{title: "Contacts", contact: contacts });
  })

};
