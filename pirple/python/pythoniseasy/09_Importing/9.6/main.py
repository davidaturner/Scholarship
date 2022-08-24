from random import random
from time import perf_counter

def convertToMilliseconds(seconds):
    converted = 0.0
    try:
        converted = float("{:.6f}".format(float(seconds)*1000000))
        # converted = float(seconds)*1000000
        # float("{:.1f}".format(convertToMilliseconds(0.000233422)))
    except:
        print("Unable to convert performance.")
    return converted

# inms = convertToMilliseconds(0.000233422)
# print(float("{:.1f}".format(inms)), "ms")

correct = random() #float from 0.0 to 1.0

startTime = perf_counter()
upper = 1.0
lower = 0.0
while(True):
    guess = (upper + lower) / 2
    if guess == correct:
        break
    elif guess < correct:
        lower = guess
    else:
        upper = guess 
     
endTime = perf_counter()
timeStarted = convertToMilliseconds(startTime)
timeEnded = convertToMilliseconds(endTime)
timeElapsed = convertToMilliseconds(endTime - startTime)
# timeElapsed = float("{:.9f}".format(0.000233422))
print(f"The guess was : {guess}")
print(f"Time to solve: Start: {startTime} s")
print(f"Time to solve: End: {endTime} s")
print(f"Total time elapsed: {timeElapsed} us")
