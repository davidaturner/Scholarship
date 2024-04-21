from calculator import square

# def main():
    # test_square()

# def test_square():
#     if square(2) != 4:
#         print("2 squared is not 4")
#     if square(3) != 9:
#         print("3 squared is not 9")
# # Why did square(3) fail but not square(2)
    
# def test_square():
#     assert square(2) == 4
#     assert square(3) == 9
#     assert square(-2) == 4
#     assert square(-3) == 9
#     assert square(0) == 0

# Enter pytest! 3rd party (easier than python's version)
# py -m pip install pytest
# pytest test_calculator.py

# assert stops at the first failure, so break up the testing.
def test_positive():
    assert square(2) == 4
    assert square(3) == 9

def test_negative():
    assert square(-2) == 4
    assert square(-3) == 9

def test_zero():
    assert square(0) == 0

# main()