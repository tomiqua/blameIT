const express= require('express');
const app= express ();
app.listen(3000, function (){
    console.log ('Homework app listening on port 3000');});
    app.get('/', (req, res) => res.send('This is my CodeSquad homework.'));

    //hello