# print the file contents sorted

def print_sorted():
    names = []
    with open ("names.txt") as file:
        for name in file:
            names.append(name.rstrip())
    for name in sorted(names):
        print(f"Hello, {name}")

print_sorted()

