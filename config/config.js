'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = new Map(); /**
                         * Created by ww on 2018/4/13.
                         */

CONFIG.set('port', 3000);
CONFIG.set('viewDir', _path2.default.join(__dirname, '..', 'views'));
CONFIG.set('staticDir', _path2.default.join(__dirname, '..', 'public'));

exports.default = CONFIG;