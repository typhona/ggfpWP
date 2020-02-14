
  function closedAlert() {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth(); //Be careful! January is 0 not 1
    month = month + 1; // Adjust month to reduce maths
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let year = currentDate.getFullYear();
    // console.log (month);
    // console.log(date);
    // console.log(hour);
    // console.log(minutes);
    
    // This is where to set the dates that you want to start and stop posting the alert
    // // month and date formated to start and stop dates comment out the 'else if' statement if only one event is needed or add another if multiple dates are required
    if(month == 12 && date == 11 && hour <= 10) {
      alert("This text is because it is before 10am on Dec 11th");
    }  else if(month == 12 && date == 11 && hour >= 10 && hour < 11) {
        alert("This text is because it is after 10am but before 11am on Dec 11th");
    } else if(month == 12 && date == 11 && hour >= 11) {
        alert("This text is because it is 11am or later on Dec 11th");
    }
}

