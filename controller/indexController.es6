/**
 * Created by ww on 2018/4/13.
 */
import indexModel from '../model/indexmodel';
const indexController = {
    index(){
        return async (ctx, next)=> {
            const data = ctx.query;
            ctx.body = await ctx.render('index.html', data);
        }
    },
    praise(){
        return async (ctx, next)=> {
            const data = ctx.query;
            if(ctx.request.header["x-pjax"]){
                ctx.body = '<x-praise></x-praise>';
            }else{
                ctx.body = await ctx.render('index.html', {container:'<x-praise></x-praise>'});
            }
        }
    },
    star(){
        return async (ctx, next)=> {
            const data = ctx.query;
            if(ctx.request.header["x-pjax"]){
                ctx.body = '<x-star></x-star>';
            }else{
                ctx.body = await ctx.render('index.html', {container:'<x-star></x-star>'});
            }

        }
    },
    update(){

        return async(ctx,next)=>{
            let data = ctx.query;
            let indexM = new indexModel(ctx);
            let req = await indexM.updateNum(data);
            //ctx.body = req;
            if(req){
                //console.log(data);
                ctx.redirect('/?username='+data.username + '&num='+data.num);
                //ctx.body = req;
            }
            //ctx.body = ctx.query.username + ctx.query.num;
        }
    }

}
export default indexController;


