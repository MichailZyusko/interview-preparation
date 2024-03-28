const isAuthenticated = true;
const doSomeLogic = () => console.log('some complex logic');

// BEFORE

if (isAuthenticated) {
  doSomeLogic();
}

// AFTER

isAuthenticated && doSomeLogic();
