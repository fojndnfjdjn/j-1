require("dotenv").config();
const fs = require("fs");
const axiosFunctions = require("./axios.js");
const { base64encode } = require('nodejs-base64');


const profileBaseUrl = process.env.PROFILE_BASE_URL;
let profileNumber = parseInt(process.env.PROFILE_NUMBER, 10);
console.log("profile number: " + profileNumber);
const profileArray = [];

const getData = async () => {
  try {

    console.log('profileBaseUrl', base64encode(profileBaseUrl));

    console.log('profileNumber', base64encode(profileNumber));
    // for (let profileIndex = 0; profileIndex < 3000; profileIndex++) {
    //   const profileUrl = `${profileBaseUrl}${profileNumber}`;
    //   const profileData = await axiosFunctions.simpleGetData(profileUrl);
    //   profileArray.push(profileData);
    //   profileNumber = profileNumber + 1;
    // }

    // profileNumber = profileNumber - 3;
    // fs.writeFile(
    //   "uuid.txt",
    //   "" + profileNumber,
    //   { flag: "wx" },
    //   function (err) {
    //     if (err) throw err;
    //     console.log("It's saved!");
    //   }
    // );

    // console.log(JSON.stringify(profileArray));

    // fs.writeFile("profiles.json", JSON.stringify(profileArray), (err) => {
    //   if (err) {
    //     console.error("error while writing file", err);
    //     return;
    //   } else {
    //     console.error("file  write success");
    //   }
    // });
  } catch (error) {
    console.log("catch error ", error);
  }
};

getData();
