// 🎯 Part 2: JavaScript Functions with Parameters & Return Values

// Function to add two numbers and return the result
function addNumbers(a, b) {
  return a + b;
}

// Function to display the result in the DOM
function showSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = addNumbers(num1, num2); // Using return value
  document.getElementById("result").textContent = `Sum: ${result}`;
}

// Demonstrating scope
let globalMessage = "This is a global variable";

function scopeExample() {
  let localMessage = "This is a local variable";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible
}

scopeExample();
// console.log(localMessage); // ❌ Would throw an error

// 🎬 Part 3: Triggering CSS Animation with JavaScript

function triggerAnimation() {
  const box = document.getElementById("animateBox");
  box.classList.remove("animate"); // Reset animation
  void box.offsetWidth; // Force reflow
  box.classList.add("animate"); // Trigger animation
}