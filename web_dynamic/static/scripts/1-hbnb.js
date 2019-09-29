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
});
