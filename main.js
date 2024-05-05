const accordionToggleBtns = document.querySelectorAll(
  ".wrapper__accordion-toggle"
);

accordionToggleBtns.forEach((toggle) => {
  toggle.addEventListener("click", (evt) => {
    const accordionBody = evt.target.parentElement.parentElement.querySelector(
      ".wrapper__accordion-body"
    );
    const expanded = accordionBody.dataset.expanded === "true";
    if (expanded) {
      accordionBody.dataset.expanded = "false";
    } else accordionBody.dataset.expanded = "true";
    evt.target.dataset.expanded = accordionBody.dataset.expanded;
  });
});
