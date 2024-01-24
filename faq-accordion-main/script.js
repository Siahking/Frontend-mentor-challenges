function hideAll(){
    const ansarr = ['#one','#two','#three','#four'];
    const picarr = ['#pic1','#pic2','#pic3','#pic4'];
    ansarr.forEach((item) => document.querySelector(item).hidden = true);
    picarr.forEach((item) => document.querySelector(item).src = "assets/images/icon-plus.svg")
}

function answer(number,image){
    item = document.getElementById(number);
    image = document.getElementById(image);
    if (!item.hidden){
        hideAll();
        image.src = "assets/images/icon-plus.svg";
    } else {
        hideAll(); 
        item.hidden = false;
        image.src = "assets/images/icon-minus.svg";
    }
    
}