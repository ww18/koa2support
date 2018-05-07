const dev = require('./webpack/webpack.dev.js');
const prod = require('./webpack/webpack.prod.js');



switch(process.env.NODE_ENV){
    case 'dev':
        module.exports = dev;
        break;
    case 'prod':
        module.exports = prod;
        break;
    default:
        module.exports = dev;
        break;
}
