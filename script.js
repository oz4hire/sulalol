window.onload = function(){
    [...document.getElementsByTagName('img')].forEach(e=>{
        e.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        e.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        e.style.height = Math.floor(Math.random() * 500) + 'px';
        e.style.zIndex = 0;
    })
}
