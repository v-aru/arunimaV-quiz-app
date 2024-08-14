const inputs = document.querySelectorAll(".input");
const form = document.querySelector('[data-js="form-data"]');
const formCards = document.querySelector(".form--card");
const infoElement = document.querySelector('[data-js="info"]');

// Change counter of characters in textareas
const countCharacters = (e) => {
  const max = 150;
  const textarea = e.target;
  const counterElement = textarea.closest("label").querySelector('[data-js="counter"]');
  const counterWrapperElement = textarea.closest("label").querySelector('[data-js="counter-wrapper"]');

  if (counterElement) {
    const inputSymbols = textarea.value.length;
    const symbolsLeft = max - inputSymbols;
    counterElement.textContent = symbolsLeft;

    if (symbolsLeft <= 0) { // Check for less than or equal to 0
      counterWrapperElement.classList.add('invalid'); // Use class for styling
    } else {
      counterWrapperElement.classList.remove('invalid');
    }
  }
};

// Adding event listeners to the textareas
inputs.forEach(input => {
  if (input.tagName === 'TEXTAREA') {
    input.addEventListener('input', countCharacters);
  }
});

inputs.forEach(input => {
  if (input.tagName === 'TEXTAREA') {
    input.addEventListener('input', countCharacters);
  }
});

// Remove "invalid" class from inputs in focus and hide the errors masseges
const handleInputFocus = (e) => {
  const input = e.target;
  input.classList.remove("invalid");
  infoElement.style.height = "0px";
};

inputs.forEach(input => {
  input.addEventListener('focus', handleInputFocus);
});

inputs.forEach(input => {
  if (input.tagName === 'TEXTAREA') {
    input.addEventListener('input', countCharacters);
    input.addEventListener('focus', handleInputFocus);
  }
});

// Success message when new card is added
const showConfirmMessage = () => {
  infoElement.setAttribute("data-status", "confirm");
  infoElement.innerHTML += `<li>New card added!</li>`;
  infoElement.style.height = infoElement.scrollHeight + "px";
};

const showErrors = (error) => {
  infoElement.setAttribute("data-status", "error");
  infoElement.innerHTML += error;
  infoElement.style.height = infoElement.scrollHeight + "px";
};

// Custom form validation
const formValidation = (form) => {
  let checker = true;
  const data = form.elements;

  for (let i = 0; i < data.length; i += 1) {
    const isInput = data[i].classList.contains("input");
    if (isInput && !data[i].value) {
      data[i].classList.add("invalid");
      showErrors(`<li>&#10006; <b>${data[i].name}</b> field is required</li>`);
      checker = false;
    }
  }
  return checker;
};

// Space separated tags will be replaced with # like a tag would be
const getAllTags = (tags) => {
  let result = "";
  const tagsList = tags.replace(/\s+/g, " ").trim().split(" ");
  for (let i = 0; i < tagsList.length; i += 1) {
    result += `<li class="list-item-tags">#${tagsList[i]}</li>`;
  }
  return result;
};

//Reset the form and the counters
const formReset = (form) => {
  const counters = form.querySelectorAll('[data-js="counter"]');
  for (let i = 0; i < counters.length; i += 1) {
    counters[i].innerHTML = "150";
  }
  form.reset();
};

// Add new card to the page under the main form
const addNewCard = (e) => {
  e.preventDefault();
  infoElement.innerHTML = "";

  const form = e.target;
  const isFormValid = formValidation(form);

  if (!isFormValid) {
    return;
  }

  const cardContainer = document.querySelector('.cards');
  const data = new FormData(form);
  const formData = Object.fromEntries(data);
  const tags = getAllTags(formData.tags);
  //const newCardElement = document.createElement('section');
  const newCard = `
              <section class="card">
                  <button class="add-to-bookmark empty">
                    <i class="fa-regular fa-bookmark fa-2xl"></i>
                  </button>
                  <h4>${formData.question}</h4> <br/>
                  <button class="show-answer">Show Answer</button>
                  <button class="hide-answer" style="display: none;">Hide Answer</button>
                  <div class="answer">${formData.answer}</div>
                  <ul class="list-tags">
                    ${tags}
                  </ul>
              </section>
   `; 
  
  //newCardElement.innerHTML +=newCard;
  cardContainer.innerHTML+=newCard;
  formReset(form);
  showConfirmMessage();
};


form.addEventListener("submit", addNewCard);


//Toggle buttons for bookmark and Show/Hide answer
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.cards');
  const showAnswerButton = cards.querySelectorAll('.card .show-answer');
  const hideAnswerButton = cards.querySelectorAll('.card .hide-answer');
  const answerElement = cards.querySelectorAll('.card .answer');

    showAnswerButton.addEventListener('click', () => {
    answerElement.style.display = 'block';
    showAnswerButton.style.display = 'none';
    hideAnswerButton.style.display = 'block';
  });

  hideAnswerButton.addEventListener('click', () => {
    answerElement.style.display = 'none';
    showAnswerButton.style.display = 'block';
    hideAnswerButton.style.display = 'none';
  });

  document.querySelectorAll('.card .add-to-bookmark').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('filled');
      button.classList.toggle('empty');
  
      const icon = button.querySelector('i');
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
    });
  });
});