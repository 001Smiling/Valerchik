let index=0;

show_image(index);

function show_image(i){
    index +=i;

    let images = document.getElementsByClassName("comment");
// if($(window).width() < 650){
    for (i=0; i<images.length; i++){ //убирает изображения с сайта
        images[i].style.display = "none";
    }
// }
   

    if(index > images.length -1){
        index = 0;
    }

    if(index < 0){
        index = images.length -1;
    }

    images[index].style.display = "flex";
}