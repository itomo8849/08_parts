const triggerEls = document.querySelectorAll(".js_style_1");

gsap.set(triggerEls, {
  opacity: 0,
  filter: "grayscale(100%) brightness(150%)",
});

ScrollTrigger.batch(triggerEls, {
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
