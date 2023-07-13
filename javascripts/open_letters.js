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

// Roja letter controls
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

const openNivedhanLetter = document.querySelector('#open-nivedhan-letter');
const nivedhanLetterModal = document.querySelector('#nivedhan-letter-modal');
const closeNivedhanLetter = document.querySelectorAll(".close-nivedhan-letter");
const nivedhanLetterInnerModal = document.querySelector('#nivedhan-letter-inner-modal');

openNivedhanLetter.addEventListener("click", () => {
  nivedhanLetterModal.showModal();
});
nivedhanLetterModal.addEventListener('click', (event) => {
  if (!nivedhanLetterInnerModal.contains(event.target)) {
      nivedhanLetterModal.close();
  }
});
closeNivedhanLetter.forEach((element) => {
  element.addEventListener("click", () => {
    nivedhanLetterModal.close();
  });
});

const openEklanLetter = document.querySelector('#open-eklan-letter');
const eklanLetterModal = document.querySelector('#eklan-letter-modal');
const closeEklanLetter = document.querySelectorAll(".close-eklan-letter");
const eklanLetterInnerModal = document.querySelector('#eklan-letter-inner-modal');

openEklanLetter.addEventListener("click", () => {
  eklanLetterModal.showModal();
});
eklanLetterModal.addEventListener('click', (event) => {
  if (!eklanLetterInnerModal.contains(event.target)) {
      eklanLetterModal.close();
  }
});
closeEklanLetter.forEach((element) => {
  element.addEventListener("click", () => {
    eklanLetterModal.close();
  });
});

const openRojaLetter = document.querySelector('#open-roja-letter');
const rojaLetterModal = document.querySelector('#roja-letter-modal');
const closeRojaLetter = document.querySelectorAll(".close-roja-letter");
const rojaLetterInnerModal = document.querySelector('#roja-letter-inner-modal');

openRojaLetter.addEventListener("click", () => {
  rojaLetterModal.showModal();
});
rojaLetterModal.addEventListener('click', (event) => {
  if (!rojaLetterInnerModal.contains(event.target)) {
      rojaLetterModal.close();
  }
});
closeRojaLetter.forEach((element) => {
  element.addEventListener("click", () => {
    rojaLetterModal.close();
  });
});