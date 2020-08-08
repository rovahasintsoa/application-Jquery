$(document).ready(function () {
//high-tech
  $('#tech').hide();
  $('.tech').hover(
    function () {
    $('#tech').show();
  },
function () {
  $('#tech').hide();
});

// Informatique
$('#info').hide();
$('.info').hover(
  function () {
    $('#info').show();
  },
  function () {
    $('#info').hide()
  }
);
// music
$('#sono').hide();
$('.sono').hover(
  function () {
    $('#sono').show();
  },
  function () {
    $('#sono').hide()
  }
)
})
