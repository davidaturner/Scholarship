import random

def get_choices():
    player_choice = input("Enter a choice (rock, paper, scissors): ")
    choices = ["rock", "paper", "scissors"]
    computer_choice = random.choice(choices)
    # computer_choice = "paper"
    choices = {"player": player_choice, "computer": computer_choice}
    print(f"You chose {player_choice}, computer chose {computer_choice}")

    print(check_if_player_wins(choices))

def check_if_player_wins(choices):

    pchoice = choices["player"]
    cchoice = choices["computer"]
    if (pchoice == cchoice):
        return "TIE"
    if (pchoice == "rock"):
        if (cchoice == "paper"):
            return "YOU LOSE"
        else:
            return "YOU WIN"
    if (pchoice == "paper"):
        if (cchoice == "scissors"):
            return "YOU LOSE"
        else:
            return "YOU WIN"
    if (pchoice == "scissors"):
        if (cchoice == "rock"):
            return "YOU LOSE"
        else:
            return "YOU WIN"

get_choices()