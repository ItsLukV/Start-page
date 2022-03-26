let list = [];

$(function () {
  $(".drag").draggable({
    cursor: "crosshair",
    stop: function () {
      console.log($(".box").offset());
    },
  });

  $("#box").resizable({
    handles: "e,s",
    minWidth: 200,
    maxWidth: 400,
    minHeight: 200,
    maxHeight: 400,
    ghost: true,
    stop: function () {
      $("#header").width($("#box").width());
      checkHide();
    },
    resize: function () {},
  });

  $("#btnSubmit").click(function () {
    create($("#input").val());
  });

  function checkHide() {
    if (
      $("#btnSubmit").position().top + $("#btnSubmit").height() + 5 >
      $("#box").height() + $(".box").position().top
    ) {
      $("#btnSubmit").hide();
      $("#input").hide();
    } else {
      $("#btnSubmit").show();
      $("#input").show();
    }
    for (let i = 0; i < list.length; i++) {
      if (
        $(`#li${i}`).position().top + $(`#li${i}`).height() + 5 >
        $("#box").height() + $(".box").position().top
      ) {
        $(`#li${i}`).hide();
      } else {
        $(`#li${i}`).show();
      }
    }
  }

  function create(text) {
    list.push(
      $("ol").append(
        `<li id="li${list.length}">${text}<button onclick="remove(${list.length})" id="btn${list.length}" class="close">x</button></li>`
      )
    );
    checkHide();
    // $(".box").position().top;
    // $(".box").height();
  }
});

function arrRemove(arr, x) {
  if (x === undefined) return;
  arr.splice(x, 1);
}

function remove(x) {
  $("#li" + x).remove();
  arrRemove(list, x);
  checkHide();
}
