$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val() + '?access_token=51193c7722e76d2f54d7195b187c09bc11fe5d6b';

    var template = $('template').html();

    var info = $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(function noInfo() {
      $('.container').prepend("User not found")
    }).always(function clearBox() {
      $('input.username').val('');
      });
     });
  });


