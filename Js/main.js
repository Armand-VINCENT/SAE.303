gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector(".sec1 .box1");
const box2 = document.querySelector(".sec1 .box2");

gsap.to(box1, {
  xPercent: 500,
  duration: 2,
  scrollTrigger: {
    trigger: box1,
    toggleActions: "restart reverse play reverse",
    start: "top 40%",
    end: "bottom 30%",
    markers: false,
    scrub: 1
  }
});

gsap.to(box2, {
  xPercent: 500,
  duration: 2,
  scrollTrigger: {
    trigger: box1,
    toggleActions: "restart reverse play reverse",
    start: "top 40%",
    end: "bottom 30%",
    scrub: 3
  }
});

gsap.from(".sec2 .box", {
    scrollTrigger : {
        trigger : ".sec2 .box",
        toggleActions : "restart none none reset",
        start : "top 80%",
        markers : false,
    },
    y : 100,
    opacity : 0,
    scale : 0,
    ease : "elastic(0.4,0.15)",
    duration : 1,
    stagger : 0.1,
})