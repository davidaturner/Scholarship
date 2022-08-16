#Error handling Try Except

# good case
# try:
#     print('Hello')
# except:
#     print("Exception!")

#exception case
# try:
#     print(int('Hello'))
# except:
#     print("Exception!")

#exception pass case
# try:
#     print(int('Hello'))
# except:
#     pass

#exception catch case
try:
    print(int('Hello'))
except Exception as e:
    print(str(e))

# named exception case
# try:
#     value = 1/0
#     print(int('Hello'))
# except ValueError:
#     print("Got a value error")
# except:
#     print("Exception!")

# finally case
# try:
#     print(int('Hello'))
# except:
#     print("Got a value error")
# finally:
#     print("Finally, we are finishing...")

# try raise except case
test = 0
# try:
#     if test == 0:
#         print("test cannot be 0")
#         raise ValueError
# except ValueError:
#     print("ValueError: test cannot be 0")
# except:
#     print("Exception")

# try except and re-raise case
try:
    if test == 0:
        raise NameError("The name of the Game")
except ValueError:
    print("ValueError: test cannot be 0")
except NameError:
    raise
except Exception as e:
    print(str(e))
print("Finished!")