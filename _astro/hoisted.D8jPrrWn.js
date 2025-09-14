window.$zoho = window.$zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  ready: function () {}
};

var script = document.createElement('script');
script.id = 'zsiqscript';
script.src = 'https://salesiq.zohopublic.com/widget?wc=siq6b2a8b3cf84aa8c2565596a55879b68a';
script.defer = true;

document.head.appendChild(script);
