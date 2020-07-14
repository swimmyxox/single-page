// nav color change
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".wrapper").addEventListener("scroll", function () {
    var scroll = this.scrollTop;
    let topY = document.body.clientHeight;

    if (topY <= scroll) {
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
    const image = document.querySelectorAll(".hero_img , .items ");
    var span = document.createElement("span");
    const animation = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("animation");
          entry.target.appendChild(span);
        } else {
          entry.target.classList.remove("animation");
          entry.target.appendChild(span);
        }
      });
    });
    image.forEach((item) => {
      animation.observe(item);
    });
  })();

  (() => {
    const text = document.querySelectorAll(
      "h1 , p , dl , .shop_img , .shop_map"
    );
    const show = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.03) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    text.forEach((item) => {
      show.observe(item);
    });
  })();
});
