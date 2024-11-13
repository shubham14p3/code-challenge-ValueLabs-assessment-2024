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
- We can verify the removePokemon action was dispatched as follow:- First, we can use Redux DevTools to watch for removePokemon actions in the action log; we’ll see each dispatch there with the updated state reflecting the Pokemon removal. Second way we can check is to add a simple console.log in handleRemove, so each time you click "Remove," it logs to the console, confirming the action is triggered.


## Task 6:
Question 7: explain the use of `useEffect` hook in React
- The useEffect hook is essential for handling side effects in functional components. It lets synchronize component with external systems, such as APIs or subscriptions, by running code after the render cycle. The hook accepts a dependency array, which helps control when the effect should re-run—like only once on mount, or every time a specific state changes. This makes useEffect ideal for tasks like fetching data, manually interacting with the DOM, or setting up timers.

Question 8: What is A High Order Component?
- A Higher-Order Component (HOC) is a pattern in React that allows us to create components with enhanced functionality. It’s essentially a function that takes a component and returns a new one with added features. This is particularly useful in situations where multiple components need similar logic (e.g., logging, access control, or performance tracking) without duplicating code. HOCs are great for abstracting away repetitive logic, making components more composable and keeping code DRY (Don't Repeat Yourself).

Question 9: What use cases would a HOC be usefull?
- HOCs shine in scenarios where you need to inject reusable logic into components. Common use cases include adding authentication checks, handling UI theming, fetching or caching data, and implementing error boundaries. By wrapping components in an HOC, you create a consistent and reusable pattern for these behaviors, which helps with maintainability and readability across larger codebases.

Question 10: What does it indicate when a component is prefixed with `use` and `with`
- In React, a component prefixed with use generally indicates a custom hook, which is a function that encapsulates reusable logic for state or effects within functional components. Meanwhile, with often suggests an HOC, such as withAuth or withRouter, which wraps a component to provide it with additional props or behavior. This naming convention makes it easy to distinguish hooks from HOCs and understand their roles in a codebase.

Question 11: What is a Generic type in typescript?
- Generic types in TypeScript are a powerful feature that allows developers to define components, functions, or classes that work with various data types in a type-safe way. By using generics, you create flexible and reusable code without sacrificing type safety. For example, a generic function that operates on arrays can handle any data type of array while preserving the type information, providing both flexibility and strict type-checking.

Question 12: Whats the difference between a controlled and uncontrolled input in React?
- Controlled inputs in React are managed by component state, which means every change to the input value immediately updates the state and re-renders the component. This allows precise control over the input value, making it ideal for forms that require validation or conditional behavior. Uncontrolled inputs, on the other hand, rely on the DOM to hold their current values, and you use a ref to access them when needed. While controlled inputs offer more control and flexibility, uncontrolled inputs are simpler and more efficient for non-critical data capture, as they don’t require state updates with each change.

### Developing tools

- Typescript
- HTML5
- CSS
- Redux-toolkit
- PNPM

### Testing Tools

- Vitest

### Styling and Lints

- Eslint
- Stylelint


## Authors

👤 **Shubham Raj**

- Github: [@ShubhamRaj](https://github.com/shubham14p3)
- Linkedin: [Shubham Raj](https://www.linkedin.com/in/shubham14p3/)






