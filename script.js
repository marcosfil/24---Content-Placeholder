const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg_text");

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"alt=""/>';

  title.innerHTML = "Lorem ipsum dolor sit amet.";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nemo.";

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';

  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg"));
}

setTimeout(getData, 2500);
