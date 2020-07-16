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
    let span = document.createElement("span");
    const animation = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("animation");
          entry.target.appendChild(span);
        } else {
          entry.target.classList.remove("animation");
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
