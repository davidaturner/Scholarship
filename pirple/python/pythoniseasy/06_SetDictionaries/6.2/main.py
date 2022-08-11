BlackShoes = {42:2, 41:3, 40:4, 39:1, 38:0}
while True:

    print(BlackShoes)

    purchase = int(input("What size shoe do you want to buy? "))

    # if invalid break loop
    if (purchase<0):
        print("Not a valid request.")
        break

    # if zero value give an error otherwise reduce by 1
    if BlackShoes[purchase]>0:
        BlackShoes[purchase] -= 1
    else:
        print("Im sorry I have no shoe in that size.")