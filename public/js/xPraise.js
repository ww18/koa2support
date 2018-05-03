/**
 * Created by ww on 2018/4/26.
 */
import XTagPraise from './Thumb.js';
//import css from '../css/index.css';
xtag.register('x-praise', {
    prototype: XTagPraise.prototype,
    lifecycle: {
        created: function(){
            this.start();
        }
    },
    methods: {
        start: function(){
            this.appendChild(this.container);
        }
    },
    events: {
        click(){
            this.addAnimation();
        }
    }
});