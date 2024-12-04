//object literals 
// Object.create
const mysym=Symbol("ramesh")
const obj={
    name:"KUnal bhandari",
    age:67,
    location:"Pithoragarh",
    isloggedIn:false,
    lastLoginDay:["monday","Sunday"],
    [mysym]:"ramesh1",
}

// console.log(obj.age)
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj[mysym])
// console.log(typeof obj[mysym])
// obj.age=54
// console.log(obj.age)
// console.log(obj)

obj.greeting=function(){
    console.log("Happy Christmas!");
}
console.log(obj.greeting());

obj.greetingTwo=function(){
    console.log(`Happy new year,${this.name}`);
    
}
// ${this.name}=> SAME OBJECT REFERENCE WE USE THIS  
console.log(obj.greetingTwo());