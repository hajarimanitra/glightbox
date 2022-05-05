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
