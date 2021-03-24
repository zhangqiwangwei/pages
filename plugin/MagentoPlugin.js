const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { createBundleRenderer } = require('vue-server-renderer');
class MagentoPlugin {
    constructor(option) {
        this.filePath = option.filePath;
        this.fileName = option.fileName;
        this.additionalCode = option.additionalCode || ["",""];
        this.magentoEl = option.magentoEl;
        this.ssr = option.ssr;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap("MagentoPlugin", (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                'MagentoPlugin',
                (data, cb) => {
                    data.html = data.html.replace("{{boxDiv}}",`<div id="${this.magentoEl}"></div>`);
                    cb(null, data)
                }
            )
        });
        compiler.hooks.emit.tapAsync(
            'MagentoPlugin',
            (compilation, callback) => {
                const context = { url: "/" };
                var outPut = {};
                for (let i in compilation.assets) {
                    if(/\.css$/.test(i)){
                        outPut["css"] = `<style>${compilation.assets[i]._source.children[0]._value}</style>`
                    } else if(/\.html$/.test(i)){
                        if(this.ssr){
                            const boudle = require('../ssr/dist/vue-ssr-server-bundle.json');
                            let renderer = createBundleRenderer(boudle);
                            renderer.renderToString(context, (err, html) => {
                                if (err) {
                                    return
                                }
                                outPut["html"] = html;
                                this.writeFile(outPut);
                            })
                        }else{
                            outPut["html"] = `<div id="${this.magentoEl}"></div>`;
                        }

                    }else if (/\.js$/.test(i)) {
                        outPut["js"] = `<script>${this.additionalCode[0]}${compilation.assets[i]._value}${this.additionalCode[1]}</script>`
                    }
                }
                if(!this.ssr){
                    this.writeFile(outPut);
                }
                callback();
            }
        );
    }
    writeFile(outPut){
        fs.writeFile(this.filePath +"/"+ this.fileName, `${outPut["css"]}${outPut["html"]}${outPut["js"]}`, 'utf8', function (error) {
            if (error) {
                console.log(error);
                return false;
            }
        });
    }
}
module.exports = MagentoPlugin;