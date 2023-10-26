function isStrongPassword(password) {
    // Check the length
    if (password.length < 8) {
      return false;
    }
  
    // Check if it contains "password"
    if (password.toLowerCase().includes("password")) {
      return false;
    }
  
    // Check for at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // If all conditions are met, it's a strong password
    return true;
  }
  
  // Test cases
  console.log(isStrongPassword("Qwerty")); // false - Too short
  console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
  console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
  console.log(isStrongPassword("Qwerty123")); // true
  