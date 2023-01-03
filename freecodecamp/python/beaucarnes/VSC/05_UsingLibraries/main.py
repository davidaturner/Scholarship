import random

def get_choices():
    player_choice = input("Enter a choice (rock, paper, scissors): ")
    choices = ["rock", "paper", "scissors"]
    computer_choice = random.choice(choices)
    # computer_choice = "paper"
    choices = {"player": player_choice, "computer": computer_choice}
    print(f'You chose: {choices["player"]}, computer chose: {choices["computer"]}')  
    # return choices

get_choices()