type Light = 'green' | 'yellow' | 'red';

// BEFORE

const checkLight = (light: Light) => {
  if (light) {
    if (light === 'green') {
      console.log('go');
    } else if (light === 'yellow') {
      console.log('slow down');
    } else if (light === 'red') {
      console.log('stop');
    }
  } else {
    console.log('no light');
  }
};
checkLight('red');

// AFTER

const lightToAction: Record<Light, string> = {
  green: 'go',
  yellow: 'slow down',
  red: 'stop',
};
const checkLightRefactored = (light: Light) => lightToAction[light] || 'no light';
console.log(checkLightRefactored('red'));
