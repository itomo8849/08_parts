const mask1 = document.querySelector(".bl_box_mask__1");
const mask2 = document.querySelector(".bl_box_mask__2");
const playButton = document.querySelector("button");
playButton.addEventListener("click", async () => {
  mask1.classList.remove("is_active");
  mask2.classList.remove("is_active");
  await new Promise((resolve) => setTimeout(resolve, 200));
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      mask1.classList.add("is_active");
      mask2.classList.add("is_active");
    });
  });
});

const scrollMaskTrigger = document.querySelector(".scrollMask");
const scrollMask1 = scrollMaskTrigger.querySelector(".bl_box_scrollMask__1");
const scrollMask2 = scrollMaskTrigger.querySelector(".bl_box_scrollMask__2");

const scrollAnime = gsap.timeline({
  scrollTrigger: {
    trigger: scrollMaskTrigger,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

scrollAnime.fromTo(scrollMask1, {
  css: {
    "mask-size": "100% , 0%",
    "-webkit-mask-size": "100% , 0%",
  },
}, {
  css: {
    "mask-size": "100% , 120%",
    "-webkit-mask-size": "100% , 120%",
  },
  duration: 1, // スクロール全体の進行範囲を1とする
});

// scrollMask2: 2から12で進行
scrollAnime.fromTo(scrollMask2, {
  css: {
    "mask-size": "100% , 0%",
    "-webkit-mask-size": "100% , 0%",
  },
}, {
  css: {
    "mask-size": "100% , 120%",
    "-webkit-mask-size": "100% , 120%",
  },
  duration: 1,
}, 0.1);