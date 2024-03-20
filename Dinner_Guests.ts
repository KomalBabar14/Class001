let guest = ["Lubna", "Rehana", "Sadia"]
console.log((guest[0]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guest[1]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guest[2]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log("Sadia can't make it to the dinner Party, lets invite Naila instead\n")
guest = ["Lubna", "Rehana", "Naila"]
console.log((guest[0]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guest[1]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guest[2]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log('Guess what guys I found a bigger table for the dinner Party so I am inviting more guests\n')
guest.push('Ainna')
guest.splice(0,1,'Rabia')
guest.splice(2,1,'Zahra')

console.log((guest[0]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guest[2]),"Please join me for an amazing dinner party at my place on this Saturday\n")
console.log((guest[3]),"Please join me for an amazing dinner party at my place on this Saturday\n")

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and I can only invite two people.\n");

while (guest.length > 2) {
    let removedGuest= guest.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.\n`);
}

guest.forEach((guest) => {
    console.log(`Dear ${guest},\n\tYou are still invited to dinner at my place.\n`);
});
let Length: number = guest.length;
console.log('I have invited',Length,'people to the Dinner Party')