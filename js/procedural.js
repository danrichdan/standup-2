// Tab Functionality
const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", function (e) {
  const allTabs = document.querySelectorAll(".tabs ul li");
  const allTabsContent = document.querySelectorAll(".tab-content");
  if (e.target.parentElement.classList.contains("tab")) {
    allTabs.forEach(function (tab) {
      if (tab.classList.contains("is-active"))
        tab.classList.remove("is-active");
    });
    const tab = e.target.parentElement;
    tab.classList.add("is-active");

    allTabsContent.forEach(function (tabContent) {
      tabContent.classList.add("d-none");
      tabContent.classList.remove("d-block");
      tabContent.classList.forEach(function (className) {
        if (className.includes(tab.classList[1])) {
          tabContent.classList.add("d-block");
          tabContent.classList.remove("d-none");
        }
      });
    });
  }
});

// Select Box option determine the input field placeholder text

// Form Field Validation
// Get the form values on submit
// Create lists based on that
// Add Items to DOM, Delete Item, Update Item, Remove All Items
// Add, Update and remove from LS
