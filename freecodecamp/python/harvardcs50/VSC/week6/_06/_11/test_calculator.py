from calculator import square

def main():
    test_square()

# def test_square():
#     if square(2) != 4:
#         print("2 squared is not 4")
#     if square(3) != 9:
#         print("3 squared is not 9")
# # Why did square(3) fail but not square(2)
    
def test_square():
    try:
        assert square(2) == 4
    except AssertionError:
        print("2 squared is not 4")
    try:
        assert square(3) == 9
    except AssertionError:
        print("3 squared is not 9")
    try:
        assert square(-2) == 4
    except AssertionError:
        print("-2 squared is not 4")
    try:
        assert square(-3) == 9
    except AssertionError:
        print("-3 squared is not 9")
    try:
        assert square(0) == 0
    except AssertionError:
        print("0 squared is not 0")

# Enter pytest! 3rd party (easier than python's version)
        
main()