const firstContainer = document.querySelector("#top");
const secondContainer = document.querySelector("#bottom");
const action = document.querySelector("#button");
action.addEventListener("click", () => {
  firstContainer.style.display = "none";
  secondContainer.style.display = "block";
});

// firstContainer.style.display = "none";
// secondContainer.style.display = "block";
setInterval(timing, 1000);
function timing() {
  // time
  const time = document.querySelector("#time");
  let t = new Date().toLocaleTimeString();
  time.innerHTML = t;

  // date
  const date = document.querySelector("#date");
  let d = new Date();

  let dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = dayArr[d.getDay()];
  let num = d.getDate();
  let month = monthArr[d.getMonth()];
  let year = d.getFullYear();

  date.innerHTML = `${day}, ${num} ${month} ${year}`;
}
