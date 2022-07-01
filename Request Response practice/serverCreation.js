const http= require('http');
const server=http.createServer((req,res)=>{
    let url=req.url;
    if(url==='/'){
        res.write("<h1>Hi There I'm Arun</h1>");
        res.write("<br><h2>Arun is a Canadian</h2>");
        return res.end();
    }
    res.write("<h1>YOUR're in responce page ok");
  //  setTimeout(()=>{
     return res.end();
   // },5000)
});
server.listen(3000);
