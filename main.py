#OSA
a = 2
b = 0
displej = 5
for i in range(displej):
    led.plot_brightness(a, b, 100)
    b += 1

#GENEROVANI ZACATKU A SMERU TROJUHELNIKU
led.set_brightness(255)
x = 2
y = randint(0, 4)
if y == 0:
    smer = randint(2, 3)
elif y == 1 or 2 or 3:
    smer = randint(1, 3)
elif y == 4:
    smer = randint(1, 2)

#GVYTVARENI TROJUHELNIKU PODLE SMERU
if smer == 1:
    led.plot(x, y)
    for i in range(2):
        x -= 1
        led.plot(x, y)
    y -= 1
    x += 1
    led.plot(x, y)
