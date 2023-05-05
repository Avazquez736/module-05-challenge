let nine = $("#9");
let ten = $("#10");
let eleven = $("#11");
let twelve = $("#12");
let one = $("#13");
let two = $("#14");
let three = $("#15");
let four = $("#16");
let five = $("#17");
let six = $("#18");
let seven = $("#19");
let hour = moment().format('k');

console.log(`Hour:${hour}`)
// Date and Hour

let clock = setInterval(() => {
  let moment1 = moment();
  $('#currentDay').html(`${moment1.format('dddd')} ${moment1.format(' MMMM DD YYYY')} `)
}, 100);



let timesArray = [
    nine,
    ten,
    eleven,
    twelve,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
];
console.log(nine.attr("data-time"))

    // For coloring the past, present, and future time blocks
function changeColor(){
    for (let i = 0; i < timesArray.length; i++) {
        timesArray[i].removeClass("past future present");

        if (hour > timesArray[i].attr("data-time")) {
            timesArray[i].addClass("past");

        } else if (hour === timesArray[i].attr("data-time")) {
            timesArray[i].addClass("present");

        } else {

            timesArray[i].addClass("future");
        }
    }
  }

// textarea elements



changeColor();


// render schedule saved in local storage
