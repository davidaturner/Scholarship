print('Hello, World!')

# working with quotes
print('Giraffe\'s Academy')

# add new line
print('Giraffe\nAcademy')

print('Giraffe\Academy')

print('Giraffe/Academy')

phrase = 'Giraffe Academy'
iscool = 'is cool!'

# concatenation
print (phrase + ' ' + iscool)

# upper()
print(phrase + ' ' + iscool.upper())
# lower()
print(phrase.lower() + ' ' + iscool)
# islower() isupper()
isitcool = iscool.islower();
print(isitcool)
print(iscool.upper().isupper())

# length
print(len(iscool))

# access by index
print(iscool[0])
# get index of input string
print(iscool.index('o'))
print(iscool.index('s co'))

#replace string
print(iscool.replace('cool', 'not cool'))