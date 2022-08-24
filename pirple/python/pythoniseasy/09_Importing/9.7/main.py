# guessing guess
# set the correct guess.
# ask user to guess a number between 0 and 100
# if correct, print "You guessed correct with:" and the correct guess.
# if not correct print "Higher" if guess < correct
# else print "Lower" if guess > correct

#import random
from random import randint

correct = randint(0, 100)
# correct = 65

# the while true loop suggest that the user
# will eventually get the right answer or will Cntrl out
# out of the game. A good first draft though.
while (True):
    guess = int(input("Enter your guess: "))
    if guess == correct:
        # print(f"You guessed correctly with: {guess}!")
        break
    elif guess < correct:
        print(f"Higher!")
    else:
        print(f"Lower!")

print(f"You guessed correctly with: {guess}!")
