# Backend

## Setup
> Installed dependencies:
> Nodemon, Cors, body-parser, chai, chai-http, mocha, express, express-validator, dotenv and mongoose

## Model
> In order to come up with a model, we looked at the wireframe and the user stories:
> Since the edit page had not only the graduate information, but also  personal stories, we decided that this would need to be added into the model such that the model has an id, then follows on to their personal details, contact details and then the personal stories (which could be a degree, achievement e.t.c. )
## Static data
>Using the model we came up with some static data which contained an ID that followed mongodb id regex and the rest of the fields matched the type of the model.

## GradProfile Route & Testing
>For the gradprofile route, we understood that a get request would be accompanied with the specific ID of the graduate that they are looking at ( the logged in users), hence why the get request looks for a path ending with :id. It then uses the id parameter to find a data match to the id for which it will either return all the data associated with that, if its not found it will return a 404 error, if the id parameter of the url didn't match the mongodb id regex then it would return a 422 error and if the server encountered any other type of error it would return a status 500.
> We tested all 3 of the above scenarios to see that it worked in all cases.