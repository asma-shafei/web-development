// Functions

// welcomeUser Function
function welcomeUser(username){
    console.log("welcome " + username);
}
welcomeUser ("sara");

// calculateTotal Function
function calculateTotal(num1,num2){
    const result = num1 + num2;

    return result;
}
console.log(calculateTotal(10, 20));


//Arrays
const users = ["Sara", "Ahmed", "Mona", "Ali", "Omar"];
console.log(users[0]);
console.log(users[users.length-1]);
users[1]="Mohamed";
console.log(users[1]);
users.push("asmaa");
console.log(users);
users.pop();
console.log(users);
console.log(users.length);


//Loops
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

//Objects
const user = {
    name: "Asmaa",
    age: 30,
    email: "www.asmaa@gmail.com",
    department: "computer science"
};
console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.department);

user.age = 31;
user.phone = "0123456789";

console.log(user.age);
console.log(user.phone);


//DOM
const heading = document.getElementById("welcome-heading");

heading.innerText = "Welcome Asmaa";