const questions = document.querySelectorAll(".container-questions");

questions.forEach((question) => {
  const button = question.querySelector(".question img");

  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("open");
      }
    });

    question.classList.toggle("open");
  });
});
