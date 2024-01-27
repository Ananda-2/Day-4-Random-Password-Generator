const GenerateButton = document.getElementById("Generate");
const ShowPassword = document.getElementById("password");
const copyPasswordButton = document.getElementById("copy");

const Password = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "1234567890",
  "!@#$%^&*()_+{}|<>?/-=",
];

function GetRandom() {
  let rand1 = Math.floor(Math.random() * 4);
  let rand2 = Math.floor(Math.random() * Password[rand1].length);

  return Password[rand1][rand2];

  // return {rand1 , rand2} ;
}

let newPassword = "";

function generatePassword() {
  newPassword = "";
  for (let i = 0; i < 12; i++) {
    newPassword += GetRandom();
  }
  console.log(newPassword);

  ShowPassword.value = newPassword;
}

// function CopyPassword(){
//     // let copyText = ShowPassword.innerHTML ;
//     // navigator.clipboard.writeText(copyText);
//     ShowPassword.select() ;
//     document.execCommand
// }

const CopyPassword = async () => {
  let text = ShowPassword.value;
  document.getElementById("copied").style.display = "inline";
  setTimeout(function () {
    document.getElementById("copied").style.display = "none";
  }, 1000);

  try {
    console.log("Content copied to clipboard");
    return await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }

  // function myFunc() {
  // $('#GFG').text("Div hides after 1 second.");
  // }
};

GenerateButton.addEventListener("click", generatePassword);
copyPasswordButton.addEventListener("click", CopyPassword);
