// object --- ობიექტები
let myObj = {
    //key value ---- ნებისმიერი მონაცემთა ტიპი შეიძლება, რომ იყოს
    name: "Grdzelo",
    surname: "Grdzelosshvili",
}

let name = "Grdzelo"

console.log(myObj.surname.length)

console.log(myObj["surname"])

console.log(myObj.name, name)
console.log("-----------------------------")
console.log(myObj.surname)



// -------------------------------------------------
console.log("------------------------------------------")


// object type მეთოდი    constructor
// this.    კონკრეტული ობიექტი
// this. ის შემდეგ რაც იწერება იებქტის key არის

// constructor
function Person(name, age, color) {
    this.name = name
    this.age = age
    this.favColor = color
    this.nameLength = name.length
}
// შევქმენით ცვლადი მინვანიჭეთ ახალი object type მნიშვნელობა ხოლო პარამეტრად კი გადავეცით ჩვენი მნიშვნელობები

// new ქმნის ახალ ობიექტს და მათ ჩვენ ვანიჭებთ მნიშვნელობას
const newPerson = new Person("davit", 20, "blue")
const newPerson1 = new Person("იოანე", 17, "შავი ძმა")


console.log(newPerson, "\n", newPerson1)


function person(name, age) {
    this.name = name;
    this.age = age;
}
let John = new person("John", 25);
let James = new person("James", 21);

console.log("------------------------------------")
// როცა ფუნქციას ობიექტიში ვიძახებთ (ანუ ვქმნით მეთოდს) არ უნდა ბრჩხილები   
function persons(name, age) {
    this.name = name
    this.age = age
    this.yearOfBirth = bornYear
}

function bornYear() {
    return 2024 + this.age
}
// ობიექტების დამატება
// ახალი ობიექტის შექმნის შემდეგ ვიძახებთ ჩვენს მეთოდს 
let Davit = new persons("davit", 15)
Davit["broIsCool"] = true


//                                  0                1
Davit.broIsAnOtherLevel = [{ name: "davit" }, { name: "ioane", age: 15 }]


console.log(Davit.broIsAnOtherLevel[1].age)

// შექმენი ობიექტი name, surname, age 2 მგალთი
// შექმენი constructor ობიექტი  name, surname, age 2 მაგალთი
// შექმენი constructor ობიექტი  name, surname, age დაამატე 2 properties: carName, carColor 2-2 მაგალითი 2 გზით
// შექმენი constructor ობიექტი  name, surname, age და დაამტე 2 ახალი method sxvadasxva მნიშვნელობებით

