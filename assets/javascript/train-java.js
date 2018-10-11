 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDHIdxYLe2C8p8uiA39kg-_M3YyW9JDciI",
    authDomain: "train-scheduler-ds01.firebaseapp.com",
    databaseURL: "https://train-scheduler-ds01.firebaseio.com",
    projectId: "train-scheduler-ds01",
    storageBucket: "train-scheduler-ds01.appspot.com",
    messagingSenderId: "206330336000"
};
firebase.initializeApp(config);

var database = firebase.database();

// On-click funtion for submit button
$("#add-train").on("click", function (event) {
    event.preventDefault();

    // associating user input with variable
    var trainName = $("#name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainTime = $("#time-input").val();
    var trainFrequency = $("#frequency-input").val().trim();

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);
    console.log("submit");

    // send information to database
    database.ref().set({
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    });


    var trainName = $("#name-input").val("");
    var trainDestination = $("#destination-input").val("");
    var trainTime = $("#time-input").val("");
    var trainFrequency = $("#frequency-input").val("");
});

database.ref().on("value", function (snapshot) {

    var tName = snapshot.val().name;
    var tDestination = snapshot.val().destination;

    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().time);
    console.log(snapshot.val().frequency);
    console.log("snapshot");

    // calculations of time
    var tTime = snapshot.val().time;
    var tFrequency = parseInt(snapshot.val().frequency);
    var firstTrain = moment(tTime, "HH:mm").subtract(1, "years");
    console.log(tTime);
    console.log(firstTrain)

    var currentTime = moment().format("HH:mm");
    var currentCalc = moment().subtract(1, "years").format("HH:mm");
    console.log(currentCalc)
    console.log(currentTime)

    var difference = moment().diff(moment(firstTrain), "minutes");
    console.log(difference)

    var remainder = difference%tFrequency;
    var minutesLeft = tFrequency-remainder;

    var nextTrain = moment().add(minutesLeft, "minutes").format("hh:mm A");
    console.log(nextTrain)




    //add to the html
    var newRow  = $("<tr>");


    // var newRow  = $("<tr>").appened(
    //     $("<td>").text(tName),
    //     $("<td>").text(tDestination),
    //     $("<td>").text(tFrequency),
    //     $("<td>").text(nextTrain),
    //     $("<td>").text(minutesLeft),
    // );

    // $("#train-display").append(newRow);

    // console.log(newRow)

    $("#train-display").append(newRow);
    newRow.append($("<td>")).text(tName);
    $("#destination-display").append(tDestination);
    $("#frequency-display").append(tFrequency);
    $("#next-display").append(nextTrain);
    $("#minutes-display").append(minutesLeft);


}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
});