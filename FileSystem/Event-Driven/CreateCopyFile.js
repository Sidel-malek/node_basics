var event = require("events");
var fs = require("fs");

var obj = new event.EventEmitter();

obj.addListener("write", function(){
    fs.writeFile("WriteFile","Hello world from write event", function(err){
        if(err) {
            console.error(err);
            return;
        }
        console.log("File written successfully.");
    });
});

obj.addListener("dup", function(){
    var src = "./WriteFile";
    var des = "./CopiedFile";
    fs.link(src, des, function(err) {
        if(err) {
            console.error(err);
            return;
        }
        console.log("Hard link created successfully.");
    });
});

obj.emit("write");
obj.emit("dup");

