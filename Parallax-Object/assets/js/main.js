gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.js_parallaxObj').forEach(el => {
  const x = parseFloat(el.dataset.parallaxX) || 0;
  const y = parseFloat(el.dataset.parallaxY) || 0;
  const lag = parseFloat(el.dataset.parallaxLag) || 0.5;

  // 慣性付きパララックス
  gsap.to(el, {
    x, y,
    ease: "none",
    scrollTrigger: {
      trigger: el,          // ページ全体でも可
      start: "top bottom",  // 画面下から入ったら開始
      end: "bottom top",    // 画面上に抜けるまで
      scrub: lag          // scrubに数値を渡すと「遅れ」が出る
    }
  });
});