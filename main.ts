function inputParameter () {
    basic.showString("a")
    basic.showNumber(a)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            a += -1
            basic.showNumber(a)
        } else if (input.buttonIsPressed(Button.B)) {
            a += 1
            basic.showNumber(a)
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(a)
    basic.showString("b")
    basic.showNumber(b)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            b += -1
            basic.showNumber(b)
        } else if (input.buttonIsPressed(Button.B)) {
            b += 1
            basic.showNumber(b)
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(b)
    basic.showString("c")
    basic.showNumber(c)
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            c += -1
            basic.showNumber(c)
        } else if (input.buttonIsPressed(Button.B)) {
            c += 1
            basic.showNumber(c)
        }
    }
    basic.clearScreen()
    basic.pause(200)
    basic.showNumber(c)
    basic.clearScreen()
}
function solve () {
    basic.showString("" + a + " " + b + " " + c)
    delta = b * b - 4 * (a * c)
    if (delta < 0) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showString("x1=" + (0 - b + Math.sqrt(delta)) / (2 * a))
        basic.showString("x2=" + (0 - b - Math.sqrt(delta)) / (2 * a))
    }
}
input.onPinPressed(TouchPin.P1, function () {
    inputParameter()
    solve()
})
let delta = 0
let b = 0
let c = 0
let a = 0
a = 1
c = 0
b = 0
delta = 0
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
