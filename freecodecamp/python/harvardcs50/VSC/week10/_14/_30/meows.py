import argparse

# parser = argparse.ArgumentParser()
# parser.add_argument("-n")
# args = parser.parse_args()
parser = argparse.ArgumentParser(description="Meows like a cat")
parser.add_argument("-n", default=1, help="number of times to meow", type=int)
args = parser.parse_args()

for _ in range(int(args.n)):
    print("meow")