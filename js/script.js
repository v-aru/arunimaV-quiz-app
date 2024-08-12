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
  document.querySelectorAll('.cards .card').forEach((card) => {
    const showAnswerButton = card.querySelector('.card .show-answer');
    const hideAnswerButton = card.querySelector('.card .hide-answer');
    const answerElement = card.querySelector('.card .answer');

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


/*
const imageElement = document.getElementById('myImage');
const image1 = 'images/bookmark_filled.png' ;
const image2 = 'images/bookmark_transparent.png';

imageElement.addEventListener('onclick', () => {
  imageElement.src = imageElement.src === image1 ? image2 : image1;
});

 #container {
    display: block;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0px 20px;
  }
*/

// const bookmarkButton = document.querySelector(".add-to-bookmark");

// bookmarkButton.addEventListener("click", () => {
//   const bookmarked = bookmarkButton.classList.contains("filled");

//   bookmarked
//     ? bookmarkButton.classList.remove("filled")
//     : bookmarkButton.classList.add("empty");
// });

// document.querySelectorAll('.add-to-bookmark').forEach(button => {
//   button.addEventListener('click', () => {
//     const icon = button.querySelector('i');
//     if(button.classList.contains('filled')) {
//       button.classList.toggle('empty');
//       icon.classList.toggle('fa-regular');
//     } else {
//       button.classList.toggle('filled');
//       icon.classList.toggle('fa-solid');
//     }
//   });
// });

document.querySelectorAll('.add-to-bookmark').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('filled');
    button.classList.toggle('empty');

    const icon = button.querySelector('i');
    icon.classList.toggle('fa-solid');
    icon.classList.toggle('fa-regular');
  });
});