#OSA
a = 2
b = 0
displej = 5
for i in range(displej):
    led.plot_brightness(a, b, 100)
    b += 1

#TROJUHELNIKY
led.set_brightness(255)
x = 2
y = randint(0, 4)
if y == 0:
    smer = randint(2, 3)
elif y == 1 or 2 or 3:
    smer = randint(1, 3)
elif y == 4:
    smer = randint(1, 2)