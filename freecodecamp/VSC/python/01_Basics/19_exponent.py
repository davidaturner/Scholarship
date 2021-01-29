
def raise_tothepower(base, power):
    result = 1
    for index in range(power):
        result = result * base
    return result


print(raise_tothepower(3, 2))
