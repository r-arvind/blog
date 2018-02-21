function Copy() {
    var url = document.getElementById('url').getAttribute('href');
    var link = $('<input id="ass">').val(url).appendTo('body').select()
    document.execCommand('copy')
    $('#ass').remove();
  } 