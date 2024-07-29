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

const changeHeight = document.querySelector(".js_changeHeight");
const img1st = changeHeight.querySelector(".js_img__1");
const img2nd = changeHeight.querySelector(".js_img__2");

const changeHeightAnime = gsap.timeline({
  scrollTrigger: {
    trigger: changeHeight,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

changeHeightAnime.fromTo(img2nd, {
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


const toBottomSect = document.querySelector(".js_toBottom");
const triggers = [
  { trigger: document.querySelector(".js_area__2"), imgClass: ".js_img__2" },
  { trigger: document.querySelector(".js_area__3"), imgClass: ".js_img__3" }
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
  .to(toBottomSect.querySelector(imgClass), {
    height: "100%",
  })
  .fromTo(toBottomSect.querySelector(`${imgClass} > img`), {
    scale: 1.2,
  }, {
    scale: 1,
  }, 0);
});

const blockAnime = document.querySelector(".js_blockAnime");
const blockAnimeTriggers = [
  { trigger: blockAnime.querySelector(".js_trigger__1"), areaClass: blockAnime.querySelector(".js_area__1") },
  { trigger: blockAnime.querySelector(".js_trigger__2"), areaClass: blockAnime.querySelector(".js_area__2") },
  { trigger: blockAnime.querySelector(".js_trigger__3"), areaClass: blockAnime.querySelector(".js_area__3") }
];

blockAnimeTriggers.forEach(({ trigger, areaClass }) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "bottom center",
      // markers: true,
      toggleActions: 'play reverse play reverse',
    }
  })
  .fromTo(areaClass.querySelector("img"), {
    x: "100%",
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 0.3,
  })
  .fromTo(areaClass.querySelector(".bl_text"), {
    x: "100%",
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 0.3,
  }, "<")  // 追加：前のアニメーションと同時に開始
  .fromTo(areaClass.querySelector(".el_ttl"), {
    y: "100%",
    opacity: 0,
    duration: 0.3,
  }, {
    y: 0,
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
