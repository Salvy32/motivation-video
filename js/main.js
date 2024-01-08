document.querySelector("#getWeekday").addEventListener("click", findMusic);

function findMusic() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  document.querySelector(
    "#todayDate"
  ).innerText = `Today is ${day}. Here is a motivation video for you.`;

  switch (d.getDay()) {
    case 0:
      document.querySelector("#sunday").classList.toggle("hidden");
      break;
    case 1:
      document.querySelector("#monday").classList.toggle("hidden");
      break;
    case 2:
      document.querySelector("#tuesday").classList.toggle("hidden");
      break;
    case 3:
      document.querySelector("#wednesday").classList.toggle("hidden");
      break;
    case 4:
      document.querySelector("#thursday").classList.toggle("hidden");
      break;
    case 5:
      document.querySelector("#friday").classList.toggle("hidden");
      break;
    case 6:
      document.querySelector("#saturday").classList.toggle("hidden");
      break;
  }
}
