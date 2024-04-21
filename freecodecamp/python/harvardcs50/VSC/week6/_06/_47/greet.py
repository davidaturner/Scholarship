import sys

def main():
    name = input("Name? ")
    print(greet())


def greet(name = "World"):
    return f"Hello, {name}"

if __name__ == "__main__":
    main()
