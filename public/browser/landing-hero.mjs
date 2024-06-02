document.querySelector(".stack").addEventListener("click", () => {
  const stackCards = document.querySelectorAll(".stack .card[data-position]");

  for (const card of stackCards) {
    card.classList.remove("swap");
    card.getAttribute("data-position") === "1"
      ? card.classList.add("swap")
      : null;
  }

  const positions = Array.from(stackCards).map((card) =>
    card.getAttribute("data-position")
  );
  const shuffledPositions = [positions[2], positions[0], positions[1]];

  setTimeout(() => {
    stackCards.forEach((card, index) => {
      card.setAttribute("data-position", shuffledPositions[index]);
    });
  }, 600);
});
