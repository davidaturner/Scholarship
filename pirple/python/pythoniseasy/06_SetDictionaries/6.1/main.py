# Differences between a List and a Set
    # A set is underordered
    # A set has no duplicate elements
    # A list uses brackets; a set uses curly braces.

FirstExample = {"Element1", "Element1", "Element2", "Element4"}
print(FirstExample)
# Run py main.py - result
# {'Element2', 'Element4', 'Element1'}

CountryList = []
for i in range(5):
    Country = input("Enter country: ")
    CountryList.append(Country)

CountrySet = set(CountryList)
print(CountryList)
print(CountrySet)

# A Dictionary has a key value pair within curly braces
# Directory = {"key1" : "value", "key2" : "value2"}
# You can add a key simply by specifying an unknown key and value.

CountryDirectory = {}
for c in CountryList:
    if c in CountryDirectory:
        CountryDirectory[c] += 1
    else:
        CountryDirectory[c] = 1
print(CountryDirectory)
