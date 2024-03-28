type Light = 'green' | 'yellow' | 'red';

// BEFORE

const checkLight = (light: Light) => {
  if (light) {
    if (light === 'green') {
      console.log('go');
    } else if (light === 'yellow') {
      console.log('slow down');
    }
    else if (light === 'red') {
      console.log('stop');
    }
  } else {
    console.log('no light');
  }
}
checkLight('red');

// AFTER

const checkLightRefactored = (light: Light) => {
  if (!light) {
    return 'no light';
  }

  if (light === 'green') {
    return 'go';
  }

  if (light === 'yellow') {
    return 'slow down';
  }

  return 'stop';
}
console.log(checkLightRefactored('red'));