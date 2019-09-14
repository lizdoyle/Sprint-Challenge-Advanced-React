- [ ] Why would you use class component over function components (removing hooks from the question)? 

You would use class components in order to gain more control over the manipulation of a component. Because when using the base conponent function of react, there are many functionalities included as a default extension through the base component alone. This also allows us to use life cycle components. 

- [ ] Name three lifecycle methods and their purposes.

1. Birthing/Mounting - from the beginning of creating a react class component, to the initial use of the ComponentDidMount() function, this allows for the componenet data to be set up, and ititially rendered to the screen.
2. Updating- using set state, and ComponentDidUpdate(), this phase allows for the data to be rerendered, and for the use of setState for the magic of react to happen, and rerender state, updating the data that we see on the client side of the screen.
3. Unmounting - Unmounting allows for a component to "die" and be removed from the screen, as wel as for cleanup.

- [ ] What is the purpose of a custom hook?

 A custom hook can extend the functionality of React, as well as allow to assign the non-visual part of the component, and the logic behind how it works, to be reused throughout a React App. 

- [ ] Why is it important to test our apps? 

It is important to test an app for a multitude of reasons. Testing increases functionality, prevents bugs, allows it to be easier for both the initial development team, and outside developers to be able to trust that what is coded is accurate and that it works. It acts as a safety net, and gives additional documentation when refractoring and changing/updating code. 