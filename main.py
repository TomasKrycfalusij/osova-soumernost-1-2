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

#1 = smer nahoru
#2 = smer rovne
#3 = smer dolu

#GVYTVARENI TROJUHELNIKU PODLE SMERU
def vytvareni_trojuhelniku():
    global x, y
    if smer == 1:
        led.plot(x, y)
        for i in range(2):
            x -= 1
            led.plot(x, y)
        y -= 1
        x += 1
        led.plot(x, y)
        x += 1
        y += 1
    if smer == 3:
        led.plot(x, y)
        for i in range(2):
            x -= 1
            led.plot(x, y)
        y += 1
        x += 1
        led.plot(x, y)
        x += 1
        y -= 1
    
#ZABLIKANI
for o in range(3):
    vytvareni_trojuhelniku()
    basic.pause(1000)
    a = 2
    b = 0
    basic.clear_screen()
    for i in range(displej):
        led.plot_brightness(a, b, 100)
        b += 1
    basic.pause(1000)
 


