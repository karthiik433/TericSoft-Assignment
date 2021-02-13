const express = require("express");
const port = 9090;
const app = express();
app.use(express.json());
const{userModel,movieModel} = require("./createdb");

const isNullOrUndefined = (val) => val === null || val === undefined || val === "";



app.post("/account/register",async (req,res)=>{
    console.log("post");
    const data = req.body;
    const newUser = new userModel(data);
    await newUser.save();
    res.send("registered successfully");
});

app.post("/account/login",async (req,res)=>{
    const data = req.body;
    const user = await userModel.findOne(data);
    if(!isNullOrUndefined(user)){
        console.log(user);
        res.send("logged in Successfully");
    }else{
        res.status(404).send("Unauthorized user");
    }
})

app.post("/movie",async (req,res)=>{
    const data = req.body;
    const newMovie = new movieModel(data);
    await newMovie.save();
    res.send("movie created");
});

app.get("/movie",async (req,res)=>{
    const movies = await movieModel.find();
    res.send(movies);
});

app.get("/movie/:id",async (req,res)=>{
    const id = req.params.id;
    const movie = await movieModel.find({_id:id});
    res.send(movie);
});

app.put("/movie/:id",async (req,res)=>{
    
    const {name,yearOfRelease,genre} = req.body;
    const id = req.params.id;
    const movie = await movieModel.findById(id);
    console.log(movie,name,yearOfRelease,genre);
    if(!isNullOrUndefined(name)){
        //console.log(1);
        movie.name = name;
    }
    if(!isNullOrUndefined(yearOfRelease)){
        //console.log(2);
        movie.yearOfRelease = yearOfRelease;
    }
    if(!isNullOrUndefined(genre)){
        //console.log(3);
        movie.genre = genre;
    }
    await movie.save();
    //console.log(19);
    res.send(movie);
});

app.delete("/movie/:id",async (req,res)=>{
    const id = req.params.id;
    const movie = await movieModel.deleteOne({_id:id});
    res.send("delete movie successfully");
})

app.listen(port,()=>console.log("connection created"))