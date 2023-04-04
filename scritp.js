
let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}




function slideshow(num) {

    let slider = document.getElementsByClassName("slider");

    if (num == slider.length) {
        flag = 0;
        num = 0;
    }

    if (num < 0) {
        flag = slider.length - 1
        num = slider.length - 1;
    }

    for (let y of slider) {
        y.style.display = "none";
    }


    slider[num].style.display = "block";
}