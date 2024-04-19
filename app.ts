let guestList : string[] = ["Sardar","Sana","sarmad"]
// for (let i = 0; i < guestList.length; i++){
//     console.log("Dear mr/mdam\n",guestList[i],"\n its our pleasure to invite you at dinner","\nthank you");
    
// }

let absentGuest = "Sana";
let newGuest = "Saleem";
guestList[1] = newGuest;

// for (let i = 0; i < guestList.length; i++){
//     console.log("Dear mr/mdam\n",guestList[i],"\n its our pleasure to invite you at dinner","\nthank you");
    
// }
// // console.log(absentGuest,"is not coming to dinner");
// console.log("good news,we found a bigger dinner table, we invite 3 more guest");
guestList.unshift("fatima");
guestList.splice(1,0,"Sameer");
guestList.push("Saif soomro");

// for (let i = 0; i < guestList.length; i++){
//     console.log("Dear mr/madam\n",guestList[i],"\n its our pleasure to invite you at dinner","\nthank you");
    
// }
console.log("sorry we cant arrange a bigger dinner table so that we invited 2 guest yet");
while (guestList.length >2) {
    let removeguest = guestList.pop();
    console.log(removeguest,"\nsorry you are not invited to dinner");
    
}

for (let i = 0; i < guestList.length; i++){
    console.log("Dear mr/madam\n",guestList[i],"\n you are still invited to dinner","\nthank you");
    
}
guestList.splice(0,2);
console.log(guestList);

