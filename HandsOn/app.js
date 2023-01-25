var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf-8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe.txt')

// myReadStream.on('data',function(chunk){
//     console.log('new chuck Received');
//     // console.log(chunk);
//     myWriteStream.write(chunk);
// });

myReadStream.pipe(myWriteStream);
