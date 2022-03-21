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
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

const btns = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".accordion-item");
const containers = document.getElementsByClassName(".container");

const toggle = (e) => {
  items.forEach(() => {
    let button = e.target;
    let buttonSpan = e.target.parentElement;
    if (buttonSpan.classList.contains("active")) {
      buttonSpan.classList.remove("active");
      button.src = "assets/plus-blue.png";
    } else {
      buttonSpan.classList.add("active");
      button.src = "assets/minus-white.png";
    }

    let item = e.target.parentElement.parentElement.parentElement;
    item.classList.toggle("active");
  });

  let body =
    e.target.parentElement.parentElement.parentElement.lastElementChild;
  body.classList.toggle("active");
  if (body.classList.contains("active")) {
    let bodyHeight = `${body.scrollHeight + 20}px`;
    body.style.maxHeight = bodyHeight;
  } else {
    body.style.maxHeight = "0px";
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => toggle(e));
});
