const express = require('express');
const app = express();
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;

//setting Public as static
app.use(express.static(path.join(__dirname, 'Public')));


//body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//setting view engine to jade
app.set("view engine", 'pug');
//app.set("views", path.join(__dirname, "Public"));

app.get('/', function (req, res, next) {
    res.render('index');
});

// app.get('/email',function(req,res,next){
//     res.sendFile()
// });

app.post('/', function (req, res, next) {
    nodeMailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodeMailer.createTransport({
            host: 'gains.arrowsupercloud.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'nishmara@nishnomadcoder.me', // generated ethereal user
                pass: 'pass' // generated ethereal password
            }
        });

        let mailOptions = {
            from: '"Nishanth Maraboina" <nishmara@nishnomadcoder.me>', // sender address
            to: 'nishanthmaraboina@gmail.com', // list of receivers
            subject: 'Hello', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' + req.body.fname // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    });
});

app.listen(port, () => {
    console.log(`server is up and running on ${port}`);
});
