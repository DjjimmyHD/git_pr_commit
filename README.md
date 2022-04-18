# Git Pull Git Commit Git Outta Here

The purpose of this API is to "Expose an endpoint that returns info for the open pull requests in a GitHub repository". Simply by navigating to api/commits and supplying the correct query  paramters you can find yourself swimming in sweet sweet github data

## Getting Started

Clone this repo. Then `yarn install`. If you want to run the dev env `npm run dev`. You can send your request from the browser or a headless browser or where you wish really as long as you follow the correct query params.


### Structure

`/api/commits/${owner}/${repo}/`

Your rquest needs to follow these rules... if you want the request to be succesful that is.

`owner` should be the name of a valid github user
`repo` should be the name of a valid repo that user owns

and thats it 🥳

### Generally Speaking

I don't have a ton of experience with TS but it was fun to just build a server again. My typing can be vastly improved upon. That being said I really did try my best to keep things brief and modular. The part that I had the most difficulty with conceptually was the idea of firing off an unknown amount of requests simply to return the length of the data. I really tried to keep it to one end point which is how I understood the requirements. As a result there is no auth user validation and there arent multiple requests to be made by the user either. Like all code I feel like I could spend forever tweaking this and refactoring and learning but I can put it down for now and say it fulfills the requirements, does what was asked.