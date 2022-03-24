$(function () {
  $(".drag").draggable({
    cursor: "crosshair",
    drag: function () {
      // $("#box").offset() = $("#header").offset()
    },
    stop: function () {
      console.log($(".box").offset());
    },
  });

  $("#box").resizable({
    handles: "w,e,s",
    minWidth: 200,
    maxWidth: 400,
    minHeight: 200,
    maxHeight: 400,
    ghost: true,
    stop: function () {
      $("#header").width($("#box").width());
    },
  });
});
