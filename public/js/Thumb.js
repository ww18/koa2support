//import PraiseButton from './PraiseButton.js';

class Thumb extends PraiseButton{
    constructor(opt){
        //super();
        this.opt = opt;
        this.clickNum = 0;
        this.container = '';
        this.numHtml = document.createElement('div');
        this.numHtml.className = 'support-number';
        //this.numHtml.innerHTML = this.clickNum;
        this.init();
    }
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
    }
}
export default Thumb;