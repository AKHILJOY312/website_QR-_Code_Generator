# QR Code Generator
This project is a simple QR Code generator built using Node.js. It takes a URL as input, generates a QR code for that URL, and saves both the QR code image and the URL in separate files.
## Features
- Prompts the user to enter a URL.
- Generates a QR code image for the URL.
- Saves the QR code as website_Qr_Code.png.
- Saves the URL as url.txt.
## Prerequisites
- Node.js installed on your system.
- Basic knowledge of Node.js and command-line tools.
## Installation
1.	Clone the repository or download the source code.
   ```bash
   git clone https://github.com/AKHILJOY312/website_QR_Code_Generator.gitcd website_QR_Code_Generator 
 ```

2.	Install the required dependencies:
 ```bash
npm install
 ```


## Usage
1.	Run the script using Node.js:
    ```bash
  	node generatorQr.js
     ```
3.	Enter the URL when prompted:
   ```bash
? Typing in your URL: https://www.google.com/
```
3.	The QR code image will be saved as website_Qr_Code.png in the current directory.
4.	The URL will be saved in a text file named url.txt.
## Dependencies
- inquirer: For user input.
- qr-image: For generating QR codes.
## File Structure
qr-code-generator/
|-- generatorQr.js      # Main script

|-- website_Qr_Code.png # Generated QR code image (created after running the script)

|-- url.txt             # File containing the entered URL (created after running the script)

|-- package.json        # Node.js configuration and dependencies

## Example Output
- QR Code Image: A QR code image file qr_Num.png containing the encoded URL.

  
 ![image](website_Qr_Code.png)

 
- URL File: A text file url.txt with the entered URL.
 
 
## Contributing
Feel free to fork this repository and submit pull requests for new features, bug fixes, or enhancements.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
## Acknowledgements
-	Inspired by the simplicity of Node.js and the utility of QR codes.
________________________________________
Author
AJ312

