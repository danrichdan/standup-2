// Global Variables
const standupForm = document.getElementById("standup-form");
const standupCategory = document.getElementById("standup-category");
const standupItem = document.getElementById("standup-item");
const standupFormBtn = document.querySelector("button");
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
          console.log(tab.classList[2]);
          standupCategory.value = tab.classList[2].substr(
            0,
            tab.classList[2].length - 4
          );
          setSelectValue(
            tab.classList[2].substr(0, tab.classList[2].length - 4)
          );
        }
      });
    });
  }
});

// Select Box option determine the input field placeholder text
// Get the form values on submit

standupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Form Field Validation

  const item = standupItem.value;
  const category = standupCategory.value;

  if (item === "") {
    showAlert("Please add a value", "danger");
  } else {
    const standupObj = {
      category: category,
      item: item,
    };

    addItemToDom(standupObj);

    if (standupFormBtn.classList.contains("update")) {
      standupFormBtn.textContent = "Add to List";
      standupFormBtn.className = "button is-link is-outlined is-normal";
    }

    standupItem.value = "";
  }
});

// Event for when Select Box Value Changes
standupForm
  .querySelector("#standup-category")
  .addEventListener("change", function () {
    // Change the placeholder value based on the Selection
    const selectValue = document.querySelector("#standup-category").value;

    setSelectValue(selectValue);
  });

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

// Delete Item
document.querySelectorAll(".tab-content ul").forEach(function (ul) {
  ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-times")) {
      e.target.parentElement.parentElement.remove();
    }
    //Update Item
    if (e.target.classList.contains("fa-edit")) {
      const listItem = e.target.parentElement.parentElement;
      const listItemId = listItem.parentElement.getAttribute("id");
      // Change the form button to say Update, maybe add a class too, and/or change color
      standupFormBtn.className = "button is-link is-outlined is-success update";
      standupFormBtn.textContent = "Update";

      // Change the select box to li's category
      standupCategory.value = listItemId.substr(0, listItemId.length - 5);

      // Populate input field with li's text
      standupItem.value = listItem.textContent;

      // Remove list item
      listItem.remove();
    }
  });
});

//Remove All Items
// Get, Add, Update and remove from LS
// On submit the Tab changes to the category that was submitted, unless the change event on select handles this instead
// Add show alert
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `notification is-${className}`;
  div.textContent = message;

  const box = document.querySelector(".box");
  const form = document.querySelector("#standup-form");
  box.insertBefore(div, form);

  setTimeout(function () {
    div.remove();
  }, 3000);
}

function setSelectValue(selectValue) {
  let placeholderAttr;
  console.log(selectValue);
  switch (selectValue) {
    case "have-done":
      placeholderAttr = "Have Done";
      break;
    case "working-on":
      placeholderAttr = "Working On";
      break;
    case "blockers":
      placeholderAttr = "Blockers";
      break;
  }
  standupItem.setAttribute("placeholder", placeholderAttr);
}
