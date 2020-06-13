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
// Get the form values on submit
const standupForm = document.getElementById("standup-form");
standupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const category = document.getElementById("standup-category").value;
  const item = document.getElementById("standup-item").value;

  const standupObj = {
    category: category,
    item: item,
  };

  addItemToDom(standupObj);

  document.getElementById("standup-item").value = "";
});

// Form Field Validation
// Create lists based on that
function addItemToDom(standupObj) {
  // Create list item and add text
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(standupObj.item));

  const span = document.createElement("span");
  span.innerHTML = `
  <i class="fas fa-edit"></i>
  <i class="fas fa-times"></i>
  `;
  li.appendChild(span);
  const list = document.getElementById(`${standupObj.category}-list`);

  list.appendChild(li);
}

// Delete Item, Update Item, Remove All Items
// Get, Add, Update and remove from LS
// Change select option and the placeholder changes too (maybe the tab as well?)
// On submit the Tab changes to the category that was submitted
// Add show alert
