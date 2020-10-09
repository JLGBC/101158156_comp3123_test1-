var path = window.location.pathname;
var fs = require('fs');
if(path != null){
    fs.unlink(path, (err) => {
        if (err) {
            console.log("No file to delete");
        } else {
            console.log(path);
            console.log('delete files...'+path);                                
        }
    });
}

