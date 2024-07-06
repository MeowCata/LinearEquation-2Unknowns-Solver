function inputParameter () {
    basic.showString("a")
    showNumber(a)
    while (!(input.buttonIsPressed(Button.A))) {
        if (input.pinIsPressed(TouchPin.P0)) {
            a += -1
            if (a == 0) {
                a = -1
            }
            showNumber(a)
        } else if (input.pinIsPressed(TouchPin.P2)) {
            a += 1
            if (a == 0) {
                a = 1
            }
            showNumber(a)
        }
    }
    basic.pause(200)
    showNumber(a)
    basic.showString("b")
    showNumber(b)
    while (!(input.buttonIsPressed(Button.A))) {
        if (input.pinIsPressed(TouchPin.P0)) {
            b += -1
            showNumber(b)
        } else if (input.pinIsPressed(TouchPin.P2)) {
            b += 1
            showNumber(b)
        }
    }
    basic.pause(200)
    showNumber(b)
    basic.showString("c")
    showNumber(c)
    while (!(input.buttonIsPressed(Button.A))) {
        if (input.pinIsPressed(TouchPin.P0)) {
            c += -1
            showNumber(c)
        } else if (input.pinIsPressed(TouchPin.P2)) {
            c += 1
            showNumber(c)
        }
    }
    basic.pause(400)
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
        basic.showString("d=" + delta)
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
input.onButtonPressed(Button.B, function () {
    inputParameter()
    solve()
})
function showNumber (number: number) {
    if (number >= 0) {
        basic.showNumber(number)
    } else {
        basic.showString("-")
        basic.showNumber(0 - number)
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
