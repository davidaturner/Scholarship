dayInTheWeek = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",

}

i = 1
while(i < 8):
    print(str(i) + ": " + dayInTheWeek.get(i))
    i += 1
print("DONE!")
