class Player:
    def __init__(self, name, hand = [], money = 100):
        self.name = name
        self.hand = hand
        self.money = money
        self.score = 0
        self.betAmount = 0

    # print(Player)
    def __str__(self):
        currentHand = "hand: "
        for card in self.hand:
            currentHand += str(card) + " " 
        return str(self.name) + " | " + currentHand + "score: " + str(self.score) + " money: " + str(self.money) + " bet: " + str(self.betAmount)

    def setScore(self):
        self.score = 0
        FaceCardsDict = {"A":11, "J":10, "Q":10, "K":10}
        aces = 0
        for card in self.hand:
            if card == "A":
                aces += 1
            # fix calculation of self.score
            if card in FaceCardsDict:
                self.score += FaceCardsDict[card]
            elif int(card) >= 2 and int(card) <= 9:
                self.score += int(card)
        while aces >= 1 and self.score > 21:
            aces -= 1
            self.score -=10
        return self

    def setHand(self, hand):
        self.hand = hand
        return self

    def newHand(self):
        self.hand = []
        self.score = 0
        return self

    def hit(self, hand):
        self.hand.append(hand)
        return self

    # do not label a variable the same as a function
    def bet(self, amount):
        self.money -= amount
        self.betAmount += amount
        # self.bet += amount
        return self

    def win(self, isWinner):
        if isWinner == True:
            # blackjack is score 21 with only two cards in the hand
            if self.score == 21 and len(self.hand) == 2:
                self.money += 2.5*self.betAmount
            else:
                self.money += 2*self.betAmount
        self.betAmount = 0
        return self

# ann = Player("ann", ["3", "7", "5"]).setScore()
ann = Player("ann")
print(ann)
ann.bet(20)
print("ann bets...",ann.betAmount, " money left:", ann.money)
ann.setHand(["3", "7", "5"])
print(ann)
print("ann hits...")
print(ann.hit("A").setScore())
print("ann hits...")
print(ann.hit("A").setScore())
print("ann wins!")
ann.win(True)
print(ann)
# ann plays another hand
print("new hand...")
ann.newHand()
print(ann)
ann.bet(20)
print("ann bets...", ann.betAmount, " money left:", ann.money)
ann.setHand(["Q", "A"]).setScore()
print(ann)
print("ann wins blackjack!")
ann.win(True)
print(ann)

# thomas = Player("thomas", ["Q", "A"]).setScore()
# print(thomas)
# thomas.bet(20)
# print("betting...",thomas.betAmount, " money left:", thomas.money)
# thomas.win(True)
# print(thomas)


            


