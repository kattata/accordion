// Data
const data = [
  {
    title: "Dansk",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    title: "Matematik",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    title: "Engelsk",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Tysk",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    title: "Fransk",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
];

// Display data
const accordion = document.querySelector(".accordion");

const displayData = () => {
  let html = "";
  data.map((item) => {
    html += `
          <div class="accordion-item">
            <div class="flex">
                <h2 class="header">${item.title}</h2>
                <span>
                <img src="assets/plus-blue.png" class="btn"/>
                </span>
            </div>
            <p class="body">${item.body}</p>
          </div>
        `;
  });
  accordion.innerHTML = html;
};

displayData();

// Accordion
const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const btn = item.querySelector(".btn");
  const btnSpan = btn.parentElement;
  const body = item.querySelector(".body");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
    body.classList.toggle("active");
    btnSpan.classList.toggle("active");

    if (body.classList.contains("active")) {
      btn.src = "assets/minus-white.png";
      let bodyHeight = `${body.scrollHeight + 20}px`;
      body.style.maxHeight = bodyHeight;
    } else {
      btn.src = "assets/plus-blue.png";
      body.style.maxHeight = "0px";
    }
  });
});
