// classification.js

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
  