console.log("WELLCOME");

var todos = ["Hello"];

window.setTimeout(function () {
    // put all of your JS code from the lecture here

    var input = prompt("What would you like to do...");

    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        }
        else if (input == "new") {
            addTodos();
        }
        else if (input === "delete") {
            deleteTodos();
        }

        input = prompt("What would you like to do...");

    }

    console.log("OK, YOU QUIT THE APP");

    function listTodos() {
        console.log("**********");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
    }

    function addTodos() {
        var newTodo = prompt("Write a New Todo");
        todos.push(newTodo);
        console.log("Added a Todo");
    }

    function deleteTodos() {
        var index = prompt("Index of the item you want to remove...");
        todos.splice(index, 1);
        console.log("Deleted a Todo");
    }
}, 1000);