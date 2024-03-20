let guests = ["Lubna", "Rehana", "Sadia"]
console.log((guests[0]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guests[1]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guests[2]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log("Sadia can't make it to the dinner Party, lets invite Naila instead\n")
guests = ["Lubna", "Rehana", "Naila"]
console.log((guests[0]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guests[1]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guests[2]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log('Guess what guys I found a bigger table for the dinner Party so I am inviting more guests\n')
guests.push('Ainna')
guests.splice(0,1,'Rabia')
guests.splice(2,1,'Zahra')

console.log((guests[0]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guests[2]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guests[3]),"Please join me for an amazing dinner party at my place on this Saturday\n")

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and I can only invite two people.\n");

while (guests.length > 2) {
    let removedGuest= guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.\n`);
}

guests.forEach((guest) => {
    console.log(`Dear ${guest},\n\tYou are still invited to dinner at my place.\n`);
});

guests = [];
console.log("After removing all guests, the list is now empty:", guests);