# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This is a simple fix. We can create a migration with Rails g migration I believe is the command. We then name the migration using pascal case or snake case. We then go into the migrations folder inside of our rails app and input what we want to change in there. In this case, we want to add a the foreign key, which is added to the Student model. We reference the Cohort model by adding cohort_id; this links the student model to the cohort model. 

Researched answer: Migrations are used to modify the shape of an existing database. We can add, delete or change the name of a column, as well as changing the data within that column. It is a file that is generated through a rails command that will allow us to make these changes. 

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are the ones we wish to have our user input their information into. We must pass params when we are doing Create actions in our CRUD, or POST and PATCH in our http verbs. 

Researched answer: Allows us to choose which attributes should be updated with require and permit. Params allow us to add more info to our program by passing values into the controller, instead of hard-coding values directly into the URL.

3. Name three rails generator commands. What is created by each?

Your answer: 
rails g model: generates a model, or a class, for our database. We can then add the necessary information that we desire via the terminal, or via params, provided that our validations allow it. 
rails g migration: this generates a migration file; this file allows us to make specific changes to our models, such as adding or deleting columns, or modifying that data within the table. We must generate migrations since the schema cannot be modified directly inside of our text editor. 
rails g controller: This command generates a controller for our full stack rails application. We need controller files in order to have a working rails application; it is the file that controls the application. 

Researched answer: The logical center of our application. This file coordinates interactions between the user, the views, and the model. It is responsible for routing external requests to internal actions. The model also handles caching, so that our app responds quicker. In short, a model is an essential part of rails. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
This would call our index method in our controller file. It would "get" all the instances of the model it is referring to, in this case: student.

action: "POST" location: /students
This would call the create method. It finds the information via params. Usually the method uses .create to create a new column inside of the model and then posts it if the post passes our validations.

action: "GET" location: /students/new
THis would call on the new method inside of our controller file. It gets input from the user via a form that one creates. 

action: "GET" location: /students/2
This would call on the 2nd entry in students model table. It would show whatever is in that column from our students model. 


action: "GET" location: /students/2/edit
This would call on the second entry of our students model, and it would show some kind of form that allows the user to edit the column, assuming the input meets validations.

action: "PATCH" location: /students/2
This calls on the update method in the controller file. This updates with whatever the user wishes, as long as it passes validations. 

action: "DELETE" location: /students/2
This calls on the destroy method. Basically pretty self explanatory. It deletes something

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I want to be able to visit a website that allows me to keep track of a to-do list.
As a user, I can see a landing page for the site with the title, To-Do-List
As a user, I can see an input field and it puts what I put into the list. 
As a user, I can update the list by clicking the button that says, "update list"
As a user, I can modify the tasks that are already in the list and change them as necessary. 
As a user, I can delete the task if I wish with a delete button next to said task
As a user, I can mark my task as complete. 
As a user, I can put tasks into different categories or lists. 
As a user, each time I add, update, or delete a task, I am taken back to the landing page which shows all of my tasks
As a user, I can see that the website is pleasantly styled.
