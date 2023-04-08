/**
 * @type {HTMLElement}
 */
let button = document.querySelector('button');

// load first qoute
getNewQuote();

// attach handler
button.onclick = getNewQuote;

async function getNewQuote() {
  let quoteEle = document.querySelector('blockquote');
  let url = 'https://api.adviceslip.com/advice?' + Math.round(Math.random() * 10000);
  let response = await fetch(url);
  if (response.ok == true) {
    let content = await response.json();
    quoteEle.textContent = content.slip.advice;
    raiseQuoteNumber();
  }
}

function raiseQuoteNumber() {
  let quoteNumberEle = document.querySelector('.quote-number');
  let quoteNumberContent = quoteNumberEle.textContent;
  let number = parseInt(quoteNumberContent.substring(1)) + 1;

  quoteNumberEle.textContent = '#' + number;
}
