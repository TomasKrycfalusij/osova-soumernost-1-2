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
    smer = randint(2, 3)
} else if (y == 1 || 2 || 3) {
    smer = randint(1, 3)
} else if (y == 4) {
    smer = randint(1, 2)
}

// GVYTVARENI TROJUHELNIKU PODLE SMERU
if (smer == 1) {
    led.plot(x, y)
    for (i = 0; i < 2; i++) {
        x -= 1
        led.plot(x, y)
    }
    y -= 1
    x += 1
    led.plot(x, y)
}

