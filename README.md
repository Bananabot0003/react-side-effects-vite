
# React Side Effects Lab

## Description

This project is a React application that fetches random programming jokes from an API. It uses useState to manage data and useEffect to fetch a joke when the page first loads.

## Features

- Displays a random programming joke when the page loads.
- Allows the user to get a new joke by clicking a button.
- Displays a loading message while fetching a joke.
- Handles errors if the API request fails.

## Technologies Used

- React
- JavaScript
- Vite
- JokeAPI

## Installation

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:

    npm install

4. Start the application:

    npm run dev

5. Open the local URL provided in the terminal.

## How It Works

The App component uses useState to store the joke and loading status.

The useEffect hook calls fetchJoke when the component first loads.

The JokeDisplay component receives the joke and loading state through props and displays the correct message.

The FetchButton component receives the fetchJoke function through props and calls it when clicked.

## Testing

Run the tests using:

    npm test

All 3 tests passed.

## What I Learned

In this lab, I practiced using useState and useEffect in React. I also learned how to fetch data from an API, pass props between components, and use an event handler to update the page without refreshing it.
