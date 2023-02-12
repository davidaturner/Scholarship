# proportions:

# n1 / d1 = n2 / d2
# if true then you can figure out one unknown on one of the proportions (fraction)

# assume you know n1 and n2 (first proportion).
# assume the unknown has a value of zero. but you know the 2nd value.
n1 = 1
d1 = 2
n2 = 16
d2 = 0

if n2==0:
    answer = d2 * n1 / d1
    print("n2 = ", answer)

if d2==0:
    answer = n2 * d1 / n1
    print("d2 = ", answer)