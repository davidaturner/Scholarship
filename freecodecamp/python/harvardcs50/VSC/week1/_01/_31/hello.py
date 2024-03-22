def hello(to="world"):
    print("hello",to)

hello()
def main():
    x = int(input("What's x? "))
    print("The square of",x,"is",square(x))

def square(n):
    # return int(n)*int(n)
    return n*n

main()