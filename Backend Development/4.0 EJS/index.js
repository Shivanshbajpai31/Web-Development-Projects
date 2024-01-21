import express from "express";

const app=express();
//const port=3000;

app.get("/", (req,res)=>{
    //const today=new Date();
    //const day=today.getDay();
    const today = new Date("January 7 , 2024 20:16:00");
    const day = today.getDay();

    //console.log(day);

    let type="a weekday";
    let adv="it 's time to work hard";
    
    if(day===0 || day===6){
        type="the weekend";
        adv="It ' s time to enjoy";
    }
    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    });
});


app.listen(3000, () =>{
    console.log('Server is running on the port 3000');
});