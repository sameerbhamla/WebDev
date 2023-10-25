function drawTriangle(triangleSize) {

   // Your solution goes here
   for (let i = 1; i <= triangleSize; i++) {
      let row = '';
      for (let j = 0; j < i; j++) {
        row += '*';
      }
      console.log(row);
    }
   
}