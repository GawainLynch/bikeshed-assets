// tslint:disable:quotemark
// tslint:disable:object-literal-sort-keys
const glob = require('glob');
const bikeshed = require('./bikeshed.js');

module.exports = (encore) => {
    return {
        base: '.',
        src: 'html/base.html',
        dest: `${bikeshed.assetDir}/critical.css`,
        css: glob.sync(`${bikeshed.assetDir}/*.css`),
        assetPaths: [
            bikeshed.assetDir,
        ],
        // Inline the generated critical-path CSS
        // - true generates HTML
        // - false generates CSS
        inline: false,
        inlineImages: false,
        minify: encore.isProduction(),
        extract: false, // requires inline:true
        ignore: {
            atrule: ['@font-face'],
            decl: (node, value) => /url\(/.test(value),
        },
    };
};
