/**
 * Created by ww on 2018/3/27.
 */
//import xtag from 'x-tag';

var xPraiseButton = xtag.register('x-praiseButton', {
    lifecycle: {
        created: function(){
            this.html = '';
            this.container = '';
            this.numHtml = document.createElement('div');
            this.numHtml.className = 'support-number';
            this.createEle();
            this.init();
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
            this.html = divContainer;
        },
        addAnimation(){
            let ani = document.createElement('div');
            ani.className = 'support-ani';
            ani.innerHTML = '+1';
            this.html.appendChild(ani);
            //this.clickNum++;
            //this.numHtml.innerHTML = this.clickNum;
            setTimeout(()=>{
                this.html.removeChild(ani);
            },1000)
        },
        init(){
            const container = document.createElement('div');
            if(container){
                container.appendChild(this.numHtml);
                container.appendChild(this.html);
                this.html.addEventListener('click',()=>{
                    this.opt.callback();
                })
            }
            this.container = container;
        }

    }
});


export default xPraiseButton;

