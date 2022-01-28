function promptCatScale() {
    let confirm = window.confirm('Would you like to see some of Christopher\'s Cat Poetry?');
    let cScale = prompt('On a scale of 1-10, how much do you love cats?').toLowerCase.trim();

    
}

___________________
function promptCatScale() {
    // step 1: prompt user for Cat Love number
    let cScale = prompt('On a scale of 1-10, how much do you love cats?')
    console.log('cScale', typeof Number(cScale));
    // Step 2: decide what response to return to the user
    let response = 'so you like to play games, eh?!';
    // Step 3: create logic that changes reponse
    // Step 4: check user input for valid input (its a number)
    // IF not valid, call promptCatScale() again.
    if (cScale > 7) {
      response = 'Oh heck yeah! You\'re in the right place, my friend!';
    } else if (cScale > 5) {
      response = 'Alright, I don\'t love it but I respect you!';
    } else if (cScale > 0) {
      response = 'Um...who hurt you? You probably have an anxious attachment style.';
    }
  
    return alert(response)
  }

  promptCatScale()