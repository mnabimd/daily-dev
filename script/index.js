const posts = [
  {
    title: "React.js vs Vue.js",
    image: "",
    date: "2024-05-13",
    timeToRead: "2mins",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque odio quaerat consectetur, in distinctio minus itaque rerum! Repellat labore nisi minus nihil reiciendis perferendis, laboriosam dicta optio, inventore velit corpor",
  },
  {
    title: "Angular.js vs Svelte.js",
    image: "",
    date: "2024-05-13",
    timeToRead: "2mins",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque odio quaerat consectetur, in distinctio minus itaque rerum! Repellat labore nisi minus nihil reiciendis perferendis, laboriosam dicta optio, inventore velit corpor",
  },
  {
    title: ".Net Introduction",
    image: "",
    date: "2024-05-13",
    timeToRead: "2mins",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque odio quaerat consectetur, in distinctio minus itaque rerum! Repellat labore nisi minus nihil reiciendis perferendis, laboriosam dicta optio, inventore velit corpor",
  },
];

document.getElementById("wrapper").innerHTML = `<div id="card">
<h3 class="card-title">53 Basic ideas for projects</h3>
<div class="info">
  <p>April 30</p>
  <p style="padding: 0 5px">-</p>
  <p>2m minutes read</p>
</div>
<img src="./images/Bricklayer-bro.png" alt="" />

<div class="controls">
  <button class="button is-primary is-fullwidth mb-2">Like</button>
  <button class="button is-secondary is-fullwidth">Share</button>
</div>
</div>`;
