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
  "mohair-faux-fur-pom-beanie-ivory": "",  // Mohair Faux Fur Pom Beanie, Ivory $22
  "soft-mohair-pom-beanie-burgundy": "",  // Soft Mohair Pom Beanie, Burgundy $22
  "cable-knit-faux-fur-pom-beanie-pine": "",  // Cable Knit Faux Fur Pom Beanie, Pine $18
  "chunky-cable-knit-beanie-camel": "",  // Chunky Cable Knit Beanie, Camel $30
  "boucle-rib-knit-beret-ivory": "",  // Bouclé Rib Knit Beret, Ivory $18
  "fluffy-knit-faux-fur-pom-beanie-ivory": "",  // Fluffy Knit Faux Fur Pom Beanie, Ivory $26
  "velvet-cable-knit-pom-beanie-charcoal": "",  // Velvet Cable Knit Pom Beanie, Charcoal $18
  "oversized-chunky-pom-beanie-olive": "",  // Oversized Chunky Pom Beanie, Olive $28
  "ribbed-hat-scarf-mitten-set-ivory": "",  // Ribbed Hat, Scarf & Mitten Set, Ivory $60
  "cable-knit-fingerless-gloves-ivory": "",  // Cable Knit Fingerless Gloves, Ivory $20
  "2-in-1-knit-touchscreen-gloves-black": "",  // 2-in-1 Knit Touchscreen Gloves, Black $22
  "convertible-faux-suede-mittens-camel": "",  // Convertible Faux Suede Mittens, Camel $22
  "faux-fur-trim-fingerless-mittens-mocha": "",  // Faux Fur Trim Fingerless Mittens, Mocha $26
  "plush-fleece-lined-mittens-pink": "",  // Plush Fleece-Lined Mittens, Pink $22
  "sherpa-flip-top-texting-mittens-ivory": "",  // Sherpa Flip-Top Texting Mittens, Ivory $24
  "knee-high-cable-knit-socks-ivory": "",  // Knee-High Cable Knit Socks, Ivory $16
  "faux-mohair-diamond-socks-red": "",  // Faux Mohair Diamond Socks, Red $14
  "fair-isle-crew-socks-red": "",  // Fair Isle Crew Socks, Red $14
  "thick-knit-crew-socks-oatmeal": "",  // Thick Knit Crew Socks, Oatmeal $16
  "classic-knit-crew-socks-mocha": "",  // Classic Knit Crew Socks, Mocha $22
  "lace-trim-knee-high-socks-white": "",  // Lace-Trim Knee-High Socks, White $18
  "ribbed-knit-lounge-socks-oatmeal": "",  // Ribbed Knit Lounge Socks, Oatmeal $26
  "shell-stitch-crew-socks-gray": "",  // Shell Stitch Crew Socks, Gray $26
};
document.addEventListener('click',function(e){var b=e.target.closest('[data-sku]');if(!b)return;var u=CHECKOUT_LINKS[b.dataset.sku];if(u){location.href=u}else{alert('This piece will be available very soon. Thank you for your patience.')}});