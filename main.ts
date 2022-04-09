let i: number;
let smer: number;
// OSA
let a = 2
let b = 0
let displej = 5
for (i = 0; i < displej; i++) {
    led.plotBrightness(a, b, 100)
    b += 1
}
// GENEROVANI ZACATKU A SMERU TROJUHELNIKU
led.setBrightness(255)
let x = 2
let y = randint(0, 4)
if (y == 0) {
    smer = 3
} else if (y == 1 || y == 2 || y == 3) {
    smer = randint(1, 3)
} else if (y == 4) {
    smer = 1
}

// 1 = smer nahoru
// 2 = smer rovne
// 3 = smer dolu
// VYTVARENI TROJUHELNIKU PODLE SMERU
function vytvareni_trojuhelniku() {
    let i: number;
    
    if (smer == 1) {
        led.plot(x, y)
        for (i = 0; i < 2; i++) {
            x -= 1
            led.plot(x, y)
        }
        y -= 1
        x += 1
        led.plot(x, y)
        y += 1
        // prehozeni na druhou stranu
        x += 3
        // ---------------------------------
        led.plot(x, y)
        for (i = 0; i < 2; i++) {
            x -= 1
            led.plot(x, y)
        }
        y -= 1
        x += 1
        led.plot(x, y)
        y += 1
        // prehozeni x, y do puvodnich pozic
        x -= 1
    } else if (smer == 2) {
        // -----------------------------------------
        led.plot(x, y)
        x -= 1
        y -= 1
        led.plot(x, y)
        for (i = 0; i < 2; i++) {
            y += 1
            led.plot(x, y)
        }
        x += 1
        y -= 1
        // ---------------------------------
        led.plot(x, y)
        x += 1
        y -= 1
        led.plot(x, y)
        for (i = 0; i < 2; i++) {
            y += 1
            led.plot(x, y)
        }
        x -= 1
        y -= 1
    } else if (smer == 3) {
        // -----------------------------------------
        led.plot(x, y)
        for (i = 0; i < 2; i++) {
            x -= 1
            led.plot(x, y)
        }
        y += 1
        x += 1
        led.plot(x, y)
        x += 3
        y -= 1
        // ---------------------------------
        led.plot(x, y)
        for (i = 0; i < 2; i++) {
            x -= 1
            led.plot(x, y)
        }
        y += 1
        x += 1
        led.plot(x, y)
        x -= 1
        y -= 1
    }
    
}

// ZABLIKANI
for (let o = 0; o < 3; o++) {
    vytvareni_trojuhelniku()
    basic.pause(1000)
    a = 2
    b = 0
    basic.clearScreen()
    for (i = 0; i < displej; i++) {
        led.plotBrightness(a, b, 100)
        b += 1
    }
    basic.pause(1000)
}
