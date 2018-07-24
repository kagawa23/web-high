var height = document.documentElement.clientHeight;

function lazyload(){
 var elems = document.querySelectorAll('img[lazyload][data-original]');
 elems.forEach(function(elem){
    if(elem.dataset.origin === ''){
        return;
    }
    var rect = elem.getBoundingClientRect();
    if(rect.bottom >=0 && rect.top <=height){
       var image = new Image();
        image.src = elem.dataset.original;
        image.onload = function(){
            elem.src = image.src;
        }
        elem.removeAttribute('data-original')
        elem.removeAttribute('lazyload')
    }
 });
}

lazyload();
window.addEventListener('scroll', lazyload);