$(".portfolio").each(function (index) {
  $(this).attr("id", "img" + (index + 1));
});

$(".portfolio").each(function () {
  $("#navi").append('<div class="circle"></div>');
});

$(".circle").each(function (index) {
  $(this).attr("id", "circle" + (index + 1));
});

$(".portfolio").click(function () {
  if ($(this).hasClass("opened")) {
    $(this).removeClass("opened");
    $(".portfolio").fadeIn("fast");
    $(this).find(".ombra").fadeOut();
    $("#navi div").removeClass("activenav");
  } else {
    var indexi = $("#maincontent .portfolio").index(this) + 1;
    $(this).addClass("opened");
    $(".portfolio").not(this).fadeOut("fast");
    $(this).find(".ombra").fadeIn();
    $("#circle" + indexi).addClass("activenav");
  }
});

//navi buttons
$("#navi div").click(function () {
  if ($(this).hasClass("activenav")) {
    return false;
  }

  $("#navi div").removeClass("activenav");
  $(".portfolio").removeClass("opened");
  $(".portfolio").show();
  $(".ombra").hide();

  var index = $("#navi div").index(this) + 1;
  $("#img" + index).addClass("opened");
  $(".portfolio")
    .not("#img" + index)
    .fadeOut("fast");
  $("#img" + index)
    .find(".ombra")
    .fadeIn();

  $(this).addClass("activenav");
});

/* POP UP */

$(document).ready(function () {
  var id = "#dialog";

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $("#mask").css({ width: maskWidth, height: maskHeight });

  //transition effect
  $("#mask").fadeIn(500);
  $("#mask").fadeTo("slow", 0.9);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(id).css("top", winH / 2 - $(id).height() / 2);
  $(id).css("left", winW / 2 - $(id).width() / 2);

  //transition effect
  $(id).fadeIn(2000);

  //if close button is clicked
  $(".window .close").click(function (e) {
    //Cancel the link behavior
    e.preventDefault();

    $("#mask").hide();
    $(".window").hide();
  });

  //if mask is clicked
  $("#mask").click(function () {
    $(this).hide();
    $(".window").hide();
  });
});
