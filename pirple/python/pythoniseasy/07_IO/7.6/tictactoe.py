# Tic tac toe (board building and user input and placement)
#  / /  0
# ----- 1
#  / /  2
# ----- 3
#  / /  4
# 12345

def drawBoard():
    for row in range(5):
        if row%2 == 0:
            for column in range(5):
                if column%2 == 0:
                    if column != 4:
                        print(" ", end="")
                    else:
                        print(" ")
                else:
                    print("|", end="")
        else:
            print("-----")

# drawBoard()
Player = 1
currentField = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
while(True):
    print("Player: ", Player)
    MoveRow = int(input("Please enter the row: "))
    MoveColumn = int(input("Please enter the column: "))
    if Player == 1:
        currentField[MoveRow][MoveColumn] = "X" #outer list then inner list
        Player = 2
    else:
        currentField[MoveRow][MoveColumn] = "O" #outer list then inner list
        Player = 1
    print(currentField)