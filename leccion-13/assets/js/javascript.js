var frutas = [];
var records = document.getElementById('records');

function master(fruta) {
  this.fruta = fruta;
};

master.prototype.toHTML = function () {
  var html = '';
  html += ':) '+ this.fruta + '<br>';
  html += '<br><br>';
  return html;
}

function mergeHTML (){
  var html = '';
  for (var i=0 ;i < frutas.length; i++){
    html += frutas[i].toHTML();
  }
  return html;
}

function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}
var addFruta = document.getElementById('nuevacompra');
addFruta.onclick = function() {
  var agregar = document.getElementById('fruit').value;
  var product  = new master(agregar);
  frutas.push(product);
  printHTML(product.toHTML());
};

var printAll = document.getElementById('print');
printAll.onclick = function() {
  printHTML(mergeHTML());
}
