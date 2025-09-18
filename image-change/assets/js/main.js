gsap.registerPlugin(ScrollTrigger);

const svg = document.querySelector(".photo-wrap");
const sections = document.querySelectorAll(".content-section");

// maskRect を配列でまとめる
const maskRects = [
  document.getElementById("maskRect1"),
  document.getElementById("maskRect2"),
  document.getElementById("maskRect3"),
];

const images = [
  svg.querySelector('image[href*="image__01.webp"]'),
  svg.querySelector('image[href*="image__02.webp"]'),
  svg.querySelector('image[href*="image__03.webp"]'),
];


function calcDeltas() {
  const r = svg.getBoundingClientRect();
  return { dx: r.width * -3, dy: r.height * -1.5 };
}
let deltas = calcDeltas();
window.addEventListener("resize", () => (deltas = calcDeltas()));

sections.forEach((section, i) => {
  if (i >= maskRects.length) return;

  const maskRect = maskRects[i];
  const img = images[i];

  ScrollTrigger.create({
    trigger: section,
    start: "top 20%",
    end: "top -20%",
    scrub: true,
    onUpdate(self) {
      const p = self.progress; // 0..1

      // マスクの動き
      gsap.set(maskRect, {
        x: -180 + deltas.dx * p,
        y: -225 + deltas.dy * p,
        rotation: -45 * p,
        transformOrigin: "50% 50%",
      });

      // 画像フィルター（blur & brightness）
      // blur: 0 → 8px, brightness: 1 → 3.5
      gsap.set(img, {
        filter: ` brightness(${1 + (3.5 - 1) * p})`,
      });
    },
  });
});
