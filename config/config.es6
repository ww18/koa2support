/**
 * Created by ww on 2018/4/13.
 */
import path from 'path';
const CONFIG = new Map();
CONFIG.set('port', 3000);
CONFIG.set('viewDir', path.join(__dirname,'..','views'));
CONFIG.set('staticDir', path.join(__dirname,'..','./'));

export default CONFIG;
