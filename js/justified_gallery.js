/**
 * @file
 * This script remove the unnecessary wrappers around the image.
 * and load the justifiedGallery plugin
 * !!! Still need to integrate passing value from Glightbox settings to here
 * !!! The Justified Gallery settings are still hard coded.
 */

(function($) {
  $(document).ready(function() {
    $(".glightbox").unwrap();
    $(".glightbox").unwrap();
    $(".glightbox").parent().justifiedGallery({
      rowHeight : 250,
      lastRow : 'nojustify',
      margins : 2
    });
  });

})(jQuery);
