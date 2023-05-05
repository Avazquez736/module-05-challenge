// id's variables
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
let hour = moment().format('kk');
let btnClicked = $(".saveBtn");
let saveBttn = $(".btn");



//date
let clock = setInterval(() => {
  let moment1 = moment();
  $('#currentDay').html(`${moment1.format('dddd')} ${moment1.format(' MMMM DD YYYY')} `)
}, 100);

//array of id's
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

//function to change background-color based on hour
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
changeColor();

//saved locale storage
function savedData() {
  for (let el of timesArray) {
      el.val(localStorage.getItem("timeBlock " + el.data("time")));

  }
}
savedData()

// handles clicks
function submit(event) {
  event.preventDefault();

  let click = $(event.currentTarget);

  let placeText = click.siblings("textarea");

  let targetBlock = placeText.data("time");

  localStorage.setItem("timeBlock " +  targetBlock, placeText.val());
}

saveBttn.on("click", submit);
