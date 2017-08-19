$(document).ready(function() {
  $('#gallery').justifiedGallery({
lastRow : 'nojustify',
rowHeight : 280,
rel: 'gallery1',
margins : 1
}).on('jg.complete', function () {
    $('.swipebox-image').swipebox();
  });
});
