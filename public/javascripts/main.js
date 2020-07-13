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

window.addEventListener("DOMContentLoaded", () => {
  //animation
  (() => {
    const image = document.querySelectorAll(".image , .items ");
    const animation = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    image.forEach((img) => {
      animation.observe(img);
    });
  })();

  (() => {
    const text = document.querySelectorAll(
      "h1 , p , dl , .storeimage , .storemap"
    );
    const show = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
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

//nav color change
window.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".container");
  var rect = wrap.getBoundingClientRect();
  var py = window.pageYOffset + rect.top;

  //window.onscroll = function () {};
});

function doSomething(scroll_pos) {
  console.log(1);

  if (last_known_scroll_position <= 330) {
    console.log("red!!");
    Array.from(document.querySelectorAll(".navi")).forEach(
      (navi) => (navi.style.color = "red")
    );
  } else {
    Array.from(document.querySelectorAll(".navi")).forEach(
      (navi) => (navi.style.color = "blue")
    );
  }
}
