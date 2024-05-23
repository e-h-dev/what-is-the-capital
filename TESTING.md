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
| Page loading | Four random answer options should appear | Loaded page | Four blue multiple choice answers appear under question (image 1) | Pass |
| Game run | None of the four options should be the same | Played the game twice till the end | All four answers were different efery time (image 1) | Pass |
| End of game | Game over message with score should display | Played the game twice till the end | Game over message with score were displayed (image 2) | Pass |
| Playing Game | Recieve a point for each correct answer | Played game entered correct answer | Score increased by a point (image3)| Pass |
| Playing Game | Correct message should display for correct answer | Played game entered correct answer | Correct answer message displayed (image 3)| Pass |
| Playing Game | Lose a point for each incorrect answer | Played game entered incorrect answer | Score decreased by a point | Pass |
| Playing Game | Incorrect message should display for incorrect answer | Played game entered incorrect answer | Incorrect answer message displayed | Pass |
| Playing Game | One life should be removed for each incorrect answer | Played game entered incorrect answer | A life was removed | Pass |
| Playing Game | Score count should not go below zero | Played game entered incorrect answer, when the score was at zero | Score remained zero | Pass |
| Game over | After all four lives are removed the game should end | Played the game and entered 
 many incorrect answers | after each incorrect answer a life was removed, when all 4 were removes the game over message was displayed | Pass |

 #### Supporting images for the above testing (each image has a referance number)

 #### 1.
 ![level 1 load image](assets/test-images/level-1-load-view.png)

 #### 2.
 ![level 1 end of game message](assets/test-images/end-of-game-game-over.png)

 #### 3.
 ![correct message displayed score increased](assets/test-images/correct-message.png)
