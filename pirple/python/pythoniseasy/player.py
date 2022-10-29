from deck import CardDeck

class Player:
    def __init__(self, name, money = 0, hand = []):
        self.name = name
        self.hand = hand
        self.score = 0

        self.money = money
        # if betAmount not set- assume house or dealer
        self.betAmount = 0

    # print(Player)
    def __str__(self):
        return self.printHand()

    def printHand(self):
        currentHand = "hand: "
        for card in self.hand:
            currentHand += card + " "
        message = str(self.name) + " | " + currentHand + "score: " + str(self.score)
        if self.isDealer():
            return message
        return  message + " money: " + str(self.money) + " bet: " + str(self.betAmount)

    def printDealer(self):
        isHole = True
        currentHand = "hand: "
        for card in self.hand:
            if isHole == True:
                currentHand += "X" + " "
                isHole = False
            else:
                currentHand += card + " " 
        return str(self.name) + " | " + currentHand + "score: ?"

    def isBusted(self):
        return self.score > 21

    def hasBlackjack(self):
        return self.score == 21 and len(self.hand) == 2

    def isPushed(self, score):
        return self.score == score

    def isDealer(self):
        return self.money == 0 and self.betAmount == 0

    def clearHand(self):
        self.hand = []
        self.score = 0
        return self

    # do not label a variable the same as a function
    def bet(self, amount):
        if self.money >= amount:
            self.money -= amount
            self.betAmount += amount
        else:
            self.betAmount = self.money
            self.money = 0
        return self

    def pushes(self):
        self.money += self.betAmount
        self.betAmount = 0
        return self

    def loses(self):
        self.betAmount = 0
        return self

    def wins(self):
        if self.hasBlackjack():
            self.money += 2.5*self.betAmount
        else:
            self.money += 2*self.betAmount
        self.betAmount = 0
        return self

    # def win(self, isWinner):
    #     if isWinner == True and self.score <= 21:
    #         # blackjack is score 21 with only two cards in the hand
    #         if self.score == 21 and len(self.hand) == 2:
    #             self.money += 2.5*self.betAmount
    #             return True
    #         else:
    #             self.money += 2*self.betAmount
    #             return True
    #     self.betAmount = 0
    #     return False

def firstDrawforPlayer(player, draws, deck):
    player.clearHand()
    player.hand = deck.drawHand(draws)
    player.score = deck.scoreHand(player.hand)
    if player.isDealer():
        print(player.printDealer())
    else:
        print(player)

def evaluateHand(player):
    if player.isBusted():
        print(player.name,"busts!")
    else:
        print(player.name,"is standing at " + str(player.score) + ".")

def blackjack(player, house):
    if player.hasBlackjack():
        print(player.name, "has blackjack!")
        if house.hasBlackjack():
            print(house.name, "has blackjack!")
            print(house)
            # print("It's a push!")
            # player.pushes()
        # else:
        #     print(player.name, "wins!")
        #     player.wins()
        return True
    elif house.hasBlackjack():
            print(house.name, "has blackjack!")
            print(house)
            # print(player.name, "loses")
            # player.loses()
            return True
    if house.isDealer() and deck.hasAceOrTen(house.hand):
        print("No blackjack!")
    return False

def playersTurn(player):
    player.printHand()
    while player.score <= 21:
    # while True:
        playerinput = input(player.name+", do you want another card? (y/n): ")
        if playerinput == "y":
            player.hand.append(deck.draw())
            player.score = deck.scoreHand(player.hand)
            print(player)
        else:
            break
    evaluateHand(player)

def dealersTurn(dealer):
    # print(dealer)
    while dealer.score < 17:
        dealer.hand.append(deck.draw())
        dealer.score = deck.scoreHand(dealer.hand)
        # print(dealer)
    print(dealer)
    evaluateHand(dealer)

def playHand(deck, player, dealer):
    bet = int(input(player.name+", please enter your bet ("+str(player.money)+"): "))
    player.bet(bet)

    firstDrawforPlayer(player, 2, deck)
    firstDrawforPlayer(dealer, 2, deck)

    if not blackjack(player, dealer):
        playersTurn(player)
        dealersTurn(dealer)

    if player.isBusted():
        if dealer.isBusted():
            print("It's a push!")
            player.pushes()
        else:
            print(player.name, "loses.")
            player.loses()
    else:
        if dealer.isBusted() or player.score > dealer.score:
            print(player.name, "wins!")
            player.wins()
        elif player.score == dealer.score:
            print("It's a push!")
            player.pushes()
        else:   
            print(player.name, "loses.")       
            player.loses()
    print(player.name+ " money: "+str(player.money))
    return True

# Play Blackjack!
deck = CardDeck().createDeck()
# print(deck)

p1 = input("please enter your name: ")
p1money = int(input("please enter the pot: "))
player1 = Player(p1, p1money)
house = Player("house")

while True and int(player1.money) > 0:
    print("cards left:", len(deck.cards))
    if len(deck.cards) < 20:
        print("creating a new deck...")
        deck = CardDeck().createDeck()
  
    playHand(deck, player1, house)
    if int(player1.money) > 0:
        userinput = input("\nwould you like to play again, " + player1.name + "? (y/n): ")
        if not userinput == "y":
            break
print("Have a good evening, sir!")

