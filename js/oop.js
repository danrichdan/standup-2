//TABS
// Tabs Class
class Tabs {
  constructor() {
    this.tabs = document.querySelector(".tabs");
    this.allTabs = document.querySelectorAll(".tabs ul li");
    this.allTabsContent = document.querySelectorAll(".tab-content");

    this.tabs.addEventListener("click", this.showTabContent.bind(this));
  }

  showTabContent(e) {
    if (e.target.parentElement.classList.contains("tab")) {
      // Looks for is-active class, removes it
      this.allTabs.forEach(function (tab) {
        if (tab.classList.contains("is-active"))
          tab.classList.remove("is-active");
      });

      // Adds the active class to the target's parent
      const tab = e.target.parentElement;
      tab.classList.add("is-active");

      this.allTabsContent.forEach(function (tabContent) {
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
  }
}

new Tabs();

// BEGINNING OF APPLICATION
// Standup class
class Standup {
  constructor(item, category) {
    this.item = item;
    this.category = category;
  }
}

// Class for Forms
class StandupForm {
  constructor(formId, inputId) {
    this.form = document.getElementById(formId);
    this.standupInput = document.getElementById(inputId);
    this.categoryForm = formId;

    this.form.addEventListener("submit", this.getStandupItem.bind(this));
  }

  getStandupItem(e) {
    e.preventDefault();
    const standup = new Standup(this.standupInput.value, this.categoryForm);
    standup.category = standup.category.substr(0, standup.category.length - 5);

    // Instantiate List
    const list = new List(`${standup.category}-list`);

    // Call Add Item to List
    list.addItemToList(standup.item);

    // Add Delete Event Listener
    list.removeItemFromList();

    // Clear Field
    this.standupInput.value = "";
  }
}

// Instantiate the Forms
const haveDoneForm = new StandupForm("have-done-form", "have-done-input");
const workingOnForm = new StandupForm("working-on-form", "working-on-input");
const blockerForm = new StandupForm("blockers-form", "blockers-input");

class List {
  constructor(list) {
    this.list = document.getElementById(list);
  }

  // Add Item to List
  addItemToList(standupItem) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = `
      <i class="fas fa-edit"></i>
      <i class="fas fa-times"></i>
    `;
    li.appendChild(document.createTextNode(standupItem));
    li.appendChild(span);

    // Append LI to List
    this.list.appendChild(li);
  }

  // Remove Item from List
  removeItemFromList() {
    this.list.addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-times")) {
        e.target.parentElement.parentElement.remove();
      }
    });
  }

  // Update Item
  // Remove All Items
}

// Classes:
// Validation
// Store
