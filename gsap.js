// nav logo part

gsap.from(".logo h2 ", {
  y: -30,
  opacity: 0,
  delay: 0.2,
  duration: 0.5,
  stagger: 0.3,
  yoyo: true,
  // repeat: -1,
});

// nav links part

gsap.from("#nav ul li a", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  yoyo: true,
});

// section 1 box 1 part

gsap.from("#section1 .box1 h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

// section 1 box2

gsap.to("#section1 .box2 ", {
  y: -100,
  duration: 5,
  scrollTrigger: {
    trigger: "#section1 .box2 img",
    scroller: "body",
    start: "top 10%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from("#section2 .box2 h1,h6,h4", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#section2 .box2 h1,#section2 .box2 h6,#section2 .box2 h4",
    scroll: "body",
    duration: 0.5,
  },
});

gsap.from("#section3 .box1 h1,h3", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    start: "top 70%",
    trigger: "#section3 .box1 h1,h3",
    scroll: "body",
    duration: 0.5,
  },
});

gsap.from("#section3 .box2 ", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    start: "top 70%",
    trigger: "#section3 .box2",
    scroll: "body",
    duration: 0.5,
  },
});
gsap.from("#section4 .box1 img", {
  x: -200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#section4 .box1 img",
    scroll: "body",
  },
});

gsap.to("#section4 .box1", {
  rotate: 90,
  duration: 5,
  scrollTrigger: {
    trigger: "#section4 .box1 img",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 1,
  },
});

gsap.from("#section4 .box2 ", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#section4 .box2",
    scroll: "body",
    duration: 0.5,
    start: "top 70%",
  },
});

gsap.from("#section5 .box1 h1,#section5 .box1 p ", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#section5 .box1 h1,#section5 .box1 p ",
    scroll: "body",
    // duration: 0.5,
  },
});

gsap.from("#section5 .box2 img", {
  x: 300,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#section5 .box2 img",
    scroll: "body",
    start: "top 50%",
  },
});

gsap.from("#section5 .box2 img", {
  y: 30,
  duration: 1,
  repeat: -1,
  yoyo: true,

  scrollTrigger: {
    trigger: "#section5 .box2 img",
    scroll: "body",
  },
});
