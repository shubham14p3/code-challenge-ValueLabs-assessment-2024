# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
- I used fetch within useEffect to retrieve the list of Pokemon from the API endpoint. This approach loads the data when the component mounts. fetch was being simply called here, as it provides a promise-based way to access APIs directly.

Question 2: What steps would you take to future improve this?<br>
- To improve, I’d consider adding caching (e.g., sessionStorage) to reduce redundant API calls on reload. Another step I could be implementing is pagination if we want to load more than 151 Pokemon or if the data set grows. Additionally, we can also explore React Query for better state management and background refreshing, which simplifies caching and syncs automatically.

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
- createSlice in Redux Toolkit simplifies traditional Redux setup by combining actions, action creators, and reducers into one place. Unlike traditional reducers, which require manual action types and separate action creators, createSlice auto-generates these, reducing boilerplate. Plus, it uses Immer under the hood, allowing us to write "mutative" code that stays immutable.

Question 5: Describe the benefits of immutable code.<br>
- Immutable code keeps each state change as a new state, rather than altering the existing one. This approach prevents us accidental changes to data, making  the debugging easier.

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Question 8: What is A High Order Component?
Question 9: What use cases would a HOC be usefull?
Question 10: What does it indicate when a component is prefixed with `use` and `with`
Question 11: What is a Generic type in typescript?
Question 12: Whats the difference between a controlled and uncontrolled input in React?





