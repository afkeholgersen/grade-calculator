// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function addRow(tableID){
  var table= document.getElementByID(tableID);
  var rowCount=table.rows.length;


  var row=table.insertRow(rowCount);

  var name=row.insertCell(0);
  var nametext= "Activity ".concat(rowCount);

  var short=row.insertCell(1);
  var shorttext= "A ".concat(rowCount);


  var weight=row.insertCell(2);
  var grade=row.insertCell(3);
  var percent=row.insertCell(4);
}
function
