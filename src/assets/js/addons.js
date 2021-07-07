const jQuery = require("jquery");
(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#menu").prettyMenu({
      mobile: "1024",
      pushContent: false,
      colorScheme: "white",
      submenuAnimation: "fadeInDown",
      hoverColor: "transparent",
      shadow: false,
      showDividers: false,
      closeOnClick: true,
      fixed: false,

      mobileBackground: false,
    });
  });
})(jQuery);
