/*
 * Det här är ett JavaScript-kladdblock.
 *
 * Skriv in lite JavaScript, högerklicka eller välj från Kör-menyn:
 * 1. Kör för att evaluera den markerade texten,
 * 2. Inspektera för att öppna en objektinspektör på resultatet, eller
 * 3. Visa för att infoga resultatet i en kommentar efter markeringen.
 */

//Uppgift d - introduktion av konsollen
// konsollen är mindre störande än alert


// ctrl shift K , sen CTRL R
// prompt och alert stannar sidan, console gör så att den fortsätter på

//var the_King = "Karl XVI Gustaf";
//console.log("Kungen är " + the_King);
//console.log("Lilla kungen är " + the_King.toLowerCase());
//console.log("Stora kungen är " + the_King.toUpperCase());

// Uppfigt e - if - else
var name = "Mustafa";
if ( name.length > 5 ) {
    console.log("Ditt namn har mer än 5 tecken ");
} else if ( name.length === 5 ) {
    console.log("Ditt namn innehåller precis 5 tecken ");
} else {
    console.log("Ditt namn innehåller färre än 5 tecken ");
}

// Uppgift f - en enkel loop

var eman = "", i = 1, len = name.length;
while ( i <= len ) {
    eman += name[len - i];
    i += 1;
}
console.log("Namnet baklänges blir '" + eman + "'");




