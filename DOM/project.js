gsap.to(".p2 h1",{
    transform:"translateX(-300%)",
    scrollTrigger:{
        trigger:".p2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:6,
        pin:true,
    }
})