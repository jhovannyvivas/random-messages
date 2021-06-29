const messages = [
    "oscar",
    "nicoali",
    "yesica",
    "liliana",
    "carolina",
    "juan"
];

const randomMSg = () => {

    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMSg};