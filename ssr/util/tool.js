const superagent = require("superagent");
const cheerio = require("cheerio");
const path = require('path');
const resolveFile = (file) => path.resolve(__dirname, file);
let requireConfig = "";
let siteCache = {};
function formatStyle(html,siteUrl,links,hasRequire,resolve){
    var newHtml =  cheerio.load(html);
    for(var i=0;i<links.length;i++){
        if(links[i]["attribs"]["href"].indexOf("http") == -1){
            links[i]["attribs"]["href"] = siteUrl + links[i]["attribs"]["href"];
        }
        newHtml("head").append(links[i]);
    }
    if(hasRequire){
        var code = require("fs").readFileSync(resolveFile("../../config/require.config.js"), "utf-8");
        newHtml("head").append('<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script>');
        newHtml("head").append('<script>'+code+'</script>');
    }
    resolve(newHtml("html").html());
}
module.exports.getLinkUrl =  function (html,siteUrl,hasRequire){
    return  new Promise(function(resolve, reject) {
        if(siteCache[siteUrl]){
            formatStyle(html,siteUrl,siteCache[siteUrl],hasRequire,resolve);
        }else{
            superagent.get(siteUrl).end(function(err,pres) {
                siteCache[siteUrl] = cheerio.load(pres.text)("link");
                formatStyle(html,siteUrl,siteCache[siteUrl],hasRequire,resolve);
            });
        }
    });
};

