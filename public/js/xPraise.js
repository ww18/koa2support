/**
 * Created by ww on 2018/4/26.
 */
import xPraiseButton from './PraiseButton.js';
//import css from '../css/index.css';
xtag.register('x-praise', {
    prototype: xPraiseButton.prototype,
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