const container = document.createElement("div");
container.className = "grid-container";

const header = document.createElement("div");
header.className = "item1";
header.innerHTML = "<h1>Chania</h1>";
container.appendChild(header);

const menu = document.createElement("div");
menu.className = "item2";
const ul = document.createElement("ul");
["The Flight", "The City", "The Island", "The Food"].forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
});
menu.appendChild(ul);
container.appendChild(menu);

const main = document.createElement("div");
main.className = "item3";
main.innerHTML = `
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete.</p>
  <p>The city can be divided in two parts, the old town and the modern city. The old town is situated next to the old harbour and is the matrix around which the whole urban area was developed.</p>
  <p>Chania lies along the north west coast of the island Crete.</p>
`;
container.appendChild(main);

const right = document.createElement("div");
right.className = "item4";
right.innerHTML = `
  <h2>Facts:</h2>
  <ul>
    <li>Chania is a city on the island of Crete</li>
    <li>Crete is a Greek island in the Mediterranean Sea</li>
  </ul>
`;
container.appendChild(right);

const footer = document.createElement("div");
footer.className = "item5";
footer.innerHTML = `<p>Resize the browser window to see how the content respond to the resizing.</p>`;
container.appendChild(footer);

document.body.appendChild(container);
