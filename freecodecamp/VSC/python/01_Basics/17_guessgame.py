secret_word = "giraffe"
guess = ""
tries = 0
limit = 3
no_more_tries = False

while guess != secret_word and no_more_tries == False:
    guess = input("Enter guess: ")
    tries += 1
    if tries >= limit:
        no_more_tries = True

if guess == secret_word:
    print("You are correct!")
else:
    print("Out of tries.")

# secret_word = "giraffe"
# guess = ""

# while guess != secret_word:
#     guess = input("Enter guess: ")

# print("That is correct!")
