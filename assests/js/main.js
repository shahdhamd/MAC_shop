$('.slickItem').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});






var input = document.getElementById('Searchinput');
var products = [{
  name: 'LIP PENCIL', prePrice: '24.00', newPrice: '16.80', desc: "Creamy, Professional, Artistry", image1: 'pencel.png', image2: 'pencel1.jpg', categ: 'face'
},
{ name: 'Squall Goals Eye Shadow Palette ', prePrice: '33.00', newPrice: '23.00', desc: "Creamy, Professional, Artistry", image1: '2.png', image2: '22.jpg', categ: 'eye' },
{ name: 'Mega-Bold Matte Colour', prePrice: '20.00', newPrice: ' 16.00', desc: "Creamy, Professional, Artistry", image1: 'penc.png', image2: 'penc2.png', categ: 'face' },
{ name: 'Lipglass', prePrice: '16.80', newPrice: '10.00', desc: "Creamy, Professional, Artistry", image1: '4.png', image2: '44.png', categ: 'face' },
{ name: 'Eye Shadow', prePrice: '34.80', newPrice: '30.00', desc: "Creamy, Professional, Artistry", image1: '5.png', image2: '55.png', categ: 'eye' },
{ name: 'Fix Plus Foundation', prePrice: '42.80', newPrice: '29.00', desc: "Creamy, Professional, Artistry", image1: '6 (1).png', image2: '6 (2).png', categ: 'face' },
{ name: 'LARGE POWDER BRUSH', prePrice: '45.80', newPrice: '35.10', desc: "Creamy, Professional, Artistry", image1: '14.png', image2: '144.png', categ: 'brush' },

{ name: 'All-Over Face Pen', prePrice: '35.80', newPrice: '24.00', desc: "Creamy, Professional, Artistry", image1: '7 (1).png', image2: '7 (2).png', categ: 'face' },
{ name: 'Lipglass', prePrice: '23.80', newPrice: '16.10', desc: "Creamy, Professional, Artistry", image1: '8 (1).png', image2: '8 (2).png', categ: 'face' },
{ name: ' EYE SHADOW', prePrice: '40.80', newPrice: '35.10', desc: "Creamy, Professional, Artistry", image1: '15.png', image2: '155.png', categ: 'eye' },

{ name: 'Thermo-Status Kit', prePrice: '35.80', newPrice: '24.10', desc: "Creamy, Professional, Artistry", image1: '99.png', image2: '9.png', categ: 'face' },
{ name: 'FIBRE FACE BRUSH', prePrice: '42.80', newPrice: '33.10', desc: "Creamy, Professional, Artistry", image1: '13.png', image2: '133.png', categ: 'brush' },

{ name: 'CHROMALINE', prePrice: '22.80', newPrice: '15.40', desc: "Creamy, Professional, Artistry", image1: '10.png', image2: '100.png', categ: 'face' },
{ name: 'SPARKLER EYESHADOW', prePrice: '25.80', newPrice: '20.10', desc: "Creamy, Professional, Artistry", image1: '11.png', image2: '111.jpg', categ: 'eye' },
{ name: 'UP FOR EVERYTHING ', prePrice: '27.80', newPrice: '18.10', desc: "Creamy, Professional, Artistry", image1: '12.png', image2: '122.png', categ: 'eye' },


]
var h2Search = document.getElementById('h2Search')
var innerProduct = document.getElementById('innerProduct')
function display() {
  var test = '';
  for (var i = 0; i < products.length; i++) {
    test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp"  data-wow-offset="300">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p>$${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`
  }
  innerProduct.innerHTML = test;
}
display();

// -------------------search----------------

function search(e) {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(e.toLowerCase()))
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp"  data-wow-offset="300">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;
  if (test == "") {
    h2Search.innerHTML = `<h4 class="text-center">No search results found for '${input.value}'</h4>`
  } else if (input.value == '') {
    h2Search.innerHTML = '';
  } else {
    h2Search.innerHTML = `<h4 class="text-center">Search Results For ${input.value} </h4>`

  }

}



//------------------------ filter price --------------------- //
var prcie1 = document.getElementById('prcie1');




prcie1.addEventListener('click', (e) => {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].newPrice <= 15)
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;
  if (test == "") {
    h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s" >No search results found for price $10-$15'</h4>`
  }
  else {
    h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s" >Search Results For  price $10-$15 </h4>`

  }
});

var prcie2 = document.getElementById('prcie2');


prcie2.addEventListener('click', (e) => {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].newPrice > 15 && products[i].newPrice <= 30)
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;
  if (test == "") {
    h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">No search results found for price $16-$30'</h4>`
  } else {
    h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">Search Results For  price $16-$30</h4>`

  }
});

var prcie3 = document.getElementById('prcie3');

prcie3.addEventListener('click', (e) => {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].newPrice > 30)
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;
  if (test == "") {
    h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">No search results found for price more than $30'</h4>`
  } else {
    h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">Search Results For price more than $30</h4>`

  }
});



//------------------------ filter category --------------------- //

var pric11 = document.getElementById('pric11');


pric11.addEventListener('click', (e) => {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].categ == 'eye')
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;

  h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">Search Results For price  product eyes</h4>`

});


var pric22 = document.getElementById('pric22');


pric22.addEventListener('click', (e) => {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].categ == 'face')
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp">
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;

  h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">Search Results For price  product face</h4>`


});

var pric33 = document.getElementById('pric33')
pric33.addEventListener('click', (e) => {
  var test = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].categ == 'brush')
      test += `
    <div class="col-md-3 col-sm-4  m-3 cardd wow fadeInUp"  >
    <div class="d-flex first_div">
        <div class="product-rating">
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star fill bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
            <i class="fa-regular fa-star bg-white"></i>
        </div>
        <span class="fs-6">(596)</span>
        <button class="btn seller fs-6">BEST SELLER</button>
    </div>
    <div class="imageDiv">
        <img src="assests/image/${products[i].image1}" width="100%" id="image"  />
        <img src="assests/image/${products[i].image2}" width="100%" id="image22"  />
    </div>
    <div class="sale_body">
        <p class="fw-bold">${products[i].name}</p>

        <div class="product-price">
            <p> ${products[i].newPrice}</p>
            <del class="product-old-price">${products[i].prePrice}</del>
        </div>
        <div class="">
            <span class="m d-block">${products[i].desc}</span>
        <button class="btn mt-2 bg-dark">ADD TO BAG</button>
        </div>
        
    </div>
</div>`;
  }
  innerProduct.innerHTML = test;

  h2Search.innerHTML = `<h4 class="text-center wow fadeIn"  data-wow-duration="2s">Search Results For price  product Brush</h4>`


});