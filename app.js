const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    fs.readFile("docs/messages.json", 'utf-8', function(err, data){
        if ( data.length==0 ){
            res.render("index", {
                data: "[]"
            });
        } else {
            res.render("index", {
                data: data
            });
        }
    } );
});

app.get( `/write_message/:message`, ( req, res ) => {
    let message = req.params.message;
    
    fs.readFile("docs/messages.json", 'utf-8', function(err, data){
        let messages = [];

        if ( data.length!=0 ){
            messages = JSON.parse( data );
        }

        messages.push( message );
        
        fs.writeFile( "docs/messages.json", JSON.stringify( messages ), err => {
            console.log(err);
        } );

        res.redirect("/");
    } );
});

app.listen( port, () => {
    console.log( `Example app listening on port ${port}` );
} )