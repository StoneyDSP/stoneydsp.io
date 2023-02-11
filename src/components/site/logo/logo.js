"use strict";
// 1. Select the div element using the id property
var defineLogo = document.getElementById("logo");
// 2. Create new html element(s) programmatically
var i = document.createElement("i");
var a = document.createElement("a");
var hr = document.createElement("hr");
// 3. Add html content to the new element(s)
i.title = "logo";
a.textContent = "StoneyDSP";
a.title = "logo-link";
a.href = ".";
// 4. Append the new element(s) to the div element
defineLogo === null || defineLogo === void 0 ? void 0 : defineLogo.appendChild(i).appendChild(a).appendChild(hr);
//# sourceMappingURL=logo.js.map