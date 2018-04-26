/**
 * Created by ww on 2018/4/26.
 */
import XTagPraise from './Thumb.js';
//import css from '../css/index.css';
xtag.create('x-praise', class CC extends XTagPraise{
    connectedCallback () {
        this.start();
    }
    start (){
        this.appendChild(this.container);
    }
    stop (){

    }
    update (){

    }
    'click::event' (){
        this.addAnimation();
    }
});