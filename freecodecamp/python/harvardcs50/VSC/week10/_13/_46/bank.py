class Bank:
    def __init__(self):
        self._balance = 0

    @property
    def balance(self):
        return self._balance

    def deposit(self, n):
        self._balance += n

    def withdraw(self, n):
        self._balance -= n

def main():
    account = Bank()
    print(account.balance)
    account.deposit(100)
    print(account.balance)
    account.withdraw(80)
    print(account.balance)

if __name__ == "__main__":
    main()