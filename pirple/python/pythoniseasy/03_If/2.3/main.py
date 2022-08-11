Time = "Night"
Sleepy = False
Pajamas = "Unknown"
print(Pajamas)

# Time = "Night"

Sleepy = True

# if Time == 'Night' and Sleepy == True:
#     Pajamas = "On"
if Time == "Night" and Sleepy == True:
    Pajamas = "On"
elif Sleepy == True:
    Pajamas = "On Anyway"
else:
    Pajamas = "Unknown"

print(Pajamas)