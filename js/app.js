function createInput() {
  let myInput = document.createElement("input");
  myInput.setAttribute("type", "text");
  myInput.setAttribute("placeholder", "Pleace write text");
  myInput.setAttribute("value", "Javascript");
  myInput.classList.add("myInput");
  let myForm = document.createElement("form");
  let myBody = document.querySelector("body");
  myForm.appendChild(myInput);
  myBody.appendChild(myForm);
}
createInput();

let ourInput = document.querySelector(".myInput");

ourInput.addEventListener("input", (e) => {
  let myP = document.querySelector("p");
  let initialInput = e.target.value;
  //   let myArray = initialInput
  //     .split(" ")
  //     .map((x) => {
  //       let len = x.length;
  //       if (len > 1) {
  //         x = x[len - 1] + x.substring(1, len - 1) + x[0];
  //       }
  //       return x;
  //     })
  //     .join(" ");
  let initialArray = initialInput.split("");
  let firsChar = initialArray[0];
  let lastChar = initialArray[initialArray.length - 1];
  let midArray = initialArray.slice(1, initialArray.length - 1);
  let finalArray = lastChar + midArray.join("") + firsChar;
  console.log(lastChar + midArray + firsChar);

  myP.innerHTML = finalArray;
});
