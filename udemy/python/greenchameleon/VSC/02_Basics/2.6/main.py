#print formatting
print(1.23 + 2.80) #4.029999999999999

#getting around approx errors due to limitation of lang (ie. C)

# method 1: convert to integers then divide.
print((123 + 280) / 100) #4.03

#method 2: use round() - expression/variable, number of decimals to round to.
print( round(1.23 + 2.80, 2)) #4.03
