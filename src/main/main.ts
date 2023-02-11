
// 1. Select the div element using the id property
// const site = document.getElementById("site");
// 2. Create a new <p></p> element programmatically
// const p = document.createElement("p");
// 3. Add the text content
// p.textContent = "Hello, World!";
// p.title = "hello-world"
// 4. Append the p element to the div element
// site?.appendChild(p).append(defineLogo);

// const el = document.createElement('div');
// el.innerHTML = `
//   <span>
//     Hello, Div!
//   </span>
// `;
// el.setAttribute('title', 'my-div');
// el.style.backgroundColor = 'salmon';
// el.style.color = 'white';

// const box = document.getElementById('box');
// box?.appendChild(el);

async function addLayout() {
  const resp = await fetch("../src/layouts/default.html");
  const html = await resp.text();
  document.body.insertAdjacentHTML("beforeend", html);
}

// addLayout();
