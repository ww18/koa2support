'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by ww on 2018/4/13.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexModel = function () {
    function IndexModel(ctx) {
        _classCallCheck(this, IndexModel);

        this.ctx = ctx;
    }

    _createClass(IndexModel, [{
        key: 'updateNum',
        value: function updateNum(data) {
            var options = {
                uri: 'http://support.com:8061/praise.php?username=' + data.username + '&num=' + data.num,
                method: 'GET'
            };

            return new Promise(function (resolve, reject) {
                console.log(options);
                (0, _requestPromise2.default)(options).then(function (result) {
                    console.log(result);
                    if (result) {
                        resolve(result);
                    } else {
                        reject('');
                    }
                }).catch(function (err) {
                    console.log(3);
                    reject(err);
                });
            });
        }
    }]);

    return IndexModel;
}();

exports.default = IndexModel;
