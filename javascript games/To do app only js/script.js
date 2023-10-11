let todo =[];

let req = prompt("Please enter you request");

console.log(req);

while(true){
    if(req =="quit"){
        console.log("quiting app");
        break;
    }

    if(req =="list"){
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
    }
    else if(req == "add"){
        let task = prompt("please enter the task you want to add")
        todo.push(task);
        console.log("task added");
    }
    else{
        console.log("wrong request")
    }


    req = prompt("Please enter you request");
}