// Write your code in this file!
function scuberGreetingForFeet(ride) {
    if (ride <= 400) {
        return 'This one is on me!';
    }
    else if (ride > 2500) {
        return 'No can do.';
    }
    else {
        return 'I will gladly take your thirty bucks.';
    }
}

function ternaryCheckCity (city) {
<<<<<<< HEAD
   

   return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
=======
   return city === NYC ? 'Ok, sounds good.' : 'No, go'
>>>>>>> 01d8db75b0d4514b2f6e3576c453d614fd2fdc45
}

function switchOnCharmFromTip (tip) {
    switch (tip) {
        case 'generous':
        return 'Thank you so much.'
        break;
    case 'not as generous':
        return 'Thank you.'
        break;
    default:
        return 'Bye.'
        break;
    }
}

       


