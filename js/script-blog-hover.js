const blogColumn = document.querySelectorAll(".blog__column");

blogColumn.forEach(block => {
  const hover = block.querySelector(".blog-hover");

  block.addEventListener("mouseenter", () => {
    hover.style.display = "flex";
  });

  block.addEventListener("mouseleave", () => {
    hover.style.display = "none";
  });
});