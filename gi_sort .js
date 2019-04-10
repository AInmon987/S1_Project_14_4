"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 4

   Author: Austin Inmon
   Date:   4.08.19
   
   Filename: gi_sort.js
   
   Global Variables:
   tableData
      An 2-dimensional array of the data found in the body of the web table
      
   dataCategories
      An array of the column titles found the head of the web table
      
   sortIndex
      The index number of the column by which the web table should be
      sorted where 0 = 1st column, 1 = 2nd column, etc.
      
   sortDirection
      A value indicating direction of the sorting where a value of 1 sorts 
      the data in ascending order and a value of -1 sorts the data in descending order
	
   
   
   Functions List:   
   defineDataArray()
      Extracts values from the body of the web table and stores them in the
      tableData array
      
   writeTableData()
      Writes the sorted data into the table rows and cells       
      
   defineColumns()
      Extracts values form the column heads of the web table and stores 
      them in the dataCategories array; also sets up the onclick event
      handlers for the column heads so that the table can be sorted by
      clicking a table heading cell.
           
   columnSort(e)
      Event handler function that sorts the table data when a column
      heading is clicked  
   
   dataSort2D(a, b)
      Compare function used to sort numeric and alphabetical data from
      a 2-dimensional array 
    

*/
//Store data in the web table 
var tableData = [];
//store the text of the column headings
var dataCategories = [];
//first table column
var sortIndex = 0;
//whether the column is aceding or decending.
var sortDirection = 1;
//anyomous funtion that is calling the different functions.
window.addEventListener("load", function () {
      defineDataArray();
      tableData();
      defineColumns();
})
      //populate the tableData array as a two-dimensional array with values taken from rows and cells of the web table body.
function defineDataArray() {
      //getting all content from the html file that has the selector.
      var tableRows = document.querySelectorAll("table.sortable tbody tr");
      //looping through table rows.
      for (var i = 0; i < tableRows.length; i++) {
      //putting rows in row cells. 
            var rowCells = tableRows[i].children;
      //creating an new array.
            var rowValues = new Array(rowCells.length);
      //looping theough the content of thew rowcells var. 
            for (var a = 0; a < rowCells.length; a++) {
                  rowValues[a] = rowCells[a].textContent;

            }
      
      tableData.push(rowValues);
      }
      
      tableData.sort(dataSort2D);
}
//create the table body based on the sorted data.
function writeTableData() {
      var newTableBody = document.createElement("tbody");

      for (var i = 0; i < array.length; i++) {


      }

}
//set up the appearence and behavior of the column headings.
function defineColumns() {
      //Creating a style page and adding it to the html document. 
      var embedStyle = document.createElement("style");
      //Puting the stylesheet in the html head.
      document.head.appendChild(embedStyle);
      //Adding a new style to the embed style page
      embedStyle.instertRule(
            "table.sortable thead tr th {\
                  cursor: pointer;\
            }", 0);
      //Adding a new style to the embed style page
      embedStyle.insertRule(
            "table.sortable thead tr th: :after {\
                  content: '\\0a0';\
                  font-family: monospace;\
                  margin-left: 5px;\
            }", 1);
      //Adding a new style to the embed style page
      embedStyle.insertRule(
            "table.sortable thead tr th:nth-of-type()1::after{\
                  content: '\\25b2';\
            }", 2);
      //getting all content from the html file that has the selector.
      var theads = document.querySelectorAll("table.sortable thead th");
      //looping throught the th elements in the table headings. 
      for (var i = 0; i < theads.length; i++) {
            var text = theads[i].innerHTML;

            dataCategories.push(text);

            theads[i].addEventListener("click", columnSort);

      }
}
      //sort the web table based on the column heading that the user clicked.
      function columnSort(e) {
      //determines which column is clicked.
      var columnText = e.target.textcontent;
      //Retreive the index number of the column.
      var columnIndex = dataCategories[i].indexOf(columnText);
      //testing to see if columnindex is the same thing as sortIndex.
      if (columnIndex === sortIndex) {
          sortDirection *= -1;
      //sortindex is equal to columnindex. 
      } else {
            sortIndex = columnIndex;
      }
      //move he icon into the column heading cell.
      var columnNumber = columnIndex + 1;
      //delelte the last style rule that is in the embedstyle stylesheet.
      var columnStyles = document.styleSheets[document.styleSheets.length - 1];
      //displaying up arrow to show ascending.
      if (sortDirection === 1) {
            columnStyles.insertRule(
                  "table.sortable thead tr th:nth-of-type" + columnNumber + "::after {\
                        content: '\\25b2';\
                  }", 1);
      //displaying down arrow to show descending.
      } else {
            columnStyles.insertRule(
                  "table.sortable thead tr th:nth-of-type" + columnNumber + "::after {\
                        content: '\\25bc';\
                  }", 1);
      }
      //using thedataSort2D as the compared function.
      tableData.sort(dataSort2D);
//Calling the writeTableData function. 
      writeTableData();
}




function dataSort2D(a, b) {
      if (isNaN(parseFloat(a[sortIndex])) === false) {
            return (a[sortIndex] - b[sortIndex]) * sortDirection;
      } else {
            var astring = a[sortIndex].toLowerCase();
            var bstring = b[sortIndex].toLowerCase();

            if (bstring > astring) return -sortDirection;
            if (bstring < astring) return sortDirection;
            return 0;
      }
}