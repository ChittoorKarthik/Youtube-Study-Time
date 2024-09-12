// textbox.js
console.log("textbox.js started");

// Function to create and append the textbox
function createTextbox() {
    const textbox = document.createElement("div");
    textbox.id = "textbox";
    textbox.style.position = "fixed"; // Set position to "fixed" for relative positioning
    textbox.style.backgroundColor = "rgb(255, 96, 96)";
    textbox.style.border = "1px solid rgb(22, 209, 222)";
    textbox.style.padding = "5px";
    textbox.style.display = "none"; // Initially hide the textbox
    textbox.textContent = "Random Text this is";
    textbox.style.zIndex = "9999";
    document.body.appendChild(textbox);
  }
  
  // Function to update the textbox position based on mouse movement
  function updateTextboxPosition(e) {
    const textbox = document.getElementById("textbox");
    if (textbox) {
      // You can adjust these values to set the desired relative position
      const offsetX = 10;
      const offsetY = 10;
  
      // Calculate the position relative to the cursor
      const left = e.clientX + offsetX + "px";
      const top = e.clientY + offsetY + "px";
  
      textbox.style.left = left;
      textbox.style.top = top;
    }
  }
  
  // Function to show the textbox
  function showTextbox() {
    const textbox = document.getElementById("textbox");
    if (textbox) {
      textbox.style.display = "block";
    }
  }
  
  // Create the textbox initially
  createTextbox();
  
  // Add an event listener for mousemove to update the textbox position
  document.body.addEventListener("mousemove", updateTextboxPosition);
  