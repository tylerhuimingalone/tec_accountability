// JS goes here

const timelines = document.querySelectorAll(".timeline");

timelines.forEach((timeline) => {
  var dateContent = timeline.querySelector(".date-content");
  var timelineContent = timeline.querySelector(".timeline-content")
  var timelineHeight = timelineContent.getBoundingClientRect().height
  var dateMarginTop = (timelineHeight - 125) / 2
  dateContent.style.marginTop = `${dateMarginTop}px`
});

// modal js controls

const timelineModalNum = 31

for(var i = 0; i <= timelineModalNum; i++) {
  const open = document.querySelectorAll(`.open-modal${i}`);
  const modal = document.getElementById(`modal${i}`);
  const close = document.querySelectorAll(`.close-modal${i}`);
  const innerModal = document.getElementById(`inner-modal${i}`);

  // open modal button event listeners
  open.forEach((element) => {
    element.addEventListener("click", () => {
      modal.showModal();
    });
  });

  // close modal on outside click event listener
  modal.addEventListener("click", (event) => {
    if (!innerModal.contains(event.target)) {
      modal.close();
    }
  });

  // close modal button event listeners
  close.forEach((element) => {
    element.addEventListener("click", () => {
      modal.close();
    });
  });
}

// modal js controls