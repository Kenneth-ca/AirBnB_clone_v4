$('document').ready(function () {
  const aList = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).prop('checked')) {
      aList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete aList[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(aList).join(', '));
  });

/*Task 3: API Status */
  $.ajax({
    url: "http://0.0.0.0:5001/api/v1/status/",
    type: "GET",
  })
    .done(function( res ) {
      if (res.status == "OK") {
        $("DIV#api_status").addClass("available");
      }
      else {
        if ("DIV#api_status").hasClass("available") {
          $("DIV#api_status").removeClass("available");
        }
      }
    });

});
