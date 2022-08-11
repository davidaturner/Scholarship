Name = input("Enter your name: ")
print(Name)

strAge = input("Enter your age: ")
print(strAge)

strOne = input("Enter a 1: ")
print(strAge+strOne)

Age = int(strAge)
print(Age+1)

AltAge = int( input("Enter an alternative age: "))
print(AltAge+100)

print("Convert to strs.")
print(str(Age) + str(AltAge))

print("Storing a set of scores")
Scores =[]
for i in range(5):
    currentScore = int(input("Enter a score: "))
    Scores.append(currentScore)
print(Scores)

print("Storing a set of scores")
Scores =[]
for i in range(5):
    currentScore = int(input("Enter score " + str(i + 1) + ": "))
    Scores.append(currentScore)
print(Scores)

print("Storing a set of floats")
Scores =[]
for i in range(5):
    currentScore = float(input("Enter score " + str(i + 1) + ": "))
    Scores.append(currentScore)
print(Scores)

# def Function(input):
#     action

# Note that whitespace is added in the print in this format.
def PrintScore(score):
    # print("The score you entered:\n" + str(score) + " Nice!")
    print("The score you entered:\n",score,"Nice!\n")

print("Storing a set of scores")
Choices = ["first", "second", "third", "fourth", "fifth"]
Scores =[]
for i in range(5):
    currentScore = float(input("Enter your " + Choices[i] + " float: "))
    PrintScore(currentScore)
    Scores.append(currentScore)
print(Scores)
