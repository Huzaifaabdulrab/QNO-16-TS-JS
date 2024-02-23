// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let  guetsArr: string [] = ["Arman","Rizwan raza","Shazaib","Shamir"];
let canNotAttend : string = "Arman";
let newgues : string = "Huzaifa";

guetsArr[guetsArr.indexOf(canNotAttend)]=newgues;
console.log(guetsArr);

// guetsArr.map((item)=> (
   // console.log(`Dear ${item}, i found a bigger dinner table`)
// ));

let beginning: string = "raza"

guetsArr.unshift(beginning);
// console.log(guetsArr);
let middleGuest: string ="Ali"
let middleIndex = guetsArr.length/2
guetsArr.splice(middleIndex,0,middleGuest)
// console.log(guetsArr)

guetsArr.push("Zishan")
console.log(guetsArr)

guetsArr.map((item)=> (
   console.log(`Dear ${item}, You Are Cordinally invited to a Dinner`)
));