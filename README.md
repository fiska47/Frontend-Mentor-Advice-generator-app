# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

<img src="images\my_solution.png" style="zoom:50%;" />

### Links

- Solution URL: https://www.frontendmentor.io/solutions/advice-generator-app-solution-FAcrxpHmuE
- Live Site URL: https://fiska47.github.io/Frontend-Mentor-Advice-generator-app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- AJAX
- JS ES6
- Accessibility principles

### What I learned

- In HTML, I can use <picture> when I want to make an image change size according to screen width.

  ```html
     <picture>
        <source media="(max-width: 500px)" srcset="images/pattern-divider-mobile.svg" />
        <img src="images/pattern-divider-desktop.svg" alt="" aria-hidden="true">
      </picture>
  ```

- In JS, I need to use fetch function to I work with APIs. To display the response correctly, my function has to be asynchronic - I have to write "async" in front of "function".

  ```javascript
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
  ```

- To use variables in CSS (CSS custom properties).

  ```css
  :root {
    --accent-color: hsl(150, 100%, 66%);
    --accemt-color-darker: hsl(150, 47%, 39%);
  }
  ```

### Continued development

I want to work more on accessibility and learn more about options which include APIs and asynchronic functions. 

### Useful resources

- [https://javascript.info/fetch](https://www.example.com) - This helped me to understand the concept and syntax of fetch.

## Acknowledgments

I worked together with my boyfriend Michael-s-dev who really helped me to understand some of the concepts gave me hints when I was unsure.
