// JS goes here

const openMissionStatement = document.querySelector('#open-mission-statement');
const missionStatementModal = document.querySelector('#mission-statement-modal');
const closeMissionStatement = document.querySelectorAll(".close-mission-statement");
const missionStatementInnerModal = document.querySelector('#mission-statement-inner-modal');

openMissionStatement.addEventListener("click", () => {
  missionStatementModal.showModal();
});
missionStatementModal.addEventListener('click', (event) => {
  if (!missionStatementInnerModal.contains(event.target)) {
      missionStatementModal.close();
  }
});
closeMissionStatement.forEach((element) => {
  element.addEventListener("click", () => {
    missionStatementModal.close();
  });
});

const openAbuseAccount = document.querySelector('#open-abuse-account');
const abuseAccountModal = document.querySelector('#abuse-account-modal');
const closeAbuseAccount = document.querySelectorAll(".close-abuse-account");
const abuseAccountInnerModal = document.querySelector('#abuse-account-inner-modal');

openAbuseAccount.addEventListener("click", () => {
  abuseAccountModal.showModal();
});
abuseAccountModal.addEventListener('click', (event) => {
  if (!abuseAccountInnerModal.contains(event.target)) {
      abuseAccountModal.close();
  }
});
closeAbuseAccount.forEach((element) => {
  element.addEventListener("click", () => {
    abuseAccountModal.close();
  });
});
