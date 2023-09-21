const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}



function firstpage(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity:0,
        duration:2.5,
        ease:Expo.easeInOut
    })
        
    tl.to(".boundingelem",{
        y:'0',
        duration:2,
        
    })
    
}

firstpage();
circleMouseFollower();