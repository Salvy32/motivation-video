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
      document.body.style.backgroundImage =
        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qGaKloKnBDsTF2A6biUg3UogvVboQYJQ7w&usqp=CAU")';
      // document.querySelector("body").style.color = black;
      break;
    case 1:
      document.querySelector("#monday").classList.toggle("hidden");
      document.body.style.backgroundImage =
        'url("https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
      document.querySelector("body").style.color = "white";

      break;
    case 2:
      document.querySelector("#tuesday").classList.toggle("hidden");
      document.body.style.backgroundImage =
        'url("https://media.istockphoto.com/id/1255203350/photo/teamwork-friendship-hiking-help-each-other-trust-assistance-silhouette-in-mountains-sunrise.jpg?b=1&s=612x612&w=0&k=20&c=etEWmenVod8bM1Y5NeeTfyA6zXgKj3Y5PGUZQzLt3I0=")';
      document.querySelector("body").style.color = "white";
      break;
    case 3:
      document.querySelector("#wednesday").classList.toggle("hidden");
      document.body.style.backgroundImage =
        'url("https://assets.hustleinspireshustle.com/63d5cc6761dbe779bd7fdbc4/63d86addef8e4969494fb3a9_5d82e46e8fcf39fd6a638f8b_fitness-motivation-quotes_6.jpeg")';
      // document.querySelector("body").style.color = "white";
      break;
    case 4:
      document.querySelector("#thursday").classList.toggle("hidden");
      document.body.style.backgroundImage =
        'url("https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aXZhdGlvbmFsJTIwcXVvdGVzfGVufDB8fDB8fHww")';
      // document.querySelector("body").style.color = "white";
      break;
    case 5:
      document.querySelector("#friday").classList.toggle("hidden");
      document.body.style.backgroundImage =
        'url("https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2022/04/22145140/motivational-workout-quotes-jerry-rice.png")';
      // document.querySelector("body").style.color = "white";
      break;
    case 6:
      document.querySelector("#saturday").classList.toggle("hidden");
      document.body.style.backgroundImage =
        'url("https://www.yourtango.com/sites/default/files/image_blog/motivational-quotes.png")';
      // document.querySelector("body").style.color = "white";
      break;
  }
}
