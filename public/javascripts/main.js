window.addEventListener("DOMContentLoaded", () => {
  // nav color change
  document.querySelector(".wrapper").addEventListener("scroll", function () {
    let scroll = this.scrollTop;
    let topY = document.body.clientHeight;

    if (topY * 0.8 <= scroll) {
      Array.from(document.querySelectorAll(".navi")).forEach(
        (navi) => (navi.style.color = "#32160b")
      );
    } else {
      Array.from(document.querySelectorAll(".navi")).forEach(
        (navi) => (navi.style.color = "#ffffff")
      );
    }
  });
});

// add animation
window.addEventListener("DOMContentLoaded", () => {
  (() => {
    const image = document.querySelectorAll(".hero_img , .item");
    let div = document.createElement("div");
    div.className = "animation_slidein";
    const animation = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("animation_fade");
          entry.target.appendChild(div);
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
    const text = document.querySelectorAll(".text");
    const show = new IntersectionObserver((entries) => {
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
});
