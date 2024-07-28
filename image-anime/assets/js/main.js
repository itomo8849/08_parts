const style1Els = document.querySelectorAll(".js_style_1");

gsap.set(style1Els, {
  opacity: 0,
  filter: "grayscale(100%) brightness(150%)",
});

ScrollTrigger.batch(style1Els, {
  start: "top 80%",
  onEnter: (elements) => {
    const tl = gsap.timeline({ defaults: { ease: "ease" } });
    elements.forEach((el, i) => {
      tl
        .to(el,
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.3
          },
          i * 0.2
        )
        .to(el,
          {
            filter: "grayscale(0%) brightness(100%)",
            duration: 0.6
          },
          `-=${0.6 - 0.3}`
        );
    });
  },
  onLeaveBack: (elements) => {
    elements.forEach((el, i) => {
      gsap.to(el, {
        opacity: 0,
        filter: "grayscale(100%) brightness(150%)",
        duration: 0.3,
        overwrite: true,
        delay: 0.3,
      });
    });
  },
});

const changeHeight = document.querySelector(".js_changeHeight");
const img__1st = changeHeight.querySelector(".js_img__1");
const img__2nd = changeHeight.querySelector(".js_img__2");
var tlSec1 = gsap.timeline({
  scrollTrigger: {
    trigger: changeHeight,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

tlSec1.fromTo(img__2nd, {
  height: "0%",
}, {
  height: "100%",
})
.fromTo(img__2nd.querySelector("img"), {
  scale: "1.5",
}, {
  scale: "1",
}, 0)
.fromTo(img__1st, {
  height: "100%",
}, {
  height: "0%",
}, 0)
.fromTo(img__1st.querySelector("img"), {
  scale: "1",
}, {
  scale: "1.5",
}, 0);


var reviewImg2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".js_area__2",
    start: "top bottom",
    end: "50% 50%",
    scrub: true,
  }
});
reviewImg2.to(".bl_toBottom_img.js_img__2", {
    height: "100%",
  })
  .fromTo(".bl_toBottom_img.js_img__2 img", {
    scale: 1.2,
  }, {
    scale: 1,
  }, 0);

var reviewImg3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".js_area__3",
    start: "top bottom",
    end: "50% 50%",
    scrub: true,
  }
});
reviewImg3.to(".bl_toBottom_img.js_img__3", {
    height: "100%",
  })
  .fromTo(".bl_toBottom_img.js_img__3 img", {
    scale: 1.2,
  }, {
    scale: 1,
  }, 0);