
const express = require('express');
const chokidar = require('chokidar')
//const renderer = require('vue-server-renderer').createRenderer();
const { getLinkUrl } = require('./util/tool');
const path = require('path');
const resolve = (file) => path.resolve(__dirname, file);
var server = express();

const { createBundleRenderer } = require('vue-server-renderer')
const tempaltePath = resolve('../public/ssr.html');

let readyPromise,renderer;
const isProd = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
});
server.use('/public', serve('./public', true));
if(isProd){
    server.use('/dist', serve('./dist', true));
    //server.use("/ssr",express.static(path.join(__dirname, 'dist')));
    const template = require('fs').readFileSync(tempaltePath, 'utf-8');
    const boudle = require('./dist/vue-ssr-server-bundle.json');
    const clientManifest = require('./dist/vue-ssr-client-manifest.json');
    renderer = createBundleRenderer(boudle, {
        runInNewContext: false,
        template,
        clientManifest
    });
}
else {
    readyPromise = require('./setup-dev-server')(server,
        tempaltePath,
        (bundle, options) => {
            renderer = createBundleRenderer(bundle, options)
        }
    )
}

server.get('/home', (req, res) => {
    const context = { url: req.url };
    renderer.renderToString(context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error');
            return
        }
        if(req.query.website){
            getLinkUrl(html,req.query.website).then((data)=>{
                res.end(data);
            });
        }else{
            res.end(html);
        }
    })
});

server.get('/main', (req, res) => {
    res.end("<div><iframe src='./home'></iframe></div>");
});

let siteCache = {};
let pathCache = {};


server.get('/getbootstrap', (req, res) => {
    let bootstrapTempaltePath = "../public/bootstrap.html";
    let bootstrapTemplate = require('fs').readFileSync(resolve(bootstrapTempaltePath), 'utf-8');
    let siteHtml = "";
    getLinkUrl(bootstrapTemplate,req.query.website).then((data)=>{
        siteHtml = data;
        update();
    });
    function update(){
        let bootstrapContent = require('fs').readFileSync(resolve("../bootstrap/"+req.query.path), 'utf-8');
        res.end(siteHtml.replace("{{context}}",bootstrapContent))
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

const port = 8000;
server.listen(port);

console.log(`server port ${port}`);