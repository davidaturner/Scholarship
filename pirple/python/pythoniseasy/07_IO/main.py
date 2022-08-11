from ast import Or


class Participant:
    def __init__ (self, name, placeOfOrigin, age):
        self.name = name
        self.placeOfOrigin = placeOfOrigin
        self.age = age

    def __repr__ (self):
        return f"{self.name} of {self.placeOfOrigin}, age: {self.age}"

def getParticipants(numberOfParticipants):
    participants = []
    count = 0
    while( count < numberOfParticipants ):
        name = input("Enter name: ")
        placeOfOrigin = input("Enter place of origin: ")
        age = input("Enter age: ") 

        participant = Participant(name, placeOfOrigin, age)
        print("Adding to list: " + str(participant))
        participants.append(participant)
        count = count + 1
    return participants

def toList(participants):
    participantlist = []
    for participant in participants:
        participantdata = []
        participantdata.append(participant.name)
        participantdata.append(participant.placeOfOrigin)
        participantdata.append(participant.age)
        participantlist.append(participantdata)
    return participantlist

def toFile(participants):
    OutputFile = open("ParticipantData.txt", "w")

    for participant in participants:
        OutputFile.write(f'{participant.name} ')
        OutputFile.write(f'{participant.placeOfOrigin} ')
        OutputFile.write(f'{participant.age}\n')

    OutputFile.close()

def getParticipantsFromFile(filename):
    InputFile = open(filename, "r")
    participantlist = []

    for participantline in InputFile:
        participantdata = participantline.strip("\n").split()
        participant = Participant(participantdata[0],participantdata[1],participantdata[2])
        participantlist.append(participant)

    InputFile.close()
    return participantlist

def compileParticipantAges(participants):
    aged = {}
    for participant in participants:
        age = participant.age
        if age in aged:
            aged[age] += 1
        else:
            aged[age] = 1
    return aged

def totalPlacesAttended(participants):
    places = {}
    for participant in participants:
        place = participant.placeOfOrigin
        if place in places:
            places[place] += 1
        else:
            places[place] = 1
    return places


def findOldest(aged):
    oldest = 0
    for age in aged:
        if int(age) > oldest:
            oldest = int(age)
    return oldest

def findYoungest(aged):
    youngest = 0
    for age in aged:
        if (int(age) < youngest) or (youngest == 0):
            youngest = int(age)
    return youngest

def findMostOccurring(aged):
    counter = 1
    the_aged = 0
    for age in aged:
        if aged[age] > counter:
            counter = aged[age]
            the_aged = age
    return the_aged
# Main
# NumberOfParticipants = 3
# Participants = getParticipants(NumberOfParticipants)

# print(Participants)
# print(toList(Participants))
# toFile(Participants)

Participants = getParticipantsFromFile("ParticipantData.txt")
print(Participants)
ParticipantList = toList(Participants)
print(ParticipantList)
ParticipantAges = compileParticipantAges(Participants)
print(ParticipantAges)

print(findOldest(ParticipantAges))
print(findYoungest(ParticipantAges))
mostOccurring = findMostOccurring(ParticipantAges)
print("The most occurring age is:",mostOccurring,"occurring",ParticipantAges[mostOccurring],"time(s)!")
print(totalPlacesAttended(Participants))