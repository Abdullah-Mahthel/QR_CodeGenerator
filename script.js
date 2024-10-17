// Select the HTML element with the id "generateBtn" and add a click event listener
document.getElementById('generateBtn').addEventListener('click', () => {
    // Retrieve the value from the input field with the id "urlInput" and trim any whitespace
    const url = document.getElementById('urlInput').value.trim();
    
    // Check if the url is not empty
    if (url) {
      // If the url is not empty, call the generateQRCode function and pass the url as an argument
      generateQRCode(url);
    } else {
      // If the url is empty, display an alert prompting the user to enter a URL
      alert('Please enter a URL');
    }
  });
  
  
 // Define a new function called generateQRCode that takes a single argument url
  function generateQRCode(url) {
    
    
    // Create a new QR code object using the QRCode constructor and pass in an object with the following properties:

    const qrcode = new QRCode(document.getElementById("qrcode"), {
     //- text: the URL to be encoded in the QR code
      text: url,
     //- width: the width of the QR code in pixels
      width: 200,
     //- height: the height of the QR code in pixels
      height: 200,
//   - colorDark: the color of the dark modules in the QR code
      colorDark: "#000000",
//   - colorLight: the color of the light modules in the QR code
      colorLight: "#ffffff",
//   - correctLevel: the error correction level of the QR code
      correctLevel: QRCode.CorrectLevel.H
    });
  }