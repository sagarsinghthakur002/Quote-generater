const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");
const twiter = document.getElementById("instagarm-button")

const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author
    console.log(data);    
}

function tweet () {
    window.open("https://twitter.com/intent/tweet?text=Hello%20world")

}

button.addEventListener("click", () => {
    getquote(api_url);
});

twiter.addEventListener("click", () => {
    tweet();
    });
    
