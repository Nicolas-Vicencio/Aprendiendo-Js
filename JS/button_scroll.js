const d = document,
  w = window;

export default function btnScroll(btn) {
  const $btnScroll = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    // console.log(w.pageYOffset, d.documentElement.scrollTop);
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 600) {
      $btnScroll.classList.remove("hidden");
    } else {
      $btnScroll.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
