from greet import greet

# keep tests SIMPLE. no testing the test.
# putting into test directory
# mkdir test
# create empty file in test directory. __init__.py
# then run: pytest test

def test_david():
    assert greet("David") == "Hello, David"

def test_arguments():
    for name in {"Hermoine", "Harry", "Beastly"}:
        assert greet(name) == f"Hello, {name}"

def test_default():
    assert greet() == "Hello, World"