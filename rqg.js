const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#Author");
const newQuoteBtn = document.querySelector("#generate");
/*const flagContainer = document.getElementById("flag-container");
const flagEl = document.createElement("span");*/
const githubBut = document.getElementById("github");

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = data.content;
            authorText.textContent = `- ${data.author}`;
        })
        .catch(error => console.log(error));
}

getQuote();

newQuoteBtn.addEventListener("click", getQuote);

/*
function setFlag(countryCode) {
  flagEl.classList.add("flag-icon", `flag-icon-${countryCode}`);
  flagContainer.appendChild(flagEl);
}
*/

githubBut.addEventListener("click", function() {
        window.location.href = "https://github.com/wahbisoussiesprit";
    });