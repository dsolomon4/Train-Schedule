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

    console.log(trainName)
    console.log(trainDestination)
    console.log(trainTime)
    console.log(trainFrequency)

    var currentTime = moment().format("hh:mm");
    var firstTrain = moment(trainTime, "HH:mm").subtract(1, "year");
    var minutesLeft = moment().diff(moment(firstTrain), "minutes");
    // var nextArrival = trainTime
 

    console.log(currentTime)
    console.log(firstTrain)
    console.log(minutesLeft)
    

    // // object for user input
    // var train = {
    //     name: trainName,
    //     destination: trainDestination,
    //     time: trainTime,
    //     frequency: trainFrequency
    // };

    // database.ref().push(train);

    // console.log(train.name)
    // console.log(train.destination)
    // console.log(train.time)
    // console.log(train.frequency)
});










