#Interview Questions!!!
### for front-end developers

##what 
Display front-end interview questions in a quiz format, with customizable options.
Part of the Meteor 2015 Global Distributed Hackathon: Orange County, CA chapter

event: http://meteor-2015.devpost.com/
project: http://devpost.com/software/theinterview

##why
For the sake of embetterment.


##question sauce
http://h5bp.github.io/Front-end-Developer-Interview-Questions


##package list
Meteor 1.2
Flow Router
Bootstrap


##team
Byron => byron@polished-web.com

Andrew => uncle.optimus@gmail.com


##features
- Random quiz mode of 10 questions
- Select and view question categories
- Dynamic difficulty ranking system for each question
- future: ???


## Notes
- infinite loop caused when getting and setting the same Session var
in a helper; danger of reactive
- solved by splitting the calculation of "next_index" into questions.events.js
click handler
- altered quiz.helpers.questions to draw from 'combo_list' created in Customize view
- set up question.helpers.nextQuestionId to check 'random' flag and load 
appropriate question list (random vs custom)
- PROBLEM: nextQuestionID always starts from 1st question no matter the question user
selects from Question list
...using @index in template to attach data-attr. I then grab this ref on click of a 
question in the list to establish the current index ... seems to work!
VERY similar to click handler in question.events... turn into global helper func?
