var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var aadharno = req.body.aadharno;
    var bloodgroup = req.body.BloodGroup;
    var gender = req.body.Gender;
    var Blood = req.body.Blood;
    var Kidney = req.body.Kidney;
    var Liver = req.body.Liver;
    var Heart = req.body.Heart;
    var Pancreas = req.body.Pancreas;
    var Lung = req.body.Lung;
    var Bone = req.body.Bone;
    var Cornea = req.body.Cornea;
    var Eye = req.body.Eye;
    var Uterus=req.body.Uterus;
    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password,
        "bloodgroup": bloodgroup,
        "gender": gender,
        "Blood": Blood,
        "Kidney":Kidney,
        "Liver": Liver,
        "Heart": Heart,
        "Pancreas": Pancreas,
        "Lung": Lung,
        "Bone": Bone,
        "Cornea": Cornea,
        "Eye": Eye,
        "Uterus":Uterus


    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    
    return res.redirect('signup_success.html');
}).listen(3000);


console.log("Listening on PORT 3000");