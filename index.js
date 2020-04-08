let greets = "Mahfuz";
console.log(greets);

// Cannot be a reserved keyword
// Cannot start with a number
// Cannot contain a space or hyphen
// Should be meaningfull
// Case-Sensative

let person = {
    name: "Mk",
    age: 39
};

// Dot notation
person.name = 'Mahfuz';

// Bracket Notation
person['name'] = 'Khandaker';

console.log(person.name)

let colorLiked = ['Green', 'Blue'];
colorLiked[2] = 'White';
console.log(colorLiked)

// Write function
function greeting(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}
greeting('Mahfuz', 'Khandaker');
greeting('Darling');


$(document).ready(function(){
    $('.col-4-lg').hover(
        // trigger when mouse hover
        function(){
            
            $(this).animate({
                marginTop: "-=1%",
            }, 200);
        },
        // trigger when mouse out
        function(){
            $(this).animate({
                marginTop: "0%",
            },200)
        }
    );
});