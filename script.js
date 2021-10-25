document.querySelector("button").addEventListener("click", post);

function get() {
  fetch("https://frontend2021-3917.restdb.io/rest/fantasycreatures", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "6176beb98597142da1745a5e",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showCreatures(data);
    });
}

function showCreatures(creatures) {
  document.querySelector("main").innerHTML = "";
  creatures.forEach((creature) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = creature.name;
    copy.querySelector(".color").textContent = creature.color;
    copy
      .querySelector("button")
      .addEventListener("click", () => deleteIt(creature._id));
    document.querySelector("main").appendChild(copy);
  });
}

function post() {
  const data = {
    name: "Centaur " + Math.random(),
    color: "Lightbrown",
    age: 555,
    mythology: "Greek",
  };

  const postData = JSON.stringify(data);
  fetch("https://frontend2021-3917.restdb.io/rest/fantasycreatures", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "6176beb98597142da1745a5e",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      get();
    });
}

function deleteIt(id) {
  fetch(
    "https://frontend2021-3917.restdb.io/rest/fantasycreatures" + id,
    {
      method: "delete",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "6176beb98597142da1745a5e",
        "cache-control": "no-cache",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function put(id) {
  const data = {
    name: "Harpies " + Math.random(),
    color: "brown",
    age: 642,
    mythology: "Greek",
  };
  let postData = JSON.stringify(data);

  fetch(
    "https://frontend2021-3917.restdb.io/rest/fantasycreatures" + id,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "6176beb98597142da1745a5e",
        "cache-control": "no-cache",
      },
      body: postData,
    }
  )
    .then((d) => d.json())
    .then((t) => console.log(t));
}
get();