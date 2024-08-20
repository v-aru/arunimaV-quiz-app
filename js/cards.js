
import { answerButton, bookmarkButton } from './script.js';

function createCard({cardQuestion, cardAnswer, cardTags, isBookmarked = false}) {
    const card = document.createElement('section');
    card.classList.add('card');

    const bookmarkbutton = document.createElement('button');
    bookmarkbutton.classList.add('add-to-bookmark', isBookmarked ? 'filled' : 'empty');

    const bookmarkIcon = document.createElement('i');
    bookmarkIcon.classList.add(isBookmarked ? 'fa-solid' : 'fa-regular', 'fa-bookmark', 'fa-2xl');
    bookmarkbutton.appendChild(bookmarkIcon);

    const questionHeader = document.createElement('h4');
    questionHeader.textContent = cardQuestion;

    const showAnswerButton = document.createElement('button');
    showAnswerButton.classList.add('show-answer');
    showAnswerButton.textContent = 'Show Answer';

    const hideAnswerButton = document.createElement('button');
    hideAnswerButton.classList.add('hide-answer');
    hideAnswerButton.style.display = 'none';
    hideAnswerButton.textContent = 'Hide Answer';

    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.textContent = cardAnswer;

    const tagList = document.createElement('ul');
    tagList.classList.add('list-tags');

    cardTags.forEach(tag => {
        const tagListItem = document.createElement('li');
        tagListItem.classList.add('list-item-tags');
        tagListItem.textContent = `#${tag}`;
        tagList.appendChild(tagListItem);        
    });


    card.appendChild(bookmarkbutton);
    card.appendChild(questionHeader);
    card.appendChild(document.createElement('br'));
    card.appendChild(showAnswerButton);
    card.appendChild(hideAnswerButton);
    card.appendChild(answerElement);
    card.appendChild(tagList);

    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
}

const cardData = [
    {
        cardQuestion: "How do you center content horizontally?",
        cardAnswer: "Flexbox justify-content center",
        cardTags: ["html", "css", "easy"],
        isBookmarked: true
    },
    {
        cardQuestion: "How do you Position element outside flow?",
        cardAnswer: "Using Absolute positioning",
        cardTags: ["html", "css", "easy"],
        isBookmarked: true
    },
    {
        cardQuestion: "What are some of the values can the does the display property hold?",
        cardAnswer: "inline, block, flex, grid, inline-block",
        cardTags: ["html", "css", "easy"],
        isBookmarked: false
    },
    {
        cardQuestion: "What command allows me to create a file in a folder via the terminal?",
        cardAnswer: "touch",
        cardTags: ["git", "terminal"],
        isBookmarked: false
    },
    {
        cardQuestion: "What is the command to navigate into a folder?",
        cardAnswer: "cd",
        cardTags: ["git", "terminal"],
        isBookmarked: false
    },
    {
        cardQuestion: "What command allows me to create a directory from the terminal?",
        cardAnswer: "mkdir",
        cardTags: ["git", "terminal"],
        isBookmarked: true
    },
    {
        cardQuestion: "What is the command to create a local repository?",
        cardAnswer: "git init",
        cardTags: ["git", "terminal"],
        isBookmarked: true
    },
    {
        cardQuestion: "How do you make visually hidden content?",
        cardAnswer: "Via Screen reader accessiblility",
        cardTags: ["html", "css", "easy"],
        isBookmarked: false
    },
    {
        cardQuestion: "What will the justify-content : center command do?",
        cardAnswer: "aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally)",
        cardTags: ["html", "css", "medium"],
        isBookmarked: false
    },
    {
        cardQuestion: "What css property allows me to align text in a container?",
        cardAnswer: "text-align",
        cardTags: ["html", "css", "easy"],
        isBookmarked: false
    },

]


answerButton();
bookmarkButton();

cardData.forEach(data => createCard(data));