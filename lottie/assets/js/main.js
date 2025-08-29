document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".bl_sect");

  sections.forEach((section) => {
    const lottie = section.querySelector(".sectionStart");

    if (lottie) {
      lottie.addEventListener("ready", () => {
        const inst = lottie.getLottie();
        LottieInteractivity.create({
          player: lottie,
          mode: "scroll",
          container: lottie, // 各セクションごとに設定
          actions: [
            {
              visibility: [0.1, 1.5],
              type: "seek",
              frames: [0, inst.totalFrames - 1],
            },
          ],
        });
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const centerStarts = document.querySelectorAll(".centerStart");

  centerStarts.forEach((centerStart) => {
    // Lottieの準備ができたら処理
    centerStart.addEventListener("ready", () => {
      ScrollTrigger.create({
        trigger: centerStart,
        start: "top center", // 画面中央にきたら発火
        onEnter: () => {
          centerStart.seek(0);  // 最初に戻す
          centerStart.play();   // 再生
        },
        onLeaveBack: () => {
          centerStart.stop();   // 戻るときに停止
        },
        markers: true,
      });
    });
  });
});
