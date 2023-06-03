let random_Number = Math.floor(Math.random() * 10);
let days_URLs = [
  'url("https://wallpaperaccess.com/full/6595356.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595357.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595384.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595392.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595418.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595322.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595331.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595340.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/31193.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/6595447.jpg") center no-repeat',
];
let nights_URLs = [
  'url("https://wallpaperaccess.com/full/882.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/83106.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138616.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138627.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138629.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138641.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138643.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138645.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138647.jpg") center no-repeat',
  'url("https://wallpaperaccess.com/full/138664.jpg") center no-repeat',
];
let morning_hours = [05, 06, 07, 08, 09, 10, 11, 12];
let afternoon_hours = [13, 14, 15, 16];
let evening_hours = [17, 18, 19, 20];
let night_hours = [21, 22, 23, 00, 01, 02, 03, 04, 05];
let nights_time = [18, 19, 20, 21, 22, 23, 00, 01, 02, 03, 04];
let days_time = [06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17];
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    var value = json["skills"];
    console.log(JSON.stringify(value));
    console.log("--------------------------------");
    var newText = JSON.stringify(value).replaceAll('"', "");
    var myArray = newText.split(",");
    var skills_items = "";
    for (var i of myArray) {
      skills_items += `<span class="${i}">${i}</span>`;
    }
    document.querySelector(".skills-tags").innerHTML = skills_items;
  });
function Time_Setting() {
  var time = new Date();
  var hour = time.getHours();
  var present_time = "";
  if (morning_hours.includes(hour)) {
    present_time = "Good Morning";
  } else if (afternoon_hours.includes(hour)) {
    present_time = "Good Afternoon";
  } else if (evening_hours.includes(hour)) {
    present_time = "Good Evening";
  } else if (night_hours.includes(hour)) {
    present_time = "Good Night";
  } else {
    alert("Can not Recognize Your Region Time :(");
  }
  $(".time-setting").html(present_time);
}
Time_Setting();
setInterval(Time_Setting, 60000);
function Wallpaper_Setting() {
  var time = new Date();
  var hour = time.getHours();
  var random_Number = Math.floor(Math.random() * 10);
  var wallpaper_day_url = days_URLs[random_Number];
  var wallpaper_night_url = nights_URLs[random_Number];
  if (nights_time.includes(hour)) {
    $(".container").css({
      background: wallpaper_night_url,
      "background-size": "cover",
    });
  } else if (days_time.includes(hour)) {
    $(".container").css({
      background: wallpaper_day_url,
      "background-size": "cover",
    });
  } else {
    alert("Can not Recognize Your Region Time :(");
  }
}
Wallpaper_Setting();
setInterval(Wallpaper_Setting, 60000);

$(".contact-btn").on("click", function () {
  if ($(".contact-box").css("display") === "flex") {
    $(".contact-box").fadeOut();
    $(".btn-icon").removeClass("bi-x-lg");
    $(".btn-icon").addClass("bi-send");
  } else {
    $(".contact-box").fadeIn();
    $(".btn-icon").removeClass("bi-send");
    $(".btn-icon").addClass("bi-x-lg");
  }
});
$(".skills-tags-header").on("click", function () {
  if ($(".skills-tags").css("display") === "flex") {
    $(".skills-tags").fadeOut();
  } else {
    $(".skills-tags").fadeIn();
  }
});
$(".tools-btn").on("click", function () {
  if ($(".tools-navbar").css("display") === "flex") {
    $(".tools-navbar").fadeOut();
    $(".tools-btn-icon").removeClass("bi-x-lg");
    $(".tools-btn-icon").addClass("bi-list");
  } else {
    $(".tools-navbar").fadeIn();
    $(".tools-btn-icon").removeClass("bi-list");
    $(".tools-btn-icon").addClass("bi-x-lg");
  }
});
$(".tools-btn-sidebar").on("click", function () {
  $(".tools-navbar").fadeOut();
  $(".tools-btn-icon").removeClass("bi-x-lg");
  $(".tools-btn-icon").addClass("bi-list");
});
