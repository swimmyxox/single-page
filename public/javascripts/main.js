window.addEventListener("DOMContentLoaded", () => {
  const observer = lozad(".lozad", {
    rootMargin: "200px 0px",
  });
  observer.observe();

  // add animation
  (() => {
    let image = document.querySelectorAll(".hero_img , .item");
    let animation = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          const d = document.createElement("div");
          d.className = "animation_slidein";
          entry.target.appendChild(d);
          entry.target.classList.add("animation_fade");
        } else {
          entry.target.classList.remove("animation_fade");
        }
      });
    });
    image.forEach((item) => {
      animation.observe(item);
    });
  })();

  (() => {
    let text = document.querySelectorAll(".text");
    let show = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
        }
      });
    });
    text.forEach((item) => {
      show.observe(item);
    });
  })();

  // nav color change
  document.querySelector(".wrapper").addEventListener("scroll", function () {
    let scroll = this.scrollTop;
    let topY = document.body.clientHeight;
    let nav = document.querySelectorAll(".navi");
    if (topY * 0.8 <= scroll) {
      Array.from(nav).forEach((navItem) => (navItem.style.color = "#32160b"));
    } else {
      Array.from(nav).forEach((navItem) => (navItem.style.color = "#ffffff"));
    }
  });
});
