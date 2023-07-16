// JS goes here
const copyEpisButton = document.querySelector('#episcopalian-email-copy');
const episTemplate = document.querySelector('#episcopalian-email');

copyEpisButton.addEventListener("click", () => {
  copyToClipboard(episTemplate.textContent);
});

episTemplate.addEventListener("click", () => {
  copyToClipboard(episTemplate.textContent);
});

const copyAllyButton = document.querySelector('#ally-email-copy');
const allyTemplate = document.querySelector('#ally-email');

allyTemplate.addEventListener("click", () => {
  copyToClipboard(allyTemplate.textContent);
});

copyAllyButton.addEventListener("click", () => {
  copyToClipboard(allyTemplate.textContent);
});

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Template copied");
}