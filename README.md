# API Design and Server Implementation

## 1. Design a RESTful API for a Yelp-like application

Your first task for this assignment is to design a RESTful API (i.e. API endpoints with corresponding request and response bodies) for a Yelp-like application.  This application will specifically be centered around businesses and user reviews of businesses in US cities.  The API you design should permit the following functionality:

  [X] Users who own businesses should be able to add their businesses to the application.  When a business owner adds their business they will need to include the following information:
    * Business name
    * Business owner

  [X] Business owners may modify any of the information listed above for an already-existing business they own.

  [X] Business owners may remove a business from the application.

  [X] Users may get a list of businesses. The representations of businesses in the returned list should include all of the information described above.  In a later assignment, we will implement functionality to allow the user to list only a subset of the businesses based on some filtering criteria, but for now, assume that users will only want to fetch a list of all businesses.

  [x] Users may fetch detailed information about a business.  Detailed business information will include all of the information described above as well as reviews of the business.

  [X] Users may write a review of an existing business. A review will include the following information:
    * A "star" rating between 0 and 5 (e.g. 4 stars)
    * An optional written review

    Note that a user may write at most one review of any business.

  [] Users may modify or delete any review they've written.

  [] Users may list all of the businesses they own.

  [] Users may list all of the reviews they've written.

As you're designing your API think about what responses will need to be paginated.  Think also about what links to other API resources might be useful to return in a response from a given API endpoint (i.e. how your API will implement HATEOAS).  Some of the API endpoints you implement will need some form of authentication.  For now, you may make note of this, but you don't need to worry about it for this assignment.

There is no formal deliverable for this part of the assignment, but it will be useful to go through the exercise of designing your API before implementing it.

## 2. Implement a server for your API

After you've designed your API, implement a server for it using Node.js and Express.  Your server should meet the following requirements:

  [X] A route should be included to implement each of the API endpoints in your design.

  [X] Application data for your server should be stored in in-memory data structures (i.e. no databases or anything like that yet).

  [X] Any API endpoint with a parameterized route should perform basic verification of the specified route parameters.

  [X] Any API endpoint that takes a request body should perform basic verification of the data provided in the request body.

  [X] Each API endpoint should respond with an appropriate HTTP status code and, when needed, a response body.

  [X] API endpoints should have paginated responses where appropriate.

  [X] Your server should run on the TCP port specified by the `PORT` environment variable.

  [X] You should be able to launch your server using the command `npm start`.

There is no formal testing requirement for this assignment, but be prepared to send appropriate queries (using cURL, Postman, etc.) to demonstrate the complete functionality of your API during your grading demo for the assignment.

## 3. Write an OpenAPI specification for your API

Finally, write an OpenAPI specification for your API.  For each endpoint of your API, your OpenAPI specification should list the HTTP methods accepted by the endpoint along with specifications for their request and response bodies and the HTTP status codes they use.

## Submission

We'll be using GitHub Classroom for this assignment, and you will submit your assignment via GitHub.  Just make sure your completed files are committed and pushed by the assignment's deadline to the master branch of the GitHub repo that was created for you by GitHub Classroom.  A good way to check whether your files are safely submitted is to look at the master branch your assignment repo on the github.com website (i.e. https://github.com/OSU-CS493-Sp18/assignment-1-YourGitHubUsername/). If your changes show up there, you can consider your files submitted.

## Grading criteria

This assignment is worth 100 total points, broken down as follows:

* 10 points: Signed up for Piazza

* 70 points: Implemented API server
  * 35 points: API server implements a route to allow each piece of functionality described above
  * 10 points: API server stores API data in memory
  * 10 points: API endpoints perform basic verification of route parameters and request bodies
  * 10 points: API endpoints respond with appropriate HTTP status codes and response bodies
  * 5 points: API endpoints send paginated responses when appropriate

* 20 points: Wrote OpenAPI specification for API
