const Contact = require('../models/contact.js');
const fs = require('fs');
const PDFDocument = require('pdfkit');

exports.home = function(req, res) {
  Contact.find({}, function(err, contacts) {

    res.render('index', {
      title: "Contacts",
      contacts: contacts
    });

  })
};
exports.detail = function(req, res, next) {
  Contact.findById(req.params.id, function(err, contacts) {
    if (err) return next(err);
    res.render('detail', {
      title: "Contacts",
      contact: contacts
    });
  })
};
exports.generate = function(req, res, next) {
  Contact.find({}, function(err, contacts) {
    var doc = new PDFDocument;
    doc.pipe(temp = fs.createWriteStream('public/pdf/Contacts.pdf'));
    doc.info['Title'] = 'Contacts';
    doc.info['Author'] = "Doesn't matter";
    doc.fontSize(25).text('This is generated automaticly!', 100, 100).fontSize(18).text('All contacts:', {
      underline: true
    })
    contacts.forEach(function(contact) {
      doc.font('Helvetica-Bold').fontSize(15).text(contact.name)
      doc.font('Helvetica').fontSize(11).text("Number:" + contact.phone)
    });
    doc.end();
    temp.on("finish", async function(){
      res.download('public/pdf/Contacts.pdf');
    })
  });
}
