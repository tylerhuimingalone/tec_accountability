// start modal js section
const open0 = document.querySelectorAll(".open-modal0");
const modal0 = document.querySelector("#modal0");
const close0 = document.querySelectorAll(".close-modal0");
const innerModal0 = document.querySelector("#inner-modal0");

open0.forEach((element) => {
  element.addEventListener("click", () => {
    modal0.showModal();
  });
});
modal0.addEventListener('click', (event) => {
  if (!innerModal0.contains(event.target)) {
    modal0.close();
  }
});
close0.forEach((element) => {
  element.addEventListener("click", () => {
    modal0.close();
  });
});
// end modal js section

// start modal js section
const open1 = document.querySelectorAll(".open-modal1");
const modal1 = document.querySelector("#modal1");
const close1 = document.querySelectorAll(".close-modal1");
const innerModal1 = document.querySelector("#inner-modal1");

open1.forEach((element) => {
  element.addEventListener("click", () => {
    modal1.showModal();
  });
});
modal1.addEventListener('click', (event) => {
  if (!innerModal1.contains(event.target)) {
    modal1.close();
  }
});
close1.forEach((element) => {
  element.addEventListener("click", () => {
    modal1.close();
  });
});
// end modal js section