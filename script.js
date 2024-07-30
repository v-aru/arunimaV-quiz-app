let questionCards = document.querySelectorAll('.question-card').forEach((card) => {
  const showAnswerButton = card.querySelector('.show-answer');
  const hideAnswerButton = card.querySelector('.hide-answer');
  const answerElement = card.querySelector('.answer');

  showAnswerButton.addEventListener('click', () => {
    // Access the index of the current card using the provided index
    console.log("Show answer button clicked");
    answerElement.style.display = 'block';
    showAnswerButton.style.display = 'none';
    hideAnswerButton.style.display = 'block';
  });

  hideAnswerButton.addEventListener('click', () => {
    // Access the index of the current card using the provided index
    console.log("Hide answer button clicked");
    answerElement.style.display = 'none';
    showAnswerButton.style.display = 'block';
    hideAnswerButton.style.display = 'none';
  });
});
