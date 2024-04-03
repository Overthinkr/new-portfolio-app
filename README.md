# New-Portfolio React App

A significant improvement to the previous render of portfolio. This version is a lot more functional and efficient along with better designing of both the UI/UX and frontend. The project makes use of new technologies learnt to improve the website.
Find the [old repo here](https://github.com/Overthinkr/React-portfolio-with-API)

## Deployment

The project has been deployed [here](https://new-portfolio-webapp.netlify.app/) using netlify. Try logging in and creating your very own blogs in the page. Please do report to [my email](roy050703@gmail.com) in case of any bugs or errors. 

## Notice these features

- Connect to linkedin, github, and to this repository.
- Get MovieDB average ratings for your chosen movies, also find recommendations for the movies of your choice
- View, Edit, Create blogs of your own upon authentication

## Challenges Faced
- Use of v6 createBrowserRouter in react-router-dom : Due to relatively vague documentation, and less internet resources this stood out to being a challenge.
- Introducing the Recommendations : Adding the new features of recommendation calls to the API was rather simple but troubleshooting and realizing that the recommendation list had a possibility of returning a null and then finding a way to work around seemed like a challenge worth mentioning
- Troubles with the redux auth state : There was initially a redux to toggle the sign in and sign out. However, upon a hard refresh, the auth state in redux was not changing as intended. Hence, I had to eliminate the authstate management from redux and transfer it to react's inbuilt context variables
- Firestore : Due to earlier inefficient ways used to call the firestore nosql database, the number of read calls per day was surpassed. This was however, easily fixed after a couple of attempts. 

## Getting started locally

To run the project locally:
- run npm install on downloaded repo's root directory
- Then use the [scripts](#Scripts)

## Author

Mayank Roy - CS undergraduate

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
