const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener(
  "click",
  () => {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    themeToggle.textContent =
      isDark
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  }
);

if(
  localStorage.getItem("theme")
  === "dark"
){
  document.body.classList.add("dark");
  themeToggle.textContent =
    "☀️ Light Mode";
}

const animationButtons =
document.querySelectorAll(
  ".animation-btn"
);

const skeletons =
document.querySelectorAll(
  ".skeleton"
);

function applyAnimation(type){

  skeletons.forEach(el => {

    el.classList.remove(
      "shimmer",
      "wave",
      "pulse"
    );

    el.classList.add(type);

  });
}

applyAnimation("shimmer");

animationButtons.forEach(btn => {

  btn.addEventListener(
    "click",
    () => {

      animationButtons.forEach(
        b => b.classList.remove("active")
      );

      btn.classList.add("active");

      applyAnimation(
        btn.dataset.animation
      );
    }
  );
});