const http=require('http');
const server=http.createServer((req,res)=>{
    let url=req.url;
    if(url=='/'){
        res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<form action=\"/add\" method='post'>")
        res.write("Enter Number 1 : <input name='num1' value='10' type='number'/><br>");
        res.write("Enter Number 2 : <input name='num2' value='20' type='number'/><br>");
        res.write("<input type='submit'/>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if(url=="/add"){
        const body=[];
        req.on('data',(chunk)=>{
          body.push(chunk);
        });
        req.on('end',()=>{
            const data=Buffer.concat(body).toString();
            const val=data.split("&");
            let sum=0;
            for(let i of val){
                sum+=parseInt(i.split("=")[1]);
            }
            console.log("The SUM IS ",sum);
        });
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();
    }
    res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<b>Page Not Found 404 :(</b>");
        res.write("</body>");
        res.write("</html>");
        res.statusCode=404;
        return res.end();
});
server.listen(8080);
