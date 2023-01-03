def get_choices():
    player_choice = "rock"
    computer_choice = "paper"
    
    choices = {"player" : player_choice, "computer" : computer_choice}
    return choices

choices = get_choices()
print(f'Player chose: {choices["player"]}. Computer chose: {choices["computer"]}')


dict = {"name" : "beau carnes", "choices" : choices}
print(dict)