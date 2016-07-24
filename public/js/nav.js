(function() {
  'use strict';

  $('.button-collapse').sideNav();

  $.getJSON('/session')
    .done((loggedIn) => {
      const $firstNavItems = $('.firstNavItem');
      const $secondNavItems = $('.secondNavItem');

      if (loggedIn) {
        const $favorites = $('<a>')
          .attr('href', '/favorites.html')
          .text('Favorites');

        const $logout = $('<a>').text('Log out');

        $logout.click((event) => {
          event.preventDefault();

          $.ajax({ url: '/session', type: 'DELETE' })
            .done(() => {
              window.location.href = '/login.html';
            })
            .fail(() => {
              Materialize.toast('Unable to log out. Please try again.', 3000);
            });
        });

        $firstNavItems.append($favorites);
        $secondNavItems.append($logout);
      }
      else {
        const $signup = $('<a>')
          .attr('href', '/signup.html')
          .text('Sign up');

        const $login = $('<a>')
          .attr('href', '/login.html')
          .text('Log in');

        $firstNavItems.append($signup);
        $secondNavItems.append($login);
      }
    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    });

  window.QUERY_PARAMETERS = {};
  if (window.location.search) {
    // strip the leading ? on the query parameters string
    window.location.search.substr(1).split('&').forEach((paramStr) => {
      const param = paramStr.split('=');

      window.QUERY_PARAMETERS[param[0]] = param[1];
    });
  }
})();
