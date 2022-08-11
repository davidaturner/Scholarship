# Tic tac toe (board building and user input and placement)
#  / /  0
# ----- 1
#  / /  2
# ----- 3
#  / /  4
# 12345

def drawBoard(field):
    for row in range(5):
        if row%2 == 0:
            valueRow = int(row/2)
            for column in range(5):
                if column%2 == 0:
                    valueColumn = int(column/2)
                    if column != 4:
                        print(field[valueRow][valueColumn], end="")
                        # print(field[valueRow][valueColumn])
                        # print("O", end="")
                    else:
                        print(field[valueRow][valueColumn])
                        # print("O")
                else:
                    print("|", end="")
        else:
            print("-----")

# drawBoard()
Player = 1
currentField = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
drawBoard(currentField)
while(True):
    print("Players Turn: ", Player)
    MoveRow = int(input("Please enter the row: "))
    MoveColumn = int(input("Please enter the column: "))
    if Player == 1:
        if currentField[MoveRow][MoveColumn] == " ":
            currentField[MoveRow][MoveColumn] = "X" #outer list then inner list
            Player = 2
    else:
        if currentField[MoveRow][MoveColumn] == " ":
            currentField[MoveRow][MoveColumn] = "O" #outer list then inner list
            Player = 1
    drawBoard(currentField)