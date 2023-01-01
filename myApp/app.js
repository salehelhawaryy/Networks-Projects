var express = require('express');
var path = require('path');
var app = express();
var fs =require('fs');
const { stringify } = require('querystring');


var MongoClient = require ('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017";


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
  res.render('login',{title:""})
});

app.get("/registration",function(req,res){
  res.render('registration',{title:"Welcome! enter a unique username :)", title2: 1})
});

app.post("/registeration",function(req,res){
  var x= req.body.username
  var y=req.body.password
  
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
  if (err) throw err;
  var db = client.db('MyDB');
  
  db.collection('FirstCollection').find({username: x}).toArray(function(err,result){
    if(x=="" || y==""){
     x='x'
     y='y'
    }

    if(result.length==0 && x!="x" && y!="y"){
      db.collection('FirstCollection').insertOne({username: x, password: y});
      
      res.redirect('/')
      
    }
    //if(result.length!=0){
      if(x=="admin"){
      res.render('registration',{title:"Username you're trying to enter is already used" , title2: 0})

    }
    
    else{
      res.render('registration',{title:"Please make sure you have entered a username and Password" , title2: 0})
      
    }
  });
});
});
var userid="admin"
app.get('/',function(req,res){
  res.render('login')
})

app.post('/',function(req,res){
  var name=req.body.username;
  var pass=req.body.password;
  MongoClient.connect(uri,function(err,client){
    if(err) throw err;
     db=client.db('MyDB');
    db.collection('FirstCollection').find({username:name,password:pass}).toArray(function(err,results){
      if(x=="admin" && y=="admin"){
     // if(results.length!=0){
     
      userid=req.body.username;
      res.render('home')
    }
      else {res.render('login')}
    })
     
  })
})

app.get('/annapurna',function(req,res){
  if(userid!=undefined)
  res.render('annapurna')
})

app.get('/bali',function(req,res){
  if(userid!=undefined)
  res.render('bali')
})
//Want to go lis update

//BALI
app.get('/wanttogobali',function(req,res){
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    if (err) throw err;
    var db = client.db('MyDB');
    
    db.collection(userid).find({}).toArray(function(err,results){
      if(results.length==0){
    db.createCollection(userid)
    db.collection(userid).insertOne({Destination:"Bali"});
      }
      else{
        db.collection(userid).find({Destination:'Bali'}).toArray(function(err,results){
          if (results.length==0)
          db.collection(userid).insertOne({Destination:"Bali"})
        })
      }
  })
  //console.log(userid)
})
})
//INCA
app.get('/wanttogoinca',function(req,res){
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    if (err) throw err;
    var db = client.db('MyDB');
    
    db.collection(userid).find({}).toArray(function(err,results){
      if(results.length==0){
    db.createCollection(userid)
    db.collection(userid).insertOne({Destination:"inca"});
      }
      else{
        db.collection(userid).find({Destination:'inca'}).toArray(function(err,results){
          if (results.length==0)
          db.collection(userid).insertOne({Destination:"inca"})
        })
      }
  })
 // console.log(userid)
})
})

//PARIS
app.get('/wanttogoparis',function(req,res){
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    if (err) throw err;
    var db = client.db('MyDB');
   
    db.collection(userid).find({}).toArray(function(err,results){
      if(results.length==0){
    db.createCollection(userid)
    db.collection(userid).insertOne({Destination:"paris"});
      }
      else{
        db.collection(userid).find({Destination:'paris'}).toArray(function(err,results){
          if (results.length==0)
          db.collection(userid).insertOne({Destination:"paris"})
        })
      }
  })
  //console.log(session.userid)
})
})

//ROME

app.get('/wanttogorome',function(req,res){
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    if (err) throw err;
    var db = client.db('MyDB');
  
    db.collection(userid).find({}).toArray(function(err,results){
      if(results.length==0){
    db.createCollection(userid)
    db.collection(userid).insertOne({Destination:"rome"});
      }
      else{
        db.collection(userid).find({Destination:'rome'}).toArray(function(err,results){
          if (results.length==0)
          db.collection(userid).insertOne({Destination:"rome"})
        })
      }
  })
  //console.log(session.userid)
})
})

//SANTORINI
app.get('/wanttogosantorini',function(req,res){
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    if (err) throw err;
    var db = client.db('MyDB');
    
    db.collection(userid).find({}).toArray(function(err,results){
      if(results.length==0){
    db.createCollection(userid)
    db.collection(userid).insertOne({Destination:"santorini"});
      }
      else{
        db.collection(userid).find({Destination:'santorini'}).toArray(function(err,results){
          if (results.length==0)
          db.collection(userid).insertOne({Destination:"santorini"})
        })
      }
  })
 // console.log(session.userid)
})
})

//ANNAPURNA
app.get('/wanttogoannapurna',function(req,res){
  MongoClient.connect("mongodb://127.0.0.1:27017",function(err,client){
    if (err) throw err;
    var db = client.db('MyDB');
   
    db.collection(userid).find({}).toArray(function(err,results){
      if(results.length==0){
    db.createCollection(userid)
    db.collection(userid).insertOne({Destination:"annapurna"});
      }
      else{
        db.collection(userid).find({Destination:'annapurna'}).toArray(function(err,results){
          if (results.length==0)
          db.collection(userid).insertOne({Destination:"annapurna"})
        })
      }
  })
  //console.log(session.userid)
})
})

//END WANT TO GO LIST
app.get('/cities',function(req,res){
  
  res.render('cities')
})

app.get('/hiking',function(req,res){

  res.render('hiking')
})

app.get('/inca',function(req,res){

  res.render('inca')
})

app.post('/inca',function(req,res){

  res.render('search')
})

app.get('/islands',function(req,res){
  
  res.render('islands')
})

app.get('/paris',function(req,res){
  
  res.render('paris')
})

app.get('/rome',function(req,res){
 
  res.render('rome')
})

app.get('/santorini',function(req,res){
 
  res.render('santorini')
})


function getAllSubstrings(str) {
  var i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}




app.post('/search',function(req,res){
  var search=req.body.Search.toLowerCase();
  var S_result=[];
  
      var searchables=["paris","rome","bali","santorini","inca","annapurna"] //pa,par,p,i=paris
      
     for(i=0; i< searchables.length; i++){
      var test=getAllSubstrings(searchables[i]);
      var each=searchables[i]
      

      for(j=0; j<test.length;j++){
        if(search==test[j]){
         
         S_result.push(each);
        }
      }
     }
     if(S_result.length==0){
      res.render('searchresults',{hyper:"Destination not found",list:" " });
     }

     else{
      //console.log(S_result)
      res.render('searchresults',{hyper:"Destination found",list:S_result});
     }
      
     
    
      

    })
     
  

app.get('/wanttogo',function(req,res){
  var resl=[];
  //res.render('wanttogo')
   MongoClient.connect(uri,async function(err,client){
    if(err) throw err;
     db=client.db('MyDB');
   await db.collection(session.userid).find({},{projection: {_id: 0,Destination: 1}}).toArray(function(err,results){
    
    var resultss=JSON.stringify(results)
    //for loop to chechk on results and push the outcome
    
      if(resultss.includes("Bali")){
        resl.push("Bali")
      }
      if(resultss.includes("santorini")){
        resl.push("Santorini")
      }
      if(resultss.includes("inca")){
        resl.push("inca")
      }
      if(resultss.includes("paris")){
        resl.push("Paris")
      }
      if(resultss.includes("annapurna")){
        resl.push("Annapurna")
      }
      if(resultss.includes("rome")){
        resl.push("Rome")
      }
    
    //console.log(resultss)
    
    
   // console.log(resl) 
   if(resl.length!=0){
    res.render('wanttogo',{list:resl})}
    else{
      res.render('wanttogo',{list:" "})
    }
    
  })
  
  })
  
  


})








app.listen(3000);



