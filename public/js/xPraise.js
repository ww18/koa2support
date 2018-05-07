/**
 * Created by ww on 2018/4/26.
 */
import xPraiseButton from './PraiseButton.js';
import axios from 'axios';
import css from '../css/index.css';
xtag.register('x-praise', {
    prototype: xPraiseButton.prototype,
    lifecycle: {
        created: function(){
            this.timer = '';
            this.start();
        }
    },
    methods: {
        start: function(){
            this.appendChild(this.container);
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