let aleatorio = 0
input.onButtonPressed(Button.A, function () {
    aleatorio = randint(1, 6)
    if (aleatorio == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (aleatorio == 2) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (aleatorio == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (aleatorio == 4) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            `)
    } else if (aleatorio == 5) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            . . . . .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    }
    basic.pause(100)
})
basic.forever(function () {
	
})
