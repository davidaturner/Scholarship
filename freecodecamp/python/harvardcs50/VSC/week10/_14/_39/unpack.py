# unpacking
first, last = input("What is your name? ").split(" ")
print(f"Hello {first}")

def convertToKnuts(galleons, sickles, knuts):
    return (galleons * 17 + sickles) * 29 + knuts

# # print(convertToKnuts(100, 50, 25), "Knuts")
# coins = [100, 50, 25]

# # print(convertToKnuts(coins[0], coins[1], coins[2]), "Knuts")
# print(convertToKnuts(*coins), "Knuts")

# print(convertToKnuts(galleons=100, sickles=50, knuts=25), "Knuts")

coins = {
    "galleons" : 100,
    "sickles" : 50,
    "knuts" : 25
}

# print(convertToKnuts(coins["galleons"], coins["sickles"], coins["knuts"]), "Knuts")
print(convertToKnuts(**coins), "Knuts")