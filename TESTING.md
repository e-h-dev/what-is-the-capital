### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Lenovo
  * HP
* Mobile Devices:
  * Andriod Tablet

Each device tested the site using the following browsers:

* Google Chrome
* Microsoft Edge
* Opera

Additional testing was taken by friends and family on a variety of devices and screen sizes. They reported no issues when playing.

`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| How to play button | When clicked on it should toggle down and reveal game instructions | Clicked Button | Instructions toggle down | Pass |
| How to play button | Click on and instructions should toggle back up | Clicked on button | Instructions close | Pass |
| Level 1 button | Links to level-1.html | Clicked on Level 1 button | Level-1 page opened | Pass |
| Level 2 button | Links to level-2.html | Clicked on Level 2 button | Level-2 page opened | Pass |
| All buttons - hover effect | All buttons should expand when user hovers mouse over them. | Hover over each button on the page | Each button expands when hovered over | Pass |
| Cursor | The cursor should display as a pointer when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changes upon entering the button | The cursor changed to the pointer cursor | Pass |

`Level-1 page`

#### Testing level 1 with shortened test list

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites title | Link directs the user back to the home page | Clicked title | Directed back to home page | Pass |
| All buttons - hover effect | All buttons with a black background & white text should change when hovered over to a background colour of white with black text. | Hover over each button on the page | Each button displayed the correct styling when hovered over | Pass |
| 🍺 Cursor | The 🍺 should display when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the 🍺 cursor | Pass |
| Easy Button | Calls the easy quiz URL for the API | By console logging the data called from the API I was able to check the difficulty level of the questions corresponded with the level called | ![data-console.log-easy](testing/data-consolelog-easy.png) | Pass |
| Medium Button | Calls the medium quiz URL for the API | By console logging the data called from the API I was able to check the difficulty level of the questions corresponded with the level called | ![data-console.log-medium](testing/data-consolelog-medium.png) | Pass |
| Hard Button | Calls the hard quiz URL for the API | By console logging the data called from the API I was able to check the difficulty level of the questions corresponded with the level called | ![data-console.log-hard](testing/data-consolelog-hard.png) | Pass |

`Game Page - Quiz Area`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Sites title | Link directs the user back to the home page | Clicked title | directed back to home page | Pass |
| All buttons - hover effect | All buttons with a black background & white text should change when hovered over to a background colour of white with black text. | Hover over each button on the page | Each button displayed the correct styling when hovered over | Pass |
| 🍺 Cursor | The 🍺 should display when a user moves the mouse over a button | Moved the mouse over each button to check the cursor changed upon entering the button | The cursor changed from the arrow cursor to the 🍺 cursor | Pass |
| Question populated | The question from the API is correctly pulled from the JSON data | console.log the data and check that the question has been pulled correctly | The question is displaying | Pass |
| Answers populated | The answers from the API are correctly pulled from the JSON data | console.log the data and check that the answers have been pulled correctly | The answers are displaying | Pass |
| Data attribute correct | The data attribute correct has been applied to the correct answer | By console logging the data I am able to check what the correct answer should be. I can then console.log the id of the buttons to check whether the data attribute has been applied only to the button containing the correct answer | only the correct answer has the correct attribute | Pass |
| Correct answer - border colour | When a correct answer is clicked the border around the game area should display green | Clicked on a correct answer | Border displayed green | Pass |
| Incorrect answer - border colour | When an incorrect answer is clicked the border around the game area should display red | Clicked incorrect answer | Border displayed red | Pass |
| Correct answer - button colour | When a correct answer is clicked the button should change background colour to green | Clicked a correct answer | Button background turned green | Pass |
| Incorrect answer - button colour | When an incorrect answer is clicked the clicked buttons background should turn red | Clicked incorrect answer | Button background turned red | Pass |
| Incorrect answer - display correct answer | When an incorrect answer is clicked, the correct answer should display a green background | Clicked incorrect answer | The correct answer turned green | Pass |
| Question No counter | The Question No counter should start at 1 and increase by 1 time the next button is selected. | answered questions and clicked next button | Each time the next button is clicked the Answer no counter increases by 1. | Pass |
| Score Counter | The score counter should begin at 0. Each time a correct answer is selected the score should increase by 10. If an incorrect answer is selected the score should remain the same | Clicked a correct answer to check if the score increased. Clicked an incorrect answer to check the score stayed the same| When a correct answer was selected the score increased by 10. When an incorrect score was selected the score stayed the same | Pass |
| Not Allowed Cursor | Once an answer has been selected, the answer buttons should then be disabled and when hovered over the not allowed cursor will display | Clicked on one answer button and then clicked on the remaining answer buttons | After the answer was selected each answer button clicked on subsequently displayed the not allowed cursor | Pass |
| Next button - becomes visible | When an answer is clicked the next button should be displayed so the user can progress to the next question, or to the end section if all 15 questions have been answered| Clicked on an answer button | The next button displayed | Pass |
| Next button hover effect | A button with a white background & black text should change to a button with a black background & white text when hovered over.| Hovered over the button | Style changed as expected | Pass |
| Next button - clicked | When clicked all answer styles should be removed, the next button should become hidden again and a new question and answer loaded if there are questions left. If all questions have been answered the end game should appear | Clicked on the next button | All styles were removed and a new question and answers were displayed. After question 15 was answered I was taken to the end game. | Pass |
