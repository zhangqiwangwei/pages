
const express = require('express');
//const sockjs = require('sockjs');
const chokidar = require('chokidar');
//const renderer = require('vue-server-renderer').createRenderer();
const { getLinkUrl } = require('../ssr/util/tool');
const path = require('path');
const resolve = (file) => path.resolve(__dirname, file);
var server = express();

const isProd = process.env.NODE_ENV === 'production';

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
});
server.use('/public', serve('./public', true));

//echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
//echo.on('connection', function(conn) {
//    conn.on('data', function(message) {
//        conn.write(message);
//    });
//    conn.on('close', function() {});
//});


let pathCache = {};
server.get('/getbootstrap', (req, res) => {
    let bootstrapTempaltePath = "../public/bootstrap.html";
    let bootstrapTemplate = require('fs').readFileSync(resolve(bootstrapTempaltePath), 'utf-8');
    let siteHtml = "";
    getLinkUrl(bootstrapTemplate,req.query.website,req.query.require).then((data)=>{
        siteHtml = data;
        update()
    });
    function update(){
        let bootstrapContent = require('fs').readFileSync(resolve("../bootstrap/"+req.query.path), 'utf-8');
        let productList = require('fs').readFileSync(resolve("../public/product-list.html"), 'utf-8');
        res.end(siteHtml.replace("{{context}}",bootstrapContent.replace(/{{(.*)}}/g,productList)))
    }
    if(!pathCache[req.query.path]){
        chokidar.watch(resolve("../bootstrap/"+req.query.path)).on('change', () => {
            console.time("bootstrap updated");
            update();
            console.timeEnd("bootstrap updated");
        });
        pathCache[req.query.path] = true;
    }

});
const port = 8081;

//echo.installHandlers(server, {prefix:'/echo'});
server.listen(port);
//echo.installHandlers(server.listeningApp, {
//    prefix: this.server.sockPath,
//});
console.log(`server port ${port}`);
