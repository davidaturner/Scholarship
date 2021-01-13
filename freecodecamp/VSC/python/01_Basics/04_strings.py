print("Giraffe Academy")
print("Giraffe\nAcademy")
print("Giraffe \"Academy\"")
giraffe_academy = "Giraffe Academy"
print(giraffe_academy)
is_cool = " is cool!"
print(giraffe_academy + is_cool)
# string operations
print(giraffe_academy.lower())
print(giraffe_academy.upper())

upper_giraffe = giraffe_academy.upper()
is_upper = upper_giraffe.isupper()
print(is_upper)

print(len(upper_giraffe))
print(upper_giraffe[0])
print(upper_giraffe[1])
print(upper_giraffe[2].lower())

print(upper_giraffe.index("G"))
print(upper_giraffe.index("A"))  # first occurrence
# print(upper_giraffe.index("a"))
print(upper_giraffe.index("ACADEMY"))

print(upper_giraffe.replace("GIRAFFE", "Elephant"))
print(upper_giraffe.lower())
