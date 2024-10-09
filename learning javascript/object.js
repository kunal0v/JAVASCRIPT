// method 1
var person=new Object()
person.name="medotokata"
person.roll=23
person.age=55
console.log(person)


// Method 2
var a={
    name: "kamaal",
    roll:"11",
    age:"33",
}
console.log(a.name,a.roll,a.age)
console.log(a)

// Method 3
var array=[
    {name:"Kanchana", roll_no:55},
    {name:"Karan", roll_no:66},
    {name:"archana", roll_no:88},
    {name:"anchor", roll_no:99},
    {name:"anchor", roll_no:99}

]
console.log(array[2].roll_no)

for(var i=0; i< array.length;i++){
    console.log(array[i].name)
}