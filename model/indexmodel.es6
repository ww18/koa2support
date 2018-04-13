/**
 * Created by ww on 2018/4/13.
 */
import rp from 'request-promise';
class IndexModel{
    constructor(ctx){
        this.ctx = ctx;
    }
    updateNum(data){
        const options = {
            uri: 'http://support.com:8061/praise.php?username='+data.username + '&num='+data.num,
            method: 'GET'
        };

        return new Promise((resolve, reject)=>{
            console.log(options);
            rp(options).then(function(result){
                console.log(result);
                if(result){
                    resolve(result);
                }else{
                    reject('');
                }
            }).catch((err)=>{
                console.log(3);
                reject(err);
            })
        })
    }
}
export default IndexModel;