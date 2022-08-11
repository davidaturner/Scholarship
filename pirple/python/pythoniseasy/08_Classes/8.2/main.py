# Class template

# class ClassName:
#     def __init__(self): #this overrides the base __init__
#         self.attribute = 0

#     def AFunction(self):
#         action(s)

class Player:
    def __init__(self, firstName="NaN", lastName="NaN"):
        self.firstName=firstName
        self.lastName=lastName
        self.gamesPlayed=0
    def setGamesPlayed(self,gamesPlayed):
        self.gamesPlayed = gamesPlayed

Archie = Player("Archie", "Cox")
print(Archie.firstName + " " + Archie.lastName)

# class InheritedClass(ParentClass):
#     def __init__(self, attribute1, attribute2):
#         ParentClass.__init__(self)
#         self.attribute1 = attribute1
#         self.attribute2 = attribute2
#         self.attribute3 = 0
#     def AnotherProcedure(self):
#         Actions()

TeamType = ["Basketball", "Football", "Baseball", "Tennis"]
# class TeamPlayer(Player):
#     def __init__(self, firstName, lastName):
#         Player.__init__(self, firstName, lastName)

class TeamPlayer(Player):
    def __init__(self, firstName, lastName, teamName, teamLocation):
        Player.__init__(self, firstName, lastName)
        self.teamName = teamName
        self.teamLocation = teamLocation
        self.teamType = "NaN"
    def setTeamType(self, typeIndex):
        i = int(typeIndex)
        self.teamType = TeamType[i]

# TeamPlayer1 = TeamPlayer()
TeamPlayer1 = TeamPlayer("Crass", "Thimble", "Pirates", "Pittsburgh")
TeamPlayer1.setTeamType(2)
print(TeamPlayer1.teamType)
