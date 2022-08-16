try:
    # value = 1/0
    number = int(input("Enter a number: "))
    print(number)
# except:
#     print("Invalid input")
except ZeroDivisionError:
    print("Attempting to divide by zero.")
except ValueError:
    print("Invalid input")
