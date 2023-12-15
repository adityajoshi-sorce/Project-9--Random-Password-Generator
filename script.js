const passwordBox = document.querySelector("#Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "~!@#$%^&*()-_+={}][|`,.;:'</=>";

const allChar = upperCase + lowerCase + numbers + specialChar;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    // Select the text in the password box
    passwordBox.select();

    try {
        // Attempt to copy the selected text to the clipboard using the Clipboard API
        document.execCommand('copy');
        console.log('Password copied to clipboard');
    } catch (err) {
        console.error('Unable to copy password to clipboard', err);
    }

    // Deselect the text
    window.getSelection().removeAllRanges();
}
