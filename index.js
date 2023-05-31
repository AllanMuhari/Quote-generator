//var
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
    {
        quote:" A machine that turns coffee into code.",
        person:"Unknown"
    },
    {
        quote:" Computers are fast; programmers keep it slow.",
        person:"Unknown"
    },
    {
        quote:"When I wrote this code, only God and I understood what I did. Now only God knows.",
        person:"Unknown"
    },
    {
        quote:" A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!",
        person:"Unknown"
    },
    {
        quote:" How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
        person:"Unknown"
    },
    {
        quote:"Programming can be fun, and so can cryptography; however, they should not be combined.",
        person:"Unknown"
    },
    {
        quote:" A program is never less than 90% complete and never more than 95% complete.",
        person:"Unknown"
    },
    {
        quote:" 99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code …",
        person:"Unknown"
    },
    {
        quote:" Remember that there is no code faster than no code.",
        person:"Unknown"
    },
    {
        quote:" No code has zero defects.",
        person:"Unknown"
    },
    {
        quote:" It’s not a bug — it’s an undocumented feature.",
        person:"Unknown"
    },
    {
        quote:" It compiles; ship it.",
        person:"Unknown"
    },
    {
        quote:" It works on my machine.",
        person:"Unknown"
    },
];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
});