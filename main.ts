// Putting both microbits on the same channel
radio.setGroup(1)

// List of actions
let actionsList = ["time", "brghtns", "R", "G", "B", "day", "year"]

// Ways to change the action and value
let increment = 1
let scroll = 0
let action = actionsList[scroll]
let value = 0

// Ready to use sign
basic.showLeds(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)

// Send action with value
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let index = 0; index < Math.abs(value); index++) {
        radio.sendValue(action, increment)
    }

    // Confirmation
    basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
})

// Changing neg/pos
input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    increment = increment * -1

    // Showing new increment value
    if (increment == -1){
        basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    }
    if (increment == 1) {
        basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    }
})

// Changing the value
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    value = value + increment
})

//  Changing the action
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    scroll ++
    scroll = scroll % actionsList.length
    action = actionsList[scroll]

    // Displaying an icon to indicate the current action
    if (scroll == 0){
        basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    } 
    if (scroll == 1) {
        basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    }
    if (scroll == 2) {
        basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # . # . .
        # . . # .
        `)
    }
    if (scroll == 3) {
        basic.showLeds(`
        # # # # .
        # . . . .
        # . # # #
        # . . # .
        # # # # .
        `)
    } if (scroll == 4) {
        basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    }
    if (scroll == 5) {
        basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    } 
    if (scroll == 6) {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    }

})

