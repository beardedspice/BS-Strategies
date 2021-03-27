
var fs = require('fs');
var path = require('path');

const BASEPATH =  path.dirname(__dirname)+'/';
const MANIFEST = BASEPATH+'manifest.json';
const STRATEGY_EXT = '.bsstrategy';

try {
    let out = {};
    fs.readdirSync(BASEPATH).forEach(el => {
        if (path.extname(el) == STRATEGY_EXT) {
            try {
                let stg = fs.readFileSync(BASEPATH+el, 'utf8');
                const obj = eval(stg);
                out[path.basename(el, STRATEGY_EXT)] = {'version': obj.version, 'name': obj.displayName};
            } catch (error) {
                console.error(error)
            }
        }
    });    
    fs.writeFileSync(MANIFEST,JSON.stringify(out));
    console.log('manifest.json updated');
} catch (error) {
    console.error(error)
}
