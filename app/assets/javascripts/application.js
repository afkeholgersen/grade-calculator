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

function addRow(){
  var table= document.getElementById("gradetable");

  var rowCount=table.rows.length;
       console.log(rowCount);
   var row = table.insertRow(rowCount).outerHTML="<tr id='row"+rowCount+"'><td id='Activity"+rowCount+"'>Activity "+rowCount+"</td><td id='a"+rowCount+"'>A"+rowCount+"</td><td id='Weight"+rowCount+"'><input type='number' id='weightInput"+rowCount+"' class='num' ></td><td><input type='number' id='gradeNum"+rowCount+"' name='gradeNum"+rowCount+"' class='num' onchange='calculatePercent("+rowCount+")'> <p>/</p> <input type='number' name='gradeDen"+rowCount+"' id='gradeDen"+rowCount+"' class='num' onchange='calculatePercent("+rowCount+")'></td><td id='percent"+rowCount+"'></td></tr>";
}
function deleteRow(){
  var table=document.getElementById("gradetable");
  var rowCount=table.rows.length;
    console.log(rowCount);
  if (rowCount<3){
    alert("Must have at least one row in the table. ");
  }
  else{
      table.deleteRow(rowCount-1);
  }
}
function calculatePercent(rowNumber){
  var id1='gradeNum'+rowNumber; 
  var numerator=document.getElementById(id1).value;
    console.log("id1: "+ id1);
    console.log("numerator: "+numerator);
  var id2='gradeDen'+rowNumber;
  var denominator=document.getElementById(id2).value;
      console.log("denominator: "+denominator);

  var id3='percent'+rowNumber;
  if (denominator<=0 ){
        document.getElementById(id3).innerHTML="Fix grade values for percent calculation."
  }
  else  {

    var result= (numerator/denominator )*100;
    document.getElementById(id3).innerHTML=result+'%';
  }
}

function meanCalculation(){

  var table= document.getElementById('gradetable');


  var rowCount=table.rows.length;

  var result=0;
  var numberGradesIncluded=0;
  for(var i=1; i<rowCount; i++){
    calculatePercent(i);
    var id1='gradeNum'+i;
    var numerator=document.getElementById(id1).value;
      console.log("numerator: "+numerator+"");
    var id2='gradeDen'+i;
    var denominator=document.getElementById(id2).value;
      console.log("denominator: "+denominator);
    var id3='percent'+i;


    if ( !denominator>0  || !numerator>0 ){
        document.getElementById(id3).innerHTML="Not Complete: Not included in mean calculation."
      }

    else  {
      console.log("else loop: "+i);
      var rowgrade=numerator/denominator;
      result+= rowgrade;
      numberGradesIncluded++;
    }
  }
    console.log("result: "+result + "numberGradesIncluded: "+numberGradesIncluded);
  result=result/numberGradesIncluded;
  if (! result > 0 ){
        document.getElementById("result").innerHTML="Error calculating mean. Fix before proceeding."
  }
  else{
    result=Math.round(result*1000)/1000;
    document.getElementById("result").innerHTML="Mean: "+result;
  }

}

function weightedCalculation(){
  var table= document.getElementById('gradetable');

  var rowCount=table.rows.length;

  var sumScores=0;
  var sumWeight=0;
  for(var i=1; i<rowCount; i++){

    var id1='gradeNum'+i;
    var numerator=document.getElementById(id1).value;
      console.log("numerator: "+numerator+"");
    var id2='gradeDen'+i;
    var denominator=document.getElementById(id2).value;
      console.log("denominator: "+denominator);
    var id3='percent'+i;
    var id4='weightInput'+i;
    var weight=document.getElementById(id4).value;

    if ( !denominator>0  || !numerator>0  || !weight>0 ){
        document.getElementById(id3).innerHTML="Not Complete: Not included in weight calculation."
      }

    else  {

      var rowgrade=numerator/denominator;
      console.log("else loop: "+i+" rowgrade: "+rowgrade);
      var weightedrowgrade=rowgrade*weight;
      sumScores +=weightedrowgrade;
      sumWeight +=parseInt( weight);
    }
  }
    console.log("sum scores: "+sumScores +" sum weights: "+sumWeight);
  if (sumWeight<=0){
      document.getElementById("result").innerHTML="Error calculating weighted grade. Fix before proceeding. "
  }
  else{
    var result=sumScores/sumWeight;
    result=Math.round(result*1000)/1000;
    document.getElementById("result").innerHTML="Weighted Grade: "+result;
  }

}
