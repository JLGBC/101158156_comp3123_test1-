var fs = require('fs');

for(x = 0; x<10;x++){
    fs.appendFile(x, "Hello! "+x, function(err){
        if (err) throw err;
        console.log("file: " + x+ " has been created.");
    })
}

