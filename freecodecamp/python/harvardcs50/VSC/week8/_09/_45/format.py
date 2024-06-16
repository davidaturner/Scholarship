import re

name = input("What is your name? ").strip()
# if "," in name:   
#     first, last = name.split(",")

# A|B = either A or B 
# (...) = a group
# (?:...) = non-captured group

# name = "bbcc"
# match = re.search(f"bb", name)
# match = re.search(f"David, Turner", name)
# matches = re.search(r"^(David), (Turner)$", name)
# matches = re.search(r"^(.+), ?(.+)$", name)

matches = re.search(r"^(.+), (.+)$", name)
if matches:
    last = matches.group(1)
    first = matches.group(2)
    # last, first = matches.groups()
    # name = f"{first} {last}"
    name = first + " " + last
print(f"{name}")

 
# print(f"Hello, {matches}!")
    
# enter Turner, David

# enter Turner,David

# enter Turner David

# enter Turner    David