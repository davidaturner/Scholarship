Participant = ["Jan", "Fran", "Tina", "Carl", "John"]
position = 1
for name in Participant:
    if name == "Tina":
        break
    position += 1
print(position)

index = 0
while index <= len(Participant):
    if (Participant[index] == "Tina"):
        break
    index += 1
print(index)
print(Participant[index])

position = 1
for p in range(len(Participant)):
    if (Participant[p] == "Tina"):
        break;
    position += 1
print(index)
print(Participant[position-1])

Divisiblebythree = []
for number in range(10):
    print(number)
    if (number%3 != 0):
        print("Not Divisible By Three")
        continue
    print("Divisible By Three")
    Divisiblebythree.append(number)
print("Divisible By Three:")
print(Divisiblebythree)