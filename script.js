const questionHead = document.querySelectorAll(".question_head");
const email = document.querySelector("#email");
const hamburgerIcon = document.querySelector(".hamburger_icon");
const hamburgerContainer = document.querySelector(".hamburger_container");
const closeIcon = document.querySelector(".close_icon");
const img = document.querySelector(".tab_img");
const tabs = document.querySelectorAll(".features_nav div");
const tabLinks = document.querySelectorAll(".features_nav div a");
const tabHead = document.querySelector(".tab_head");
const tabInfo = document.querySelector(".tab_info");

// arrays
let errs = ["/", "$"];

const src = [
  "/images/illustration-features-tab-1.svg",
  "/images/illustration-features-tab-2.svg",
  "/images/illustration-features-tab-3.svg",
];

const heads = [
  "Bookmark in one click",
  "Intelligent search",
  "Share your bookmarks",
];

const p = [
  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks.",
  "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
];

//   event listeners
questionHead.forEach((head) => {
  head.addEventListener("click", (e) => {
    head.parentNode.classList.toggle("full_height");
    head.lastElementChild.classList.toggle("turn_arrow");
  });
});

// email validation
email.addEventListener("input", (e) => {
  if (e.target.value.includes(errs[0]) || e.target.value.includes(errs[1])) {
    email.parentNode.classList.add("show_error");
  } else {
    email.parentNode.classList.remove("show_error");
  }
});

// toggle the hamburger on / off
hamburgerIcon.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("show_hamburger");
});

closeIcon.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("show_hamburger");
});

// show info based the type of tab clicked
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    img.src = src[index];
    tabHead.innerHTML = heads[index];
    tabInfo.innerHTML = p[index];
  });
});

// prevent default event from firing when we click on any tablink
tabLinks.forEach(tablink => {
  tablink.addEventListener('click', (e) => {
    e.preventDefault();
  })
})
