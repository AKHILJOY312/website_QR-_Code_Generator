import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";


inquirer
  .prompt([
    {
      message: "Typing in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for whatever you need
   const url= answers.URL;
   var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('website_Qr_Code.png'));

fs.writeFile('url.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error("Prompt couldn't be rendered in this environment.");
    } else {
      // Something else went wrong
      console.error("An error occurred:", error);
    }
  });
