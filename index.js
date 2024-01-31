const fs = require("fs");
const path = require("path");
fs.writeFile('details.txt','This is a details',(err)=>{
    if(err)throw err;
    console.log('The file was create!');
});