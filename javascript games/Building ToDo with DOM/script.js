let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let deleteBtn = document.createElement("button");

  deleteBtn.innerText = "delete";
  deleteBtn.classList.add("delete");
  item.innerText = inp.value;

  item.appendChild(deleteBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

// let delBtns =document.querySelectorAll(".delete");
// for (delbtn of delBtns){
//     delbtn.addEventListener("click", function(){
//        let par = this.parentElement;
//        console.log(par);
//        par.remove();
//     })
// }
