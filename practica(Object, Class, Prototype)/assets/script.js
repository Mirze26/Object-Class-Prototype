"use strict"

// objects:

// let st1 ={
//     name:"Saleh",
//     surname:"Ibrahimov",
//     email:"saleh@gmail.com"
// }
// st1.address = "Neftciler";
// console.log(st1.address)
//----------------------------------
// user.name = "Pervin"
// console.log(user.name)
//----------------------------------
//console.log(st1.name)

// for (const key in st1) {
//     console.log(key + ": " + st1[key])
// }
//------------------------------------------

// let stu1 = {
//     id: 1,
//     name: "Eli",
//     surname: "Talibov",
//     address: "Xetai"
// }

// let stu2 = {
//     id: 2,
//     name: "Elekber",
//     surname: "Hesenov",
//     address: "Bayil"
// }

// let stu3 = {
//     id: 3,
//     name: "Mirze",
//     surname: "Beshirzade",
//     address: "BulBule"
// }

// let stu4 = {
//     id: 4,
//     name: "Shaiq",
//     surname: "Kazimov",
//     address: "Sedmoy"
// }


// let group = {
//     name: "P135",
//     capacity: 3,
//     students: [],
//     addStudent: function (student) {
//         let stu = this.students.find(s => s.id == student.id);

//         if (stu != undefined) {
//             console.log("Stu already exist");
//             return;
//         }

//         if (this.students.length == this.capacity) {
//             console.log("Group already filled");
//             return;
//         }

//         this.students.push(student);
//     },

// updateStudent: function (student) {
// let stu = this.students.find(s => s.id == stu.id);

//if (stu != undefined) {
// stu.address = student.address
//}


//},


//getStudents: function () {
//     for (const item of this.students) {
//         console.log(`${item.name} ${item.surname}${item.address}`)

//     }
//return this.students
//}
//}

// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)

// let datas = group.getStudents();
// getStudentsDatas(datas);

// function getStudentsDatas(arr) {
//     for (const item of arr) {
//         console.log(`${item.name} ${item.surname} ${item.address}`)
//     }
// }


// let updateStudent = {
//     id: 4,
//     address: "Ehmedli"
// }

// group.updateStudent(updateStudent);

// let datas = group.getStudents();

// getStudentsDatas(datas);

//------------------------------------------------------------------------


// let user = {
//     name: "Elcan",
//     company: {
//         name: "Code academy",
//         rooms: [
//             {
//                 name: "Yupiter",
//                 capacity: 15,
//                 computers:["HP","Apple","Acer"]
//             },

//             {
//                 name: "Saturn",
//                 capacity: 10
//             }
//         ]
//     }
// }


// function getRoomCapacityByUser(user){
//     let rooms = user.company.rooms;
//     let computers =[]
//     for (const room of rooms) {
//         if(room.name == "Yupiter"){
//             computers = room.computers;
//         }
//     }

//     return computers;
// }

// console.log(getRoomCapacityByUser(user))

//-----------------------------------------------------

// class Car {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }

//     showCarData(color) {
//         return this.name + " " + this.speed + "-" + color;
//     }
// }

// let car1 = new Car("BMW", 500);
// console.log(car1.showCarData("black"))

//----------------------------------------------------------------


// class Animal{
//     constructor(name,sound){
//         this.name= name;
//         this.sound=sound;
//     }

//     static eat(){
//         console.log("animal eating")
//     }
// }

// class Cat extends Animal{
//     constructor(color,name,sound){
//         super(name,sound);
//         this.color = color;
//     }
// }

// let cat1 = new Cat ("black", "Luis","ham ham");

// let animal1= new Animal("cat","miyaaa")

// console.log(animal1.name)

// console.log(cat1.name)

//Animal.eat()

//----------------------------------------------------


// let nums =[1,2,3,4,5];

// Array.prototype.heyder = function(){
//     console.log("Hello Heyder")
// }

// nums.heyder();

//-------------------

//String.prototype.p135 = "Ugurlar";

// String.prototype.getStr = function(str){
//     console.log(str)
// }

// String.prototype.arrow = () =>{
//     console.log("arrow")
// }

// let name = "Shaiq";

// name.arrow();

//-------------------------------------------------