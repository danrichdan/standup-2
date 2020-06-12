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
