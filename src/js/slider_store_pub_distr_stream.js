function  imgslider(){

    // img slider refer to https://www.codingsnow.com/2021/01/image-slider-with-auto-play-manual.html

    var counter_indexpage = 1;
    setInterval(function(){
        
        document.getElementById('radio_SPDS_indexpage' + counter_indexpage).checked = true;
        counter_indexpage++;
        console.log(counter_indexpage);
        if(counter_indexpage > 4){
            counter_indexpage = 1;
        }

    }, 4000);
}






// starts here
document.addEventListener('DOMContentLoaded', imgslider);

