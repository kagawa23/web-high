import './test.js';
import './index.css';

var dom = document.getElementsByTagName('body')[0];
dom.innerHTML="<p class='test-style'>This is test</p>"
if(navigator.serviceWorker){
    window.addEventListener('DOMContentLoaded',function(){
        navigator.serviceWorker.register('./sw.js')
    })
}