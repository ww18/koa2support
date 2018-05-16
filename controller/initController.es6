/**
 * Created by ww on 2018/4/13.
 */
import indexController from './indexController';
var initController = {
    init(app, router){


        //路由
        router.get('/', indexController.index());
        //路由
        router.get('/praise', indexController.praise());
        //路由
        router.get('/star', indexController.star());


        //地址
        router.get('/index/update', indexController.update());
    }
}
export default initController;