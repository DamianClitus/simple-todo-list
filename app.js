var todos = ["Hello",];

var input = prompt("What would you like to do...");

while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    }
    else if (input == "new") {
        var newTodo = prompt("Write a New Todo");
        todos.push(newTodo);
    }


}
console.log("OK, YOU QUIT THE APP");
