window.CHECKOUT_LINKS = {
  "cable-knit-sweater-ivory": "",  // Cable Knit Sweater, Ivory $64.99
  "cable-knit-sweater-latte": "",  // Cable Knit Sweater, Latte $64.99
  "cable-knit-sweater-charcoal": "",  // Cable Knit Sweater, Charcoal $64.99
  "cable-knit-sweater-cranberry": "",  // Cable Knit Sweater, Cranberry $64.99
  "cable-cardigan-grey": "",  // Cable Cardigan, Grey $68.99
  "brooks-button-cardigan-mocha": "",  // Brooks Button Cardigan, Mocha $69.99
  "brooks-button-cardigan-olive": "",  // Brooks Button Cardigan, Olive $69.99
  "scarlett-sweater-jacket-mocha": "",  // Scarlett Sweater Jacket, Mocha $89.99
  "erica-knit-cardigan-cream": "",  // Erica Knit Cardigan, Cream $64.99
  "cori-cardigan-black": "",  // Cori Cardigan, Black $58.99
  "luxe-skinny-ankle-pants-black": "",  // Luxe Skinny Ankle Pants, Black $58.99
  "ribbons-sweater-ivory-evergreen": "",  // Ribbons Sweater, Ivory & Evergreen $64.99
  "let-it-snow-sweater": "",  // Let It Snow Sweater $62.99
  "josie-cozy-crew-sweater-red": "",  // Josie Cozy Crew Sweater, Red $62.99
  "merry-bright-pajama-set": "",  // Merry & Bright Pajama Set $74.99
  "cozy-pajama-set-pink-pine-noel": "",  // Cozy Pajama Set, Pink Pine Noel $74.99
  "cozy-pajama-set-holiday-patchwork": "",  // Cozy Pajama Set, Holiday Patchwork $74.99
  "cozy-pajama-set-candy-cane": "",  // Cozy Pajama Set, Candy Cane $74.99
  "brooke-top-shorts-pj-set-candy-cane": "",  // Brooke Top & Shorts PJ Set, Candy Cane $64.99
  "norah-shacket-merlot-plaid": "",  // Norah Shacket, Merlot Plaid $74.99
  "plaid-babydoll-dress-dark-teal": "",  // Plaid Babydoll Dress, Dark Teal $59.99
  "dot-babydoll-dress-black": "",  // Dot Babydoll Dress, Black $59.99
  "floral-babydoll-dress-ivory": "",  // Floral Babydoll Dress, Ivory $59.99
  "checkered-snap-sherpa-ivory": "",  // Checkered Snap Sherpa, Ivory $79.99
  "sherpa-full-zip-hoodie-evergreen-plaid": "",  // Sherpa Full-Zip Hoodie, Evergreen Plaid $79.99
  "brooke-pj-set-pink-pine-noel": "",  // Brooke PJ Set, Pink Pine Noel $64.99
  "christmas-striped-cardigan": "",  // Christmas Striped Cardigan $66.99
  "josie-cozy-crew-sweater-green": "",  // Josie Cozy Crew Sweater, Green $62.99
};
document.addEventListener('click',function(e){var b=e.target.closest('[data-sku]');if(!b)return;var u=CHECKOUT_LINKS[b.dataset.sku];if(u){location.href=u}else{alert('This piece will be available very soon. Thank you for your patience.')}});