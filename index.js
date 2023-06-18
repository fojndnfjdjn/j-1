require("dotenv").config();
const fs = require("fs");
const axiosFunctions = require("./axios.js");

const profileBaseUrl = process.env.PROFILE_BASE_URL;
let profileNumber = parseInt(process.env.PROFILE_NUMBER, 10);
const profileArray = [];

const getData = async () => {
  try {
    for (let profileIndex = 0; profileIndex < 5000; profileIndex++) {
      const profileUrl = `${profileBaseUrl}${profileNumber}`;
      const profileData = await axiosFunctions.simpleGetData(profileUrl);
      profileArray.push(profileData);
      profileNumber = profileNumber + 1;
    }

    fs.writeFile("profiles.json", JSON.stringify(profileArray), (err) => {
      if (err) {
        console.error("error while writing file", err);
        return;
      } else {
        console.error("file  write success");
      }
    });
  } catch (error) {
    console.log("catch error ", error);
  }
};

getData();