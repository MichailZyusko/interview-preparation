// BEFORE

const openingHours = (date: Date) => {
  switch (date.getDay()) {
    case 1:
      return 'Closed';

    case 6:
    case 0:
      return '8:00am-12:00pm';

    default:
      return '8:00am-20:00pm';
  }
};

console.log(openingHours(new Date()));

// AFTER

const weekendDay = (date: Date) => [0, 6].includes(date.getDay());
const restDay = (date: Date) => date.getDay() === 1;

const openingHoursRefactored = (date: Date) => {
  switch (true) {
    case weekendDay(date):
      return '8:00am-12:00pm';

    case restDay(date):
      return 'Closed';

    default:
      return '8:00am-20:00pm';
  }
};

console.log(openingHoursRefactored(new Date()));
