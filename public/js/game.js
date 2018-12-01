// var board = [[], []];
var moles = 5;
var gridSize = 25;
// DIFFICULTY SETTINGS (database) CORRESPOND TO DIFFERENT SIZES / TOTAL MOLES

function randomize() {
    var moleIndexes = [];
    for (i=0; i<moles; i++) {
        moleIndexes.push(Math.floor(Math.random() * Math.floor(gridSize)));
    }
    return moleIndexes;
}

function placeMoles() {
    var moleIds = randomize();
    for (i=0; i<moleIds.length; i++) {

    }
}

// $(".circle").css("filter", "hue-rotate(-120deg)")

//randomly choose three id #s
//set the data-lit of chosen elements to true
//set the filter on data-lit == true elements to 0% (red)
//on click of data-lit == true elements, set to false, decrement moles, and repeat steps until no moles left