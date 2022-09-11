const questions = document.querySelectorAll(".container-questions");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    question.classList.toggle("open");
  });
});
