class Player:
    def __init__(self, name, money = 100, hand = []):
        self.name = name
        self.hand = hand
        self.money = money
        self.score = 0

    # print(Player)
    def __str__(self):
        currentHand = "hand: "
        for card in self.hand:
            currentHand += str(card) + " " 
        return str(self.name) + " | " + currentHand + "score: " + str(self.score) + " money: " + str(self.money)

    def setScore(self):
        self.score = 0
        FaceCardsDict = {"A":11, "J":10, "Q":10, "K":10}
        aces = 0
        for card in self.hand:
            if card == "A":
                aces += 1
            if isinstance(card, int):
                self.score += card
            elif card in FaceCardsDict:
                self.score += FaceCardsDict[card]
        while aces >= 1 and self.score > 21:
            aces -= 1
            self.score -=10
        return self

    def setHand(self, hand):
        self.hand = hand
        return self

    def addToHand(self, hand):
        self.hand.append(hand)
        return self

    def bet(self, money):
        self.money -= money
        return self

    def win(self, money):
        self.money += money
        return self

print("new deal!")
print("pete and annie bets $5")
print("dealer deals")
pete = Player("Peter", 100).bet(5)
pete.addToHand(2)
pete.addToHand(9)
pete.setScore()
print(pete)
annie = Player("Annie", 100, [2, 9]).bet(5).setScore()
print(annie)
dealer = Player("Dealer", 100, ["J", "Q"]).setScore()
print(dealer)
print("pete hits!")
pete.addToHand("K").setScore()
print(pete)
print("annie hits!")
annie.addToHand(2).setScore()
print(annie)
print("dealer stands")
print("peter stands")
print("annie hits!")
annie.addToHand(5).setScore()
print(annie)
print("dealer stands")
print("annie stands")
print("checking scores...")
print("peter wins!")
pete.win(35)
print(pete)
print(annie)
print(dealer)

            


