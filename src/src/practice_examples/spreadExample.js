//Spread operator
let students = ["Matt", "Daniel", "Bryan"];
let copiedStudents = 
[...students, ...student, ...student]; 
//Array would now be: ["Matt", "Daniel", "Bryan","Matt", "Daniel", "Bryan","Matt", "Daniel", "Bryan"]
let userData = {
    user:"George",
    age:41,
    favoriteFood:"Pizza"
};

// let userName = userData.name;
// let userAge = userData.age;
// let favoriteFood = userData.favoriteFood;a
let {username, userage, favoriteFood} = userData;