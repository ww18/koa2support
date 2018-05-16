/**
 * Created by ww on 2018/5/16.
 */
var xCommon = xtag.register('x-common', {

    methods: {
        addAnimation(container){
            let temp = container;
            let ani = document.createElement('div');
            ani.className = 'support-ani';
            ani.innerHTML = '+1';
            container.appendChild(ani);
            //this.clickNum++;
            //this.numHtml.innerHTML = this.clickNum;
            setTimeout(()=>{
                temp.removeChild(ani);
            },1000)
        },
        postData: function(){
            let _this = this;

            axios.get('/index/update', {
                    params: {
                        username: document.getElementById("username").value,
                        num: parseInt(document.getElementById("num").value)+1
                    }
                })
                .then(function (response) {
                    const num = document.getElementById("num");
                    num.value = parseInt(num.value) + 1;
                    _this.addAnimation();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        throttle: function(fn, wait){
            var timer;
            return ()=>{
                if(!timer){
                    timer = setTimeout(()=>timer=null,wait);
                    return fn.apply(this);
                }
            }
        }


    },
    events: {
        click(){
            this.throttle(this.postData, 500)();
        }
    }
});


export default xCommon;