def main():
    x = int(input("What's x? "))
    isEven = is_even(x)
    if isEven == True:
        print("x is Even")
    else:
        print("x is Odd")

def is_even(x):
    # if x % 2 == 0:
    #     return True
    # else:
    #     return False

    # return True if x % 2 == 0 else False

    return (x % 2 == 0)
    
main()