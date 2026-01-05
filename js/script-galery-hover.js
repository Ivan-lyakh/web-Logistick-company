const galeryBlock = document.querySelectorAll(".galery__block");

galeryBlock.forEach(block => {
  const hover = block.querySelector(".galery-hover");

  block.addEventListener("mouseenter", () => {
    hover.style.display = "block";
  });

  block.addEventListener("mouseleave", () => {
    hover.style.display = "none";
  });
});