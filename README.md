# Second Milestone Project

# What's the Capital

![What's the Capital Theme image](assets/images/hero-image.jpg)

## Table of contents

- [Second Milestone Project](#second-milestone-project)
- [What's the Capita;](#whats-the-capital)
- [Table of Contents](#table-of-contents)
- [Project Rationale](#project-rationale)
- [User Experiance (UX)](#user-experience-ux)
  - [User stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)
- [What's the Capital Pages](#whats-the-capital-pages)
  - [Features](#features)
    - [The Home Page](#the-home-page)
    - [Level 1 Page](#level-1-page)
    - [Level 2 Page](#level-2-page)
    - [Error pages](#error-pages)
- [Accessibility](#accessibility)
- [Technologies used](#technologies-used)
- [Deployment](#deployment--local-development)
- [Testing](#testing)
- [Bugs](#bugs)
- [Credits](#credits)



## Project Rationale

* What's the Capital, is a quiz game, designed to help the user access and retain knowlege of the Capitals of the world.
* As a teacher, I have always found the best way for students to retain their learning, is with fun activities. A computer quiz game is a fun and interactive way to reach this goal.
* This project, will help resolve the long and drawn process of remembering the name of Capitals, from the hundreds of Countries in the world.
* This project is unique as it offers two way of playing. 1. A multiple choice method. 2. A chance for the user to type in their own answer. This is unique, as it is a very efficient way to improve the learning process.
* This project offers a quick and clear response to users answers quickly clarifying any doubts.
* This project has a wide scope, offering quiz questions on almost 200 Countries.
* In the write your own answer level, this project is limited to the correct spelling of Capitals.
* In summary, the quiz is a vital piece of technology for anyone interested in learning the names of the worlds Capitals. For those familiar with Capitals, this game will be a very fun way of testing their knowlege.

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

* I want to have easy access to a quiz on Countries and their Capitals, to improve my geographic knowledge. I want to be able to play at any time, anywhere.
* I want the site to be responsive to my device.
* I want the site to be easy to navigate.
* I want clear response messages, if my answer is correct.
* I want to be shown the correct answer if my answer is incorrect

#### Returning Visitor Goals

* I want to be able to choose a level of difficulty that I feel is appropriate for me, based on my experience from my first visit to the site.

#### Frequent Visitor Goals

* I want to be able to adjust the difficulty level to keep improving my knowledge.
* I want to be able to see my scores, to see how I am performing.

- - -

## Design

### Colour Scheme

I designed my colour scheme, based on the Project logo which is light blue. This also includes the blue from the map background image of the game area.

- I have used `rgb(4, 65, 65)` for the dark text in the light background sections of the web pages.
- I have used `rgb(127, 255, 212)` for the light text in the dark background sections of the web pages.
- I have used `rgba(127, 255, 212, 0.5)` to give the images a stronger blue colour.
- I have used `rgb(220, 26, 6)` for the darker red text, in the red colour scheme.

#### Blue Color Scheme
![Blue colors](assets/color-scheme/blue-theme-colors.png)

#### Red Colur Scheme
![Red colours](assets/color-scheme/red-theme-colors.png)

### Typography

The entire Project uses the font "Caveat Brush". This is a fun font, perfect to add some fun for the players. This font is from [google fonts](https://fonts.google.com/specimen/Caveat+Brush?query=caveat) and is linked at the top of each html file.

### Imagery

As the website is for Countries and their Capitals, I have used an interesting image for the hero image. This is a keyboard with each key, a different flag. This image, as all the images on the website, is downloaded with a full license from [piaxabay](https://pixabay.com/photos/country-countryside-dales-england-21460/). The game area image, is a satalite image of Europe and downloaded from [pixabay](https://pixabay.com/illustrations/map-cartography-relief-map-1804891/). The favicon logo is also downloaded from [Pixabay](https://pixabay.com/vectors/flag-violation-report-icon-1095057/)

### Wireframes

Wireframes were created for mobile, tablet and desktop using balsamiq.

#### Wireframes for home page
![Home page wire frames](assets/wireframes/wireframes-index.png)

#### Wireframes for level 1 page
![Level 1 page wireframes](assets/wireframes/wireframe%20level%201.png)

#### Wireframes for level 2 page
![Level 2 page wireframes](assets/wireframes/wireframe%20level%202.png)

## What's the Capital Pages

![responsive image](assets/validation-images/responsive.png)

### Features

The website is comprised of a home page, a level 1 page, a level 2 page, an error 404 page & an error 500 page.

All Pages on the website are responsive and have:

* A favicon in the browser tab.

  ![favicon](assets/images/logo-1.png)


#### The Home Page

The home page of What's the Capital is designed with a hero image of flags. In the center, is a satalite image of Europe. Over the center image, is the website menu, consisting of; the how to play button, this is the button linking to level 1 page and a button linking to level 2 page. The how to play button, toggles when clicked and reveals the game instructions, it toggles back up when clicked again. 

![image of home page](assets/page-images/home-page.png)

#### Level 1 Page

After the user has clicked the level 1 button on the home page, the game will be loaded. The user will find the same background and design as the home page. On load the game will display a question with four possible answers, the user will choose one of the four to click on. A correct answer will turn the box clicked on green and half a second later a message will appear confirming the user's correct choice. Below the game area there is a score box, for each correct answer the user will receive 1 point. If the box clicked is incorrect it will change to red, half a second later a message will appear pointing out to the user that the answer provided is incorrect, it will also show what the correct answer is. Below in the score box a point will be taken off if the user has received at least one point, the score will not go into minus. Beside the score box or below in mobile devices is the lives box. In the lives box, it displays the number of lives and four hearts, for every incorrect answer, 1 life will be removed. If all four lives are lost, the game will end. The user will then be able to answer the question properly. At the top of the page there are three nav buttons. The first, is a link back to the Home page, the second is a link to level 2 and the third which is called theme, changes the colour scheme if the game from blue to red.

![image of level-1 page](assets/page-images/level-1-page.png)

#### Level 2 Page

After the user has clicked the level 2 button on the home page, or the level 2 nav link on the level 1 page the second level will be loaded. The user will find the same background and design as the home and level 1 pages. On load the game will display a question, there will be an input box where the user will type in an answer and click the submit button. A correct answer will load a message confirming the users correct answer. Below the game area there is a score box, for each correct answer the user will receive 1 point. If the use types in the wrong answer message will appear, pointing out to the user that the answer provided is incorrect, it will also show what the correct answer is. Below in the score box a point will be taken off if the user has received at least one point, the score will not go into minus. Beside the score box or below in mobile devices is the lives box. In the lives box, it dispalys the number of lives and four hearts, for every incorrect answer 1 life wil be removed. If all four lives are lost the game will end. If the user submits without filling in the box or fills it with white spaces, a message will load informing the user of an invalid input. At the top of the page there are three nav buttons the first, is a link back to the Home page, the second is a link to level 1 and the third, which is called theme, changes the colour scheme from blue to red.

![image of level-2 page](assets/page-images/level-2-page.png)

#### Error pages
If a 404 or 500 error was to occur, a custom page with a design consistent to the website will load. There will be  prompt and a link to send the user back to the home page.

- - -

### Accessibility

I have been mindful during coding, to ensure that the website is as accessible friendly as possible. This has been achieved by:

* Using semantic HTML.
* Using a hover state on all buttons on the site, to make it clear to the user that they are hovering over a button.
* Ensuring that there is a sufficient colour contrasts throughout the site.

- - -

## Technologies Used

### Languages Used

HTML, CSS, JavaScript

### Frameworks, Libraries & Programs Used

* [JQUERY](https://jquery.com/) - Used to write code for the colour theme change and the how to play toggle.

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Git](https://git-scm.com/) - For version control.

* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

* [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) - A google chrome extension that allows you to view your site as people with accessibility needs would see it.

* [Online Converter](https://www.online-convert.com/) To convert test imagery into gif files.

- - -

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Whats the Capital](https://e-h-dev.github.io/what-is-the-capital/index.html).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [e-h-dev/what-is-the-capital](https://github.com/e-h-dev/what-is-the-capital)
3. Click the settings button.
4. Select pages in the left-hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [e-h-dev/what-is-the-capital](https://github.com/e-h-dev/what-is-the-capital)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [e-h-dev/what-is-the-capital](https://github.com/e-h-dev/what-is-the-capital)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

- - -

## Bugs


### Solved Bugs

| Number | Bug | How I fixed the bug |
| :--- | :--- | :--- |
| 1 | Since questions load at random, the same question was being asked in close proximity. | To remove this, I built a function which updates the list, removing the asked Country from the main list. |
| 2 | On level one page, after a few plays, some of the multiple choice options display `undefined` | This was because, the asked question and corresponding answer, were removed from the small lists built for the mulitiple choice options, the items were removed giving a value of undefined. To fix, this I have added another list of random Cities to fill the emptied shortlists. |
| 3 | Clicking in the game area loaded next question at wrong time. | This was because the button html element which trigered the load of the next question was not removed after the question was asked. I had only set the innerHTML to `""`. By replacing that with the `remove()` function the bug was solved. |
| 4 | On level 2, after the Game was over, the message did not load and the game could still be played. | This was a bug in the runGame function. It did not include the gameOver function in the `if statement`, by adding another `if else` with the gameOver function, the bug was solved. |
| 5 | Wrong answers made score below 0 | I added an if statement to the subtractScore function, to ensure it will only remove a score if it's a value of more than 0. |
| 6 | At the game load on level 1, some questions are partially covered by the mulitiple choice options. | I minimised the size of the h1 element, to fit the question in the space for a country with a long name. |
| 7 | After an invalid input on level 2, there was no option to answer the question, only to load the next question. | I fixed this, by creating a function called emptySpace. This function prevents the loading of another question. I then put this function into an `if statement`, in the checkAnswer function, which runs the invalid function if the answer is blank. |
| 8 | When a user filled in the input box using a capital for the first letter, the program reads it as incorrect. | I put all Capitals and Countries in the initial list without capitals. I then created a Capitilise function, so all Countries and Capitals will print to the DOM capitalised. I then set the css of the input box with a text-transform:capitalise. When the user starts to type the first letter, it will be in capitals, this way it is unlikely the program will reject any user input. |



### Known Bugs

- The theme button at the head of each page, changes the colour scheme from blue to red but it won't change back to blue.
- White space input are invalid, even if the answer is of two words. To rectify that this won't happen to players, I removed all the Capitals with two words. I hope to fix this bug in the future.
- In level 2, if a user misspells a Capital by even one letter, it will come up as incorrect. In the future, I would like to create a function or connect an API to solve this.

## Credits

### Media

All the pictures through the pages of the website are downloaded with a license, from [Pixabay](https://pixabay.com/). Follow this [link](https://pixabay.com/service/terms/) to see the terms and conditions of downloads from pixabay.

### Acknowledgments

I would like to acknowledge the following people:

* Jabril Akolade - My Code Institute Mentor.

* Kera Cudmore - For the use of her amazing github repository [The quiz arms](https://github.com/kera-cudmore/TheQuizArms). 

* Jessica Bessey - Of Newcastle College for helping in facilitating the course.

* Code institute - For all the help and well-structured lessons making this project possible after only three months of learning HTML.
