import random
# from random import choice

# # coin = random.choice(["heads", "tails"])
# coin = choice(["heads", "tails"])
# print(coin)

print(random.randint(1,10))
print(random.randint(1,10))
print(random.randint(1,10))

cards = ["jack", "queen", "kings"]
for i in range(10):
    random.shuffle(cards)
    print(cards)