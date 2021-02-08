//*calls html Tags upfront to Javascript A variable is the name of the storage for a value assigned to identify its location. In JavaScript a variable can be declared using let or var. ‘var’ declaration scope is global irrespective of its declared scope or location whereas the variable declared using let statement is block scoped or enclosed scope.
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
//*
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
