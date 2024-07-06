input.onPinPressed(TouchPin.P0, function () {
    inputParameter()
    solve()
})
function inputParameter () {
    basic.showString("a")
    basic.showNumber(a)
    while (!(input.pinIsPressed(TouchPin.P2))) {
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
    while (!(input.pinIsPressed(TouchPin.P2))) {
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
    while (!(input.pinIsPressed(TouchPin.P2))) {
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
        basic.pause(1000)
        basic.clearScreen()
    } else if (Math.sqrt(delta) % 1 != 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        x1 = (0 - b + Math.sqrt(delta)) / (2 * a)
        x2 = (0 - b - Math.sqrt(delta)) / (2 * a)
        if (x1 % 1 == 0 && x2 % 1 == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(200)
            basic.showString("x1=" + x1)
            basic.showString("x2=" + x2)
        } else {
            basic.showLeds(`
                . # . # .
                # # . # #
                . . . . .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            if (x1 % 1 == 0) {
                basic.showString("x1=" + x1)
            } else {
                temp1 = 0 - b + Math.sqrt(delta)
                temp2 = 2 * a
                basic.showString("x1=" + temp1 + "/" + temp2)
            }
            if (x2 % 1 == 0) {
                basic.showString("x2=" + x2)
            } else {
                temp1 = 0 - b - Math.sqrt(delta)
                temp2 = 2 * a
                basic.showString("x2=" + temp1 + "/" + temp2)
            }
        }
    }
}
let temp2 = 0
let temp1 = 0
let x2 = 0
let x1 = 0
let delta = 0
let b = 0
let c = 0
let a = 0
a = 1
c = 0
b = 0
delta = 0
x1 = 0
x2 = 0
temp1 = 0
temp2 = 0
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
