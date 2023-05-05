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
let hour = moment().hours();


// Date and Hour

let clock = setInterval(function() {
  let moment1 = moment();
  $('#currentDay').html(`${moment1.format('dddd')} ${moment1.format(' MMMM DD YYYY')} `)
}, 100);