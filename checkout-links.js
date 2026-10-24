window.CHECKOUT_LINKS = {
  "cable-knit-sweater-ivory": "",  // Cable Knit Sweater, Ivory $64.99
  "cable-knit-sweater-latte": "",  // Cable Knit Sweater, Latte $64.99
  "cable-knit-sweater-charcoal": "",  // Cable Knit Sweater, Charcoal $64.99
  "cable-knit-sweater-cranberry": "",  // Cable Knit Sweater, Cranberry $64.99
  "cable-cardigan-grey": "",  // Cable Cardigan, Grey $68.99
  "brooks-button-cardigan-mocha": "",  // Brooks Button Cardigan, Mocha $69.99
  "brooks-button-cardigan-olive": "",  // Brooks Button Cardigan, Olive $69.99
  "cori-cardigan-black": "",  // Cori Cardigan, Black $58.99
  "checkered-snap-sherpa-ivory": "",  // Checkered Snap Sherpa, Ivory $79.99
  "cashmere-honeycomb-beret-light-grey": "",  // Cashmere Honeycomb Beret, Light Grey $130
  "cashmere-chunky-ribbed-hat-chocolate": "",  // Cashmere Chunky Ribbed Hat, Chocolate $180
  "flip-top-mittens-cherry-red": "",  // Flip-Top Mittens, Cherry Red $80
  "cashmere-rib-edge-scarf-fire-red": "",  // Cashmere Rib-Edge Scarf, Fire Red $240
};
document.addEventListener('click',function(e){var b=e.target.closest('[data-sku]');if(!b)return;var u=CHECKOUT_LINKS[b.dataset.sku];if(u){location.href=u}else{alert('This piece will be available very soon. Thank you for your patience.')}});