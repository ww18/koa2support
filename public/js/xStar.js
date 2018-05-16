/**
 * Created by ww on 2018/4/26.
 */
import xCommon from './common.js';

xtag.register('x-star', {
    prototype: xCommon.prototype,
    lifecycle: {
        created: function(){
            this.container = '';
            this.start();
        }
    },
    methods: {
        createEle(){
            const arr = ['support-thumb','support-indexfinger','support-middlefinger','support-ringfinger','support-litterfinger','support-hand','support-arm'];
            let divContainer = document.createElement('div');
            divContainer.className = 'support-container';
            arr.forEach((item, index)=>{
                let ele = document.createElement('div');
                ele.className = item;
                divContainer.appendChild(ele);
            });
            this.container = divContainer;
        },
        start: function(){
            this.createEle();
            this.appendChild(this.container);
        },

    },

});