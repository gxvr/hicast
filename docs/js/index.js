'use strict';

jQuery('.at-banner__close').on('click', function() {
  jQuery(this)
    .parent()
    .remove();
});
