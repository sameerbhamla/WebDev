function parseScores(scoresString) {

 

    

 

   //Start the String.split() function



   var inString = scoresString.split(" ");



   



   //Return string



   return inString;



}



//Start the function buildDistributionArray()



function buildDistributionArray(scoresArray) {



   //Declare a variable x and set its value to 0



   var x = 0;



   



   //Declare a variable distributeArray for array list.



   var distributeArray = new Array(5);



   //Set the values.



   distributeArray[0] = 0;



   distributeArray[1] = 0;



   distributeArray[2] = 0;



   distributeArray[3] = 0;



   distributeArray[4] = 0;



   



   //Start a while loop till array length



   while (x < scoresArray.length) {



       



       //Check if the array length lies between 80 and 89.



       if (scoresArray[x] >= 80 && scoresArray[x] <=89)



       



       {



           //Increment index '1' value



           distributeArray[1]++;



       }



       



       //Check if the array length greater than 90.



       else if (scoresArray[x] >= 90) {



           //Increment index '0' value    



           distributeArray[0]++;



       }



       //Check if the array length lies between 70 and 79.



       else if(scoresArray[x] >= 70 && scoresArray[x] <=79) {



           //Increment index '2' value



           distributeArray[2]++;



       }



       



       //Check if the array length lies between 60 and 69.



       else if (scoresArray[x] >= 60 && scoresArray[x] <=69)



       {



           //Increment index '3' value



           distributeArray[3]++;



       }



        



       //Check if the array length lies between 0 and 59.



       else if (scoresArray[x] <= 59 && scoresArray[x]>0)



       {



           //Increment index '2' value



           distributeArray[4]++;



       }



       



       //Increment the value of x.



       x++;



   }    



   



   //Retun distributeArray



   return distributeArray;



}



//Start the function setTableContent()



function setTableContent(userInput) {



   //Declare a variable and paarse the ID 'distributionTable' of HTML file.



   var myTable = document.getElementById("distributionTable");



   



   



   //Check the userIput length greater than 0.



   if (userInput.length>0) {



       //Declare a variable parsedScores and parse the userInput.



       var parsedScores = parseScores(userInput);



       



       //Declare a variable buildArray and parse parsedScores in the function buildDistributionArray();



       var buildArray = buildDistributionArray(parsedScores);



   



       //Declare variable for rows creation in the table and insert row values.



       var row = myTable.insertRow(0);



       var row2 = myTable.insertRow(1);



       var row3 = myTable.insertRow(2);



       



       //Declare variables for cell and insert cell data into the rows.



       var cell1 = row2.insertCell(0);



       var cell2 = row2.insertCell(1);



       var cell3 = row2.insertCell(2);



       var cell4 = row2.insertCell(3);



       var cell5 = row2.insertCell(4);



       //Parse cell data in the HTML page.



       cell1.innerHTML = "A";



       cell2.innerHTML = "B";



       cell3.innerHTML = "C";



       cell4.innerHTML = "D";



       cell5.innerHTML = "F";



       //Declare a variable graphValueArray for grapgh values.



       var graphValueArray = [];



       



       //Declare a variable occuranceArray for the occurance of the graph.



       var occuranceArray = [];



       //Start a loop for populating graph values with proper styling and occurance values.



       for (index = 0; index < 5; index++) {        



           // Display the graph-occurence



           occuranceArray[index] = row3.insertCell(index);



           occuranceArray[index].innerHTML = buildArray[index];



           //Add the corresponding cell value for graph



           graphValueArray[index] = row.insertCell(index);



           



           //Declare a variable styleClass.



           var styleClass = "bar"+index;



           



           //Declare a heightValue for the heigt of the graphs



           var heightValue = (buildArray[index] * 10) + "px";



           //Adding DIV element via innerHTML property



           graphValueArray[index].innerHTML = "<div style='height:"+ heightValue+"' class='"+styleClass+"'></div>";



       }



   }



   //No graph to be displayed.



   else{



   



       //Inset null in the table.



       var emptyRow = myTable.insertRow(0);



       



       //Display a message



       emptyRow.innerHTML = "No graph to display";



   }



  



}



//Start the function bodyLoaded().



function bodyLoaded() {



   



   //setTableContent("45 40 8 8 6 9 0 9");



   setTableContent("45 78 98 83 86 99 90 59");



}