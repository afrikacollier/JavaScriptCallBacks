let form = document.getElementById("button-one");
// Form submit event 
form.addEventListener('click', addItem);


// Add item
function addItem(e){
    e.preventDefault();
    
    // Get input value (I had to use the first input of my form since type='text')
    let newItem = document.getElementById("item").value;
    // Create new li element
    let newli = document.createElement('li');
    // Add class
    newli.className = "list-group-item";
    // set object newli's innerText method equal to newItem (your input value)
    newli.innerText = newItem;
    //need to add child element including child element content to end of list
    let todoList = document.querySelector("#items");
    todoList.appendChild(newli);
    //Remove new item on click event
    newli.addEventListener('click', removeListItem);
    function removeListItem(e){
      let target = e.currentTarget;

      function removeCurrent() {
          target.remove();
      }
      setTimeout(removeCurrent, 2000);
  }
}

//Remove item
let listItems = document.getElementsByClassName("list-group-item");
for (let i=0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeListItem);
 }

function removeListItem(e){
  let target = e.currentTarget;

  function removeCurrent() {
      target.remove();
  }
  setTimeout(removeCurrent, 2000);
}


let inputDelete = document.getElementById("button-one");
inputDelete.addEventListener("click", deleteInputValue)
function deleteInputValue(e){
  document.getElementById("item").value = "";
}

function alertMe(x) {
  alert(x);
}

function passAFunction(func) {
  func();
}

//alerts "Let's check out your List of Books to Read"
passAFunction(function(){ alertMe("Let's check out your List of Books to Read") });