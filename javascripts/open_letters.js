// JS goes here
const nivedhanButton = document.querySelector('#nivedhan-letter-button');
const eklanButton = document.querySelector('#eklan-letter-button');
const rojaButton = document.querySelector('#roja-letter-button');
const nivedhanLetter = document.querySelector('#nivedhan-letter');
const eklanLetter = document.querySelector('#eklan-letter');
const rojaLetter = document.querySelector('#roja-letter');

// Nivedhan letter controls
nivedhanButton.addEventListener("click", () => {
  // buttons
  eklanButton.classList.remove('selected');
  rojaButton.classList.remove('selected');
  nivedhanButton.classList.add('selected');
  // letters
  eklanLetter.classList.add('hidden');
  rojaLetter.classList.add('hidden');
  nivedhanLetter.classList.remove('hidden');
});

// Eklan letter controls
eklanButton.addEventListener("click", () => {
  // buttons
  nivedhanButton.classList.remove('selected');
  rojaButton.classList.remove('selected');
  eklanButton.classList.add('selected');
  // letters
  nivedhanLetter.classList.add('hidden');
  rojaLetter.classList.add('hidden');
  eklanLetter.classList.remove('hidden');
});

// Roja lette controls
rojaButton.addEventListener("click", () => {
  // buttons
  nivedhanButton.classList.remove('selected');
  eklanButton.classList.remove('selected');
  rojaButton.classList.add('selected');
  // letters
  nivedhanLetter.classList.add('hidden');
  eklanLetter.classList.add('hidden');
  rojaLetter.classList.remove('hidden');
});