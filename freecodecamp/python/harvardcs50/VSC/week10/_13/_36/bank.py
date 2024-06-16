#globals
balance = 0

def main():
    print(balance)
    deposit(100)
    print(balance)
    withdraw(20)
    print(balance)

def deposit(n):
    global balance
    balance += n

def withdraw(n):
    global balance
    balance -= n


if __name__ == "__main__":
    main()