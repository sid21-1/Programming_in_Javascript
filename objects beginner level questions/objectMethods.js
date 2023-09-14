const details ={
    name:'Happy Gupta',
    age : '21',
    year:'3rd'
}

details.introduce = function(){
    console.log (`Hi, I'm ${this.name}, and my age is ${this.age} years old`)
}

details.introduce();