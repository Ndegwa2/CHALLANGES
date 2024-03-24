//  speed detecting system. speed<70 = ok.
// for every 5km per hour above 70 = i demerit point.
//print total demerit points
// if demerit points are >12 print license suspended.




//we use the .getElementById function to access html content.

document.getElementById("speedDetectorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const currentSpeed = document.getElementById("currentSpeed").value;
    const currentSpeedInt = parseInt(currentSpeed);

    const demeritPoints = document.getElementById("demeritPoints").value;
    const demeritPointsInt = parseInt(demeritPoints);

if(currentSpeedInt <= 70){
    console.log("Ok");
}
//using the if statement, we now set to set and satisfy the condtion.
else{
    const exceededSpeed = currentSpeed -70;
    // we declared a new varible which will hold the vlue of the exceeded speed.
    const points = Math.floor(exceeededSpeed / 5);
    const totalPoints = demeritPointsINt + points;

    // having gotten the figures we need for the above opertions, we  only remain with displaying them.


    console.log("your points are ${points} demerit points." );
    // we use the $ sign to refere to the variable points.

    console.log (" exceeded speed limit by ${exceededSpeed} km/h")
    console.log("your total points are currently at ${totalPoints}.")
    // Show the total points so far


}
// to show the driver the result according to the retrieved data.
if(totalPoints > 12){
    console.log("License suspended");
} else {
    console.log("Keep adhering to the limits. Kudos driver");
}
