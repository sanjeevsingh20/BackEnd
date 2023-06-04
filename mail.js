// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'manojkumarsinghy20@gmail.com',
//         pass: 'ryjkmvqagolvmrkd'
//     }
// });

// var mailOptions = {
//     from: 'manojkumarsinghy20@gmail.com',
//     to: 'sk2747267@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

var mail=require('nodemailer')

var transporter =mail.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'manojkumarsinghy20@gmail.com',
        pass:'ryjkmvqagolvmrkd'
    }
})

var mailOptions ={
    from:'manojkumarsinghy20@gmail.com',
    to:'sk2747267@gmail.com',
    subject:'Hello This is mail',
    html:'<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('Your email is send with response '+ info.response)
    }
});
