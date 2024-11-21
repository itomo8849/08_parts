const part1Els = document.querySelectorAll(".js_part_1");

gsap.set(part1Els, {
  opacity: 0,
  filter: "grayscale(100%) brightness(150%)",
});

ScrollTrigger.batch(part1Els, {
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
    elements.forEach((el) => {
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

const part2El = document.querySelector(".js_part_2");
const img1st = part2El.querySelector(".js_img__1");
const img2nd = part2El.querySelector(".js_img__2");

const part2ElAnime = gsap.timeline({
  scrollTrigger: {
    trigger: part2El,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

part2ElAnime.fromTo(img2nd, {
  height: "0%",
}, {
  height: "100%",
})
.fromTo(img2nd.querySelector("img"), {
  scale: 1.5,
}, {
  scale: 1,
}, 0)
.fromTo(img1st, {
  height: "100%",
}, {
  height: "0%",
}, 0)
.fromTo(img1st.querySelector("img"), {
  scale: 1,
}, {
  scale: 1.5,
}, 0);


const part3El = document.querySelector(".js_part_3");
const triggers = [
  { trigger: part3El.querySelector(".js_area__2"), imgClass: ".js_img__2" },
  { trigger: part3El.querySelector(".js_area__3"), imgClass: ".js_img__3" }
];

triggers.forEach(({ trigger, imgClass }) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "50% 50%",
      scrub: true,
    }
  })
  .to(part3El.querySelector(imgClass), {
    height: "100%",
  })
  .fromTo(part3El.querySelector(`${imgClass} > img`), {
    scale: 1.2,
  }, {
    scale: 1,
  }, 0);
});

const part4El = document.querySelector(".js_part_4");
const part4ElTriggers = [
  { trigger: part4El.querySelector(".js_trigger__1"), areaClass: part4El.querySelector(".js_area__1") },
  { trigger: part4El.querySelector(".js_trigger__2"), areaClass: part4El.querySelector(".js_area__2") },
  { trigger: part4El.querySelector(".js_trigger__3"), areaClass: part4El.querySelector(".js_area__3") }
];

part4ElTriggers.forEach(({ trigger, areaClass }) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      // markers: true,
      toggleActions: 'play reverse play reverse',
    }
  })
  .fromTo(areaClass.querySelector(".bl_text"), {
    x: "100%",
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 0.3,
  })  // 追加：前のアニメーションと同時に開始
  .fromTo(areaClass.querySelector(".el_lv3Heading"), {
    y: "100%",
    opacity: 0,
    duration: 0.3,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.3,
  }, "<")
  .fromTo(areaClass.querySelector("img"), {
    x: "100%",
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 0.3,
  }, "<")
  
  // .fromTo(areaClass.querySelector("img"), {
  //   filter: "grayscale(100%) brightness(150%)",
  //   duration: 0.3,
  // }, {
  //   filter: "grayscale(0%) brightness(100%)",
  //   duration: 0.3,
  // },"-=0.1")
  ;  // 追加：前のアニメーションと同時に開始
});
