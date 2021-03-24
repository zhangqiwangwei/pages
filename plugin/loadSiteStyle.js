const { getLinkUrl } = require('../ssr/util/tool');
const HtmlWebpackPlugin = require('html-webpack-plugin');
class LoadSiteStyle {
    constructor(siteUrl) {
        this.siteUrl = siteUrl;
        this.html = "";
        this.magentoEl = "app"
    }

    apply(compiler) {
        compiler.hooks.compilation.tap("LoadSiteStyle", (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                'MagentoPlugin',
                (data, cb) => {
                    this.html = data.html.replace("{{boxDiv}}", `<div id="${this.magentoEl}"></div>`);
                    getLinkUrl(this.html, this.siteUrl).then((newHtml)=> {
                        data.html = newHtml;
                        cb(null, data);
                    });
                }
            )
        });
        compiler.hooks.emit.tapAsync(
            'LoadSiteStyle',
            (compilation, callback) => {
                var html = "";
                for (let i in compilation.assets) {
                    if (/\.html$/.test(i)) {
                        html = `<div id="${this.magentoEl}"></div>`;
                    }
                }
                callback();
            }
        );
    }
}
module.exports = LoadSiteStyle;