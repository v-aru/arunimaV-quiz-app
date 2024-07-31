/*
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
*/

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.question-cards').forEach((card) => {
    const showAnswerButton = card.querySelector('.show-answer');
    const hideAnswerButton = card.querySelector('.hide-answer');
    const answerElement = card.querySelector('.answer');

    showAnswerButton.addEventListener('click', () => {
      console.log("Show answer button clicked");
      answerElement.style.display = 'block';
      showAnswerButton.style.display = 'none';
      hideAnswerButton.style.display = 'block';
    });

    hideAnswerButton.addEventListener('click', () => {
      console.log("Hide answer button clicked");
      answerElement.style.display = 'none';
      showAnswerButton.style.display = 'block';
      hideAnswerButton.style.display = 'none';
    });
  });
});



const imageElement = document.getElementById('myImage');
const image1 = 'images/bookmark_filled.png' ;
const image2 = 'images/bookmark_transparent.png';

imageElement.addEventListener('onclick', () => {
  imageElement.src = imageElement.src === image1 ? image2 : image1;
});