console.log("working");
const date = document.getElementById("date");
const day = document.getElementById("day");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const card = document.getElementById("card");
const extra = document.getElementById("extra");
const emptyState = document.getElementById("empty-state");
const the_date = new Date();
console.log(the_date.getDay());

day.append(days[the_date.getDay()]);
date.append(the_date.getDate());

function handleclick(e) {
  console.log(extra);
  if (extra.className === "xtra-info true") {
    extra.setAttribute("class", "xtra-info false");
    emptyState.setAttribute("class", "true");
  } else {
    extra.setAttribute("class", "xtra-info true");
    emptyState.setAttribute("class", "false");
  }
}
