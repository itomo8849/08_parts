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
      tl.to(el, { opacity: 1, duration: 0.6, stagger: 0.3 }, i * 0.2).to(
        el,
        { filter: "grayscale(0%) brightness(100%)", duration: 0.6 },
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

// const triggerEls = document.querySelectorAll(".js_trigger");
// gsap.set(triggerEls, {
//   opacity: 0,
//   filter: "grayscale(100%) brightness(150%)",
// });
// ScrollTrigger.batch(triggerEls, {
//   start: "top 80%",
//   onEnter: (elements) =>
//     gsap.to(elements, {
//       opacity: 1,
//       filter: "grayscale(0%) brightness(100%)",
//       stagger: 0.3,
//     }),
//   onLeaveBack: (elements) =>
//     gsap.set(elements, { opacity: 0, overwrite: true }),
// });

// triggerEls.forEach((triggerEl) => {
//   ScrollTrigger.create({
//     trigger: triggerEl,
//     start: "top 70%",
//     end: "bottom 10%",
//     toggleClass: {
//       targets: triggerEl,
//       className: "is_active",
//     },
//     // once: true,
//     markers: true,
//   });
// });

// gsap.set(triggerEls, { y: 100, opacity: 0 });
