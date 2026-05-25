# Personal Home Page

This is Claire's personal home page designed for the CS5610 Project 1.

## Project Objective

Design a personal homepage that includes your skills, classes, hobbies, etc. Implement this front-end only static page with vanilla HTML5, CSS3, ES6+, and Bootstrap5. Ensure that the page is formatted with Prettier and W3C compliant. The site should include at least 2 HTML pages with different URLs that were written manually and one AI generated page. At least one creative JS (Vanilla) feature should be included. The prompt and model used to create the AI page should be properly referenced. Additionally, complete a code review for another student’s project.

## JS Creative Addition

As my creative addition using Vanilla JS I designed logic to go with two HTML buttons that connect to img and text elements in my about me page. I used JS to add event listeners to the buttons and depending on the values of global variables rotate through arrays of image files. One button changes the season theme of the photos, and the other one rotates through photos in that season. In addition to this being an interesting mechanism this feature also connects to my photography hobby.

## Technical Requirements

In order to run this, you should be able to use HTML, CSS, JS, and have npm and reload installed (if trying to run local http server).

## Installation/Use

```bash
npm install -g reload # installs the reload package, a way to run a http server that has dynamic loading
reload -b # creates and runs an http server using the current codebase
```

## Class Reference

Here is the link to the course: https://johnguerra.co/classes/webDevelopment_online_summer_2026/

## Video Demo

https://youtu.be/7HKjFwLbsiU 

## AI Use

I used the Claude AI engine with the Sonnet 4.6 model in order to create the html and css code used for the Contact Me page. Below I list the prompts I used to ultimately get to the final code version, and I add a link to the Claude chat.

"Hi, can you role-play as a professional front end developer with experience in html, js, css, and bootstrap and write the body code for a contact me html page that includes this information: email: clairestanton26@gmail.com LinkedIn:[www.linkedin.com/in/claire-stanton](https://www.linkedin.com/in/claire-stanton) and some fun visual design elements. overall I want a clean look with color palate in soft cool colors"

"I like this so far, can you make sure that all of the text has the font style of Roboto, and can you include some minor geometric designs in the footer"

"Can I have the actual body code you wrote to create this webpage, not just the finished html file?"

"Can you walk me through the classes you used as if you were a front end developer teaching a college course?"

"That code isn't rendering correctly with my set up, can you ensure that you are using the most simple programming strategies to get the result you gave me before and then send me all of the html code (head and body)?"

"That almost works perfectly! the only thing is that I have an already written nav bar container written that goes before the body code you generated, but now it is rendering next to it. can you tell me what edits I should make to the body code so that the new code goes underneath the navbar?"

https://claude.ai/share/092f726d-a696-440f-a9d5-a0e47df0b920

## Design Document

The pdf of the design document is saved in the repo under the 'documents' folder.

## License

[MIT](https://choosealicense.com/licenses/mit/)
