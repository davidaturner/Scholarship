# guess the secret word.
# you only have 3 guesses.
guesses_left = 3
out_of_guesses = False
secret_word = "Swordfish"
guess = ""
while guess != secret_word and not out_of_guesses:
    guess = input("Guess the secret word: ")
    guesses_left -= 1
    if guesses_left <= 0:
        out_of_guesses = True
        continue
    if guess != secret_word and not out_of_guesses:
        print(f"Not the secret word! You got {guesses_left} guess(es) remaining.")

if guess == secret_word:
    print("You've guessed the secret word!")
else:
    print("Oh. So sorry. You're out of guess. You lose.")