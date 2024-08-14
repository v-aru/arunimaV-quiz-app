//Toggle the Show and Hide Answer buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cards .card').forEach((card) => {
    const showAnswerButton = card.querySelector('.card .show-answer');
    const hideAnswerButton = card.querySelector('.card .hide-answer');
    const answerElement = card.querySelector('.card .answer');

    showAnswerButton.addEventListener('click', () => {
      //console.log("Show answer button clicked");
      answerElement.style.display = 'block';
      showAnswerButton.style.display = 'none';
      hideAnswerButton.style.display = 'block';
    });

    hideAnswerButton.addEventListener('click', () => {
      //console.log("Hide answer button clicked");
      answerElement.style.display = 'none';
      showAnswerButton.style.display = 'block';
      hideAnswerButton.style.display = 'none';
    });
  });
});

//Toggle the Bookmark button

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