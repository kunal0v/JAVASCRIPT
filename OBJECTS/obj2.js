// const tinderUser=new Object();
const tinderUser={};

tinderUser.id="1234af"; 
tinderUser.name="Samay Rihana";
tinderUser.email="supreme23@gmail.com";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);
// const regularUser={
//     email: "leadersupreme23@gmail.com",
//     fullName:{
//         firstName:"Suip",
//         lastName:"Meme",
//     }
// }
// console.log(regularUser.fullName.firstName);

const obj1={1:"Kunal", 
    2:"Allu",
    3:"Arjun"
}
const obj2={4:"Kamal", 
    5:"Rumala",
    6:"Kamlesh"
}
// METHOD 1: TO ADD TWO OBJECTS
const obj3=Object.assign(obj1,obj2)
console.log(obj3);
// METHOD2: TO ADD TWO OBJECTS
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);

// <-------------------------->
// another one=>>
const target={a:1, b:2};
const source={b:4, c:6};
const returnedTarget=Object.assign(target,source);
console.log(target);
console.log(returnedTarget==target);


