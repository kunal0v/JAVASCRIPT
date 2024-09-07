gsap.to(".parent img",{
    width:"100%",
    scrollTrigger:{
        trigger:".parent",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true,
    }
})