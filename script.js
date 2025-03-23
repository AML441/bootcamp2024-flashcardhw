const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let index = 0;
let cardTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const container = document.getElementById('card-content');
    const flashcard = flashcards[index];

    if (cardTerm) {
        container.textContent = flashcard.term;
    } else {
        container.textContent = flashcard.definition;
    }
}

function switchTermDefinition() {
    cardTerm = !cardTerm;
    displayCard();
}

function nextCard() {
    index = (index + 1) % flashcards.length;
    cardTerm = true;
    displayCard();
}

function previousCard() {
    index = (index - 1 + flashcards.length) % flashcards.length;
    cardTerm = true;
    displayCard();
}

function addNewCard() {
    const term = document.getElementById('new-term').value;
    const definition = document.getElementById('new-definition').value;

    if (term && definition) {
        flashcards.push({ term, definition });
        document.getElementById('new-term').value = ''; 
        document.getElementById('new-definition').value = '';  
        displayCard();  
    } 
}

document.getElementById('next-btn').addEventListener('click', nextCard);
document.getElementById('prev-btn').addEventListener('click', previousCard);
document.getElementById('flashcard').addEventListener('click', switchTermDefinition);
document.getElementById('add-card-btn').addEventListener('click', addNewCard);

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;
