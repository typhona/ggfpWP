// Simple function for alert boxes

  function closedAlert() {

// *************************************************************************
// *************************************************************************
// Sets the variables up for use for semi automation of alert box for special
// hours or dates
// *************************************************************************
// *************************************************************************


    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth(); //Be careful! January is 0 not 1
    month = month + 1; // Adjust month to reduce maths
    let hour = currentDate.getHours();
    let year = currentDate.getFullYear();
    
    
    // **********************************************************************
    // **********************************************************************
    // This is where to set the dates that you want to start and stop posting
    // the alert month and date formated to start and stop dates comment out the
    // 'else if' statement if only one event is needed or add another if
    // multiple dates are required
    // **********************************************************************
    // **********************************************************************
    
    
    if(month == 12 && date == 25 && hour <= 14) {
      alert("Christmas hours are 3 p.m. until 8 p.m. Please call 386-2992 to make sure we are still open.");
    }  else if(month == 12 && date == 25 && hour >= 15 && hour <= 19) {
        alert("We will be open until 8 p.m. Please call 386-2992 to make sure we are still open.");
    }
    
    
    // ****************************************************************
    // ****************************************************************
    // This is a working version of the alert code for multiple messages
    // based on differing times.
     // if(month == 12 && date == 9 && hour <= 12) {
    //   alert("This text is because it is before 1pm on Dec 9th");
    // }  else if(month == 12 && date == 9 && hour >= 13) {
    //     alert("This text is because it is after 1pm on Dec 9th");
    // }
    // ****************************************************************
    // ****************************************************************
    
    
}