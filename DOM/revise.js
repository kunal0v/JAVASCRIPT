gsap.from(".parent #p1",{
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:".parent #p1",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"50%",
        scrub:5,
    }
})



gsap.from(".parent2 #p2",{
    scale:0,
    duration:2,
    // scrollTrigger:".parent2 #p2"
    scrollTrigger:{
        trigger:".parent2 #p2",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"50%",
        scrub:5,
    }
})



gsap.from(".parent3 #p3",{
    scale:0,
    duration:2,
    // scrollTrigger:".parent3 #p3"
    scrollTrigger:{
        trigger:".parent3 #p3",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"50%",
        scrub:5,
    }
})