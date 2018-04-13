/**
 * Created by ww on 2018/4/13.
 */
import indexController from './indexController';
var initController = {
    init(app, router){


        //路由
        router.get('/index/index', indexController.index());


        //地址
        router.get('/index/update', indexController.update());
    }
}
export default initController;