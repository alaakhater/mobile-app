window.onload = startPage

function startPage() {
    setInterval(function(){
        $("#myvideo").css("filter","blur(5px)");
        $("#myvideo").css("opacity","0.5");
        $(".start").css("opacity","1");
},
1500);
}
$("#btn").on("click",function(){
    $(".firstpage").css("display","none");
    $(".secpage").fadeIn(500,function(){});
})

$("#getStarted").on("click",function(){
    $(".secpage").css("display","none");
    $(".home").fadeIn(500,function(){});
    $(".menu").fadeIn(500,function(){});
})

$("#doctor").on("click",function(){
    $(".home").css("display","none");
    $(".doctor").fadeIn(500,function(){});
})
$("#home").on("click",function(){
    $(".doctor").css("display","none");
    $(".home").fadeIn(500,function(){});
})


//active
$(document).on("click",".mycontainer nav .nav-container .nav-icon",function(){
    $(this).addClass("active").siblings().removeClass("active")
})

//carousel

let slideIndex = 0;
const showSlides = () => {
    const slides = document.getElementsByClassName("mySlides");
    const dot = document.getElementsByClassName("dot");
    for (let i=0;i<slides.length;i++){
        slides[i].style.display = "none"
        
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    for(let i=0;i<dot.length;i++){
        dot[i].className = dot[i].className.replace(" active1","");
    }
    slides[slideIndex - 1].style.display = "block";
    
    dot[slideIndex -1].className += " active1"
    setTimeout(showSlides,3000);
};
showSlides();
