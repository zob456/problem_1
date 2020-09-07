var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

function mutateArray(a) {
  const newA = a.map(item => {
    return {
      'guest_type': item.guest_type,
      'first_name': item.first_name,
      'last_name': item.last_name,
      'room_no': item.guest_booking.room_no,
      'some_total': item.guest_booking.some_array.reduce((total, amount) => total + amount)    
    }
  }).sort((a, b) => {
    const lastNameA = a.last_name.toLowerCase()
    const lastNameB = b.last_name.toLowerCase()
    const firstNameA = a.first_name.toLowerCase()
    const firstNameB = b.first_name.toLowerCase()
    // checing to see cals of last names & first names
    // also adding to sort by first name is last names are equal
    if(lastNameA > lastNameB) return 1
    if(lastNameA === lastNameB && firstNameA > firstNameB) return 1
    if(lastNameA < lastNameB) return -1
    return 0
  })
    return newA;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
