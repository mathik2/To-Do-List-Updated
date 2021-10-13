var storage = document.getElementById("storage");
var input = document.getElementById("input");
var button = document.getElementById("AddButton");
/*
button.addEventListener("click", function() {
    var item = document.createElement("li");
    item.innerHTML = input.value;
    storage.appendChild(item);
    var button = document.createElement("button")
    var btntext = document.createTextNode("delete")
    button.appendChild(btntext);
    button.setAttribute('id','delete')
    item.appendChild(button);
    input.value = "";
    item.addEventListener("click", function() {
        item.style.textDecoration = "line-through";
    });
    item.addEventListener("dblclick", function() {
        storage.removeChild(item);
    })

});

button.addEventListener("click", function() {
    var item = document.createElement("li");
    item.innerHTML = input.value;
    storage.appendChild(item);
    var deletedButton = document.createElement("button")
    var btntext = document.createTextNode("delete")
    deletedButton.appendChild(btntext);
    deletedButton.setAttribute('id','delete')
    item.appendChild(deletedButton);


    var completedButton = document.createElement("button")
    var btntext = document.createTextNode("completed")
    completedButton.appendChild(btntext);
    completedButton.setAttribute('id','completed')
    item.appendChild(completedButton);

    var editButton = document.createElement("button")
    var btntext = document.createTextNode("edit")
    editButton.appendChild(btntext);
    editButton.setAttribute('id','edit')
    item.appendChild(editButton);

    input.value = "";
    completedButton.addEventListener("click", function() {
        item.style.textDecoration = "line-through";
    });

    deletedButton.addEventListener("click", function() {
        storage.removeChild(item);
    })
    editButton.addEventListener("click", function() {
       var inputedit = document.createElement("input");
        inputedit.value = input.value;
        var btntext = document.createTextNode("save")
        editButton.appendChild(btntext);
       item.appendChild(inputedit);
    })
});*/
/*
button.addEventListener("click", function() {
    var item = document.createElement("li");
    
   

    var toDoItems = document.createElement("input");
    toDoItems.value= input.value;
    toDoItems.disabled = true;
    toDoItems.style.backgroundColor="yellow";
    toDoItems.style.border="1px solid yellow"

    item.appendChild(toDoItems)

    storage.appendChild(item);

    var deletedButton = document.createElement("button")
    var btntext = document.createTextNode("delete")
    deletedButton.appendChild(btntext);
    deletedButton.setAttribute('id','delete')
    item.appendChild(deletedButton);


    var completedButton = document.createElement("button")
    var btntext = document.createTextNode("completed")
    completedButton.appendChild(btntext);
    completedButton.setAttribute('id','completed')
    item.appendChild(completedButton);

    var editButton = document.createElement("button")
    var btntext = document.createTextNode("edit ")
    editButton.appendChild(btntext);
    editButton.setAttribute('id','edit')
    item.appendChild(editButton);

    input.value = "";
    completedButton.addEventListener("click", function() {
        toDoItems.style.textDecoration = "line-through";
        item.style.backgroundColor ="green";
    });

    deletedButton.addEventListener("click", function() {
        storage.removeChild(item);
    })
    editButton.addEventListener("click", function() {
        toDoItems.disabled = false;
       
        var saveButton = document.createElement("button")
        saveButton.innerHTML="save"
        item.appendChild(saveButton);
      

       saveButton.addEventListener("click", function() {
           
        toDoItems.placeholder =toDoItems.value;
        toDoItems.disabled = true;
        saveButton.remove()
       })
    })
});*/
button.addEventListener("click", function() {

   if(input.value==""){
       alert("enter value to add")
   }
   else{
    var item = document.createElement("li");
    
   

    var toDoItems = document.createElement("input");
    toDoItems.value= input.value;
    toDoItems.disabled = true;
    toDoItems.style.backgroundColor="rgb(241, 241, 162)";
    toDoItems.style.border="1px solid yellow"

    item.appendChild(toDoItems)

    storage.appendChild(item);

    var deletedButton = document.createElement("button")
    var btntext = document.createTextNode("Delete")
    deletedButton.appendChild(btntext);
    deletedButton.style.backgroundColor="rgb(248, 161, 127)"
    deletedButton.setAttribute('id','delete')
    item.appendChild(deletedButton);


    var completedButton = document.createElement("button")
    var btntext = document.createTextNode("Completed")
    completedButton.appendChild(btntext);
    completedButton.style.backgroundColor="rgb(131, 248, 127)"
    completedButton.setAttribute('id','completed')
    item.appendChild(completedButton);

    var editButton = document.createElement("button")
    var btntext = document.createTextNode("Edit ")
    editButton.style.backgroundColor="rgb(151, 230, 250)"
    editButton.appendChild(btntext);
    editButton.setAttribute('id','edit')
    item.appendChild(editButton);

    input.value = "";
    completedButton.addEventListener("click", function() {
        toDoItems.style.textDecoration = "line-through";
        item.style.backgroundColor ="green";
    });

    deletedButton.addEventListener("click", function() {
        storage.removeChild(item);
    })
    editButton.addEventListener("click", function() {
        toDoItems.disabled = false;
        toDoItems.style.backgroundColor="white";
        var saveButton = document.createElement("button")
        saveButton.innerHTML="save";
        saveButton.setAttribute('id','save')
        item.appendChild(saveButton);
      

       saveButton.addEventListener("click", function() {
           if(toDoItems.value==""){
               alert("Please enter value to save")
           }
           else{
            toDoItems.placeholder =toDoItems.value;
            toDoItems.disabled = true;
            toDoItems.style.backgroundColor="yellow"
            saveButton.remove()
           }
       
       })
    })}
});
