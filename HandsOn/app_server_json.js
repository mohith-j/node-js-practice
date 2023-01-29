var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    // console.log('request was made:'+req.url);
    // res.writeHead(200, {'Content-Type':'text/plain'});
    // var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf-8');
    // myReadStream.pipe(res);
    // res.end('Hey nodejs');
    console.log('request was made by:'+req.url);
    res.writeHead(200, {'Content-Type':'application/json'});
    var myObj={
        name:'Mohi',
        job:'Student',
        age:23
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');