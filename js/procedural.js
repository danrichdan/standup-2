// Tabs
const tabs = document.querySelector(".tabs");

// Event Listener on each tab
tabs.addEventListener("click", function (e) {
  const allTabs = document.querySelectorAll(".tabs ul li");
  const allTabsContent = document.querySelectorAll(".tab-content");

  if (e.target.parentElement.classList.contains("tab")) {
    // Looks for is-active class, removes it
    allTabs.forEach(function (tab) {
      if (tab.classList.contains("is-active"))
        tab.classList.remove("is-active");
    });

    // Adds the active class to the target's parent
    const tab = e.target.parentElement;
    tab.classList.add("is-active");

    allTabsContent.forEach(function (tabContent) {
      // Adds the display none class to all Tab content divs
      // and Removes the display block from all Tab content divs
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
