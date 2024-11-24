// Default language
let currentLanguage = 'nl';

// Language content for Dutch and English
const content = {
    nl: {
        welcomeTitle: "Welkom bij Bakkerij Draai!",
        welcomeDescription: "Bij Bakkerij Draai maken we de lekkerste broden en gebak. Kom snel langs en proef het zelf!",
        buttonText: "Klik hier voor een verrassing!",
        footerText: "© 2024 Bakkerij Draai. Alle rechten voorbehouden.",
        message: "Bedankt voor je bezoek! Kom snel terug voor meer lekkers."
    },
    en: {
        welcomeTitle: "Welcome to Bakkerij Draai!",
        welcomeDescription: "At Bakkerij Draai, we make the best breads and pastries. Come by and taste for yourself!",
        buttonText: "Click here for a surprise!",
        footerText: "© 2024 Bakkerij Draai. All rights reserved.",
        message: "Thanks for visiting! Come back soon for more delicious treats."
    }
};

// Function to switch languages
function switchLanguage(lang) {
    currentLanguage = lang;

    // Change the text content based on selected language
    document.getElementById('welcome-title').innerText = content[lang].welcomeTitle;
    document.getElementById('welcome-description').innerText = content[lang].welcomeDescription;
    document.getElementById('button-text').innerText = content[lang].buttonText;
    document.getElementById('footer-text').innerText = content[lang].footerText;
    document.getElementById('message').innerText = ''; // Reset message
}

// Function to show a message when button is clicked
function showMessage() {
    document.getElementById('message').innerText = content[currentLanguage].message;
}
