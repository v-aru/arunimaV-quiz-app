console.clear();


//Toggle the Show and Hide Answer buttons
export function answerButton () {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cards .card').forEach((card) => {
      const showAnswerButton = card.querySelector('.card .show-answer');
      const hideAnswerButton = card.querySelector('.card .hide-answer');
      const answerElement = card.querySelector('.card .answer');

      // Adding a check to ensure answer buttons are found
      if (!showAnswerButton || !hideAnswerButton || !answerElement) {
        console.error('One or more elements not found:', {
          showAnswerButton,
          hideAnswerButton,
          answerElement,
        });
        return; // Exit early if elements are missing
      }
  
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
}


//Toggle the Bookmark button
export function bookmarkButton() {
  // Use event delegation on the container that holds all cards
  const cardsContainer = document.querySelector('.cards');

  if (!cardsContainer) {
    console.error('Cards container not found');
    return;
  }

  cardsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.add-to-bookmark');
    if (!button) return; // Exit if the clicked element isn't a bookmark button

    // Toggle the button state
    button.classList.toggle('filled');
    button.classList.toggle('empty');

    const icon = button.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
    }
  });
  
  
  /*document.querySelectorAll('.add-to-bookmark').forEach(button => {
    // Adding a check to ensure bookmark button is found
    if (!button) {
      console.error('Bookmark button not found:', button);
      return; // Exit if button is not found
    }

    button.addEventListener('click', () => {
      button.classList.toggle('filled');
      button.classList.toggle('empty');
  
      const icon = button.querySelector('i');
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
    });
  });*/
}

/*

//Dark Mode toggle
const themeSwitchButton = document.querySelector('[data-js="theme-icon"]');
const body = document.body;


document.addEventListener ('DOMContentLoaded', () => {
  themeSwitchButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeSwitchButton.classList.toggle('fa-toggle-on');
    themeSwitchButton.classList.toggle('fa-toggle-off');
  });
})
  */