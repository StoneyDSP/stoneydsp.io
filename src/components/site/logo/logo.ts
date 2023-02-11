
// 1. Select the div element using the id property
const defineLogo = document.getElementById("logo");
// 2. Create new html element(s) programmatically
const i = document.createElement("i");
const a = document.createElement("a");
const hr = document.createElement("hr");
// 3. Add html content to the new element(s)
i.title = "logo";
a.textContent = "StoneyDSP";
a.title = "logo-link";
a.href = ".";

// 4. Append the new element(s) to the div element
defineLogo?.appendChild(i).appendChild(a).appendChild(hr);
