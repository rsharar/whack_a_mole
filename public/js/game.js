$(document).ready(function () {

    var moles = 5;
    var gridSize = 25;
    var moleIndexes = [];

    // DIFFICULTY SETTINGS (database) CORRESPOND TO DIFFERENT SIZES / TOTAL MOLES

    // Run program
    placeMoles();
    start();
    // -----------

    function randomize() {
        for (i = 0; i < moles; i++) {
            var rand = Math.floor(Math.random() * Math.floor(gridSize));
            if (moleIndexes.includes(rand)) {
                i--;
            } else {
                moleIndexes.push(rand);
            }
        }
    }

    function placeMoles() {
        randomize();
        for (i = 0; i < moleIndexes.length; i++) {
            $("#" + moleIndexes[i]).attr("data-lit", "true").css("filter", "hue-rotate(0deg)");
            // console.log(moleIndexes[i]);
        }
    }

    function resetMoles() {
        for (i = 0; i < moleIndexes.length; i++) {
            $("#" + moleIndexes[i]).attr("data-lit", "false").css("filter", "hue-rotate(120deg) brightness(1.5) grayscale(30%)");
        }
        moleIndexes = [];
        placeMoles();
    }

    $(document).on("click", '[data-lit="true"]', function () {
        // console.log("mole clicked")
        moles--;
        if (moles === 0) {
            $(this).attr("data-lit", "false").css("filter", "hue-rotate(120deg) brightness(1.5) grayscale(30%)")
            stop();
            console.log("WIN")
        } else {
            resetMoles();
        }
    })

    // Stopwatch code
    var time = 0;

    function reset() {
        time = 0;

        $("#timer").text("00:00");
    }

    function start() {
        intervalId = setInterval(count, 10);
    }

    function stop() {
        console.log("stopping");
        clearInterval(intervalId);
    }

    function count() {
        time++;
        var converted = timeConverter(time);
        $("#timer").text(converted);
    }

    function timeConverter(t) {
        var minutes = Math.floor(t / 6000);
        var seconds = Math.floor(t / 100) - (minutes * 60);
        var hundredths = (t - (seconds * 100)) - (minutes * 6000);

        if (hundredths < 10) {
            hundredths = "0" + hundredths;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds + "." + hundredths;
    }


});
