function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
  
    for (let num of numbers) {
      if (num % 2 === 0) {
        evenNums.push(num);
      } else {
        oddNums.push(num);
      }
    }
  
    evenNums.sort(function(a, b) {
      return a - b;
    });
  
    oddNums.sort(function(a, b) {
      return a - b;
    });
  
    console.log("Even numbers:");
    if (evenNums.length > 0) {
      for (let even of evenNums) {
        console.log(even);
      }
    } else {
      console.log("None");
    }
  
    console.log("Odd numbers:");
    if (oddNums.length > 0) {
      for (let odd of oddNums) {
        console.log(odd);
      }
    } else {
      console.log("None");
    }
  }
  
  // Test the function
  let nums1 = [4, 2, 9, 1, 8];
  divideArray(nums1);
  
  let nums2 = [4, 2, 8];
  divideArray(nums2);
  