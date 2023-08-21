function  imgslider(){

    // img slider refer to https://www.codingsnow.com/2021/01/image-slider-with-auto-play-manual.html

    var counter_indexpage = 1;

    setInterval(function(){
        
        document.getElementById('radio_SPDS_indexpage' + counter_indexpage).checked = true;
        document.getElementById('radio_SPDS_indexpage_detailtext' + counter_indexpage).checked = true;

        
        for (let i = 1; i <= 4; i++) {
            if (i == counter_indexpage){ continue}
            if (document.getElementById('manual-btn' + i).classList.contains("manual-btn-active") ){
                document.getElementById('manual-btn' + i).classList.remove("manual-btn-active");
            } 
        }
        document.getElementById('manual-btn' + counter_indexpage).classList.add("manual-btn-active");


        counter_indexpage++;
        // console.log(counter_indexpage);
        if(counter_indexpage > 4){
            counter_indexpage = 1;
        }


    }, 6000);
}



function changeActiveSlide(event){
    console.log("clickOneTask: ", event.target);
    console.log("clickOneTask on Tag: ", event.target.tagName);
    console.log("clickOneTask class name: ", event.target.className);
}

function starter() {
    imgslider();
    
    
    let manualbtns = document.getElementById('manul-btn-all-labels');
    console.log(manualbtns);
    // console.log(manualbtns.item[0]);
    // console.log(manualbtns.item.length);
    // console.log(manualbtns[0]);
    // .addEventListener('click', event => changeActiveSlide(event));
    // .addEventListener('click', event => changeActiveSlide(event));
    // .addEventListener('click', event => changeActiveSlide(event));
    // .addEventListener('click', event => changeActiveSlide(event));
}

// starts here
document.addEventListener('DOMContentLoaded', starter());


