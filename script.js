$(document).ready(function () {
  $("#b-sub1").click(function () {
    $("#fullstack, #frontend, #design").show();
  });

  $("#b-sub2").click(function () {
    $("#fullstack").show();
    $("#frontend, #design").hide();
  });

  $("#b-sub3").click(function () {
    $("#frontend").show();
    $("#fullstack, #design").hide();
  });

  $("#b-sub4").click(function () {
    $("#design").show();
    $("#fullstack, #frontend").hide();
  });
});
