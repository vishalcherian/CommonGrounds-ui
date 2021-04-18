# CommonGrounds

For coffee lovers, by coffee lovers

## Local Setup

1. run `npm install`
2. run `npm start`
3. open your browser and go to `localhost:3000`

## Todo

[ ] Add form validation for login/signup page
[ ] redirect unauthenticated user to login page
[ ] Add flavor profiles to redux state

## Design/Technical Challenges

- Figuring out how to involve chips in reviews. The whole point of this app is to make it really easy to review coffee by using chips and preselected flavors from a coffee wheel to review.
  - There are different hierarchies of flavor notes, and so when you select one from the first hierarchy, I want only those corresponding chips to appear, so its almost like a funnel the user walks through to review