// content.js

// Include the other JavaScript files


console.log("classification.js started");

// Define the classifyText function as before
async function classifyText(text) {
    try {
      const apiKey = 'IQcVwtypZuVL';
      const username = '123dormammu321'; // Replace with your username
      const classifierName = 'Topics'; // Replace with your classifier name
      const language = 'en'; // Replace with the desired language code
  
      const apiUrl = `https://api.uclassify.com/v1/${username}/${classifierName}/${language}/classify/?readKey=${apiKey}&text=${text}`;
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const classification = await response.json();
      return classification.Education;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


/////////////////////////////////////////////
  


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
    // Create the textbox initially
    createTextbox();
  
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
  




///////////////////////////////////////////////
// Your existing content script code here
console.log("message from content.js");

var oldTitle="";

// Add an event listener for mousemove on the document body
document.body.addEventListener("mousemove", async function(event) {
  // Check if the mouse is over an ancestor <div> element with the ID "content"
  var contentDiv = event.target.closest('div#content');
  // console.log("ancestor found:",contentDiv);
  if (contentDiv) {
    // Find the <yt-formatted-string> element with the ID "video-title" within contentDiv
    var videoTitleElement = contentDiv.querySelector('div#details yt-formatted-string#video-title');

    if (videoTitleElement) {
      // Get the text content of the <yt-formatted-string> element (the video title)
      var videoTitle = videoTitleElement.textContent;

      if(videoTitle == oldTitle){
        return;  // not considering same titles
      }
      // Log the video title
      console.log("Video Title:", videoTitle);
      
      oldTitle = videoTitle;

      // Show the dialogue box near the cursor
      //showDialogueBox(event, videoTitle);
      updateTextboxPosition(event);
      document.getElementById("textbox").textContent=videoTitle;
      showTextbox();     
      

      //Call the classifyText function to classify the text
      const classificationResult = await classifyText(videoTitle);
      var edu = "\nNot Recommended";
      if(classificationResult>=0.5) edu = "\nWatch this";
      document.getElementById("textbox").textContent=document.getElementById("textbox").textContent+edu;

      // // Log the classification result
      // console.log("Education Probability:", classificationResult);
    }
  }
   else {
    // console.log("parent doesnt exist");
    updateTextboxPosition(event);
    // // Hide the dialogue box when not hovering over a valid element
    // document.getElementById("textbox").style.display = "none";
  }
});

