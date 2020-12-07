$(function() {

var productDescription = [
  {'url': 'images/sock-1.png', 'title': 'prod-title-1', 'description': 'Regular SOCK have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem'},
  {'url': 'images/hat-2.png', 'title': 'prod-title-2', 'description': 'Regular HAT have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem'},
  {'url': 'images/bag-3.png', 'title': 'prod-title-3', 'description': 'Regular BAG have no present inside Lorem Ipsum is simply dumm y text of the printing and types etting industry. Lorem'}
]

const imageTemplate = ({ url, title, description }) => `
  <div class="image">
  	<img src="${url}" />
  </div>
`;

const detailsTemplate = ({ url, title, description }) => `
  <div class="text-block">
		<span class="window-header">${title}</span>
    <p id="desc" class="product-description">${description}</p>
  </div>  
    <div class="zoomed-image">
    	<img src="${url}" width="130" height="auto" />
    </div>
  
`;

$('.images-container').html(productDescription.map(imageTemplate).join(''));

$('.image').on('click', function() {
  var index = $('.image').index(this);
  $('.desc-wrap').html(detailsTemplate(productDescription[index]));
  $('.desc-wrap').animate({right: '-=1000'}, 0, function () {
    $('.desc-wrap').animate({right: '+=1000'}, 500)
  });
    $('.image').removeClass('chosen-image');
    $(this).addClass('chosen-image');
})


});

