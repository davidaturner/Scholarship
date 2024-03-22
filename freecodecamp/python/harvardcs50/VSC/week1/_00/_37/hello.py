
# https://docs.python.org/3/library/functions.html#print

# print(*objects, sep=' ', end='\n', file=None, flush=False)
"""
Print objects to the text stream file, separated by sep and 
followed by end. sep, end, file, and flush, if present, must be 
given as keyword arguments.
"""
# (function) def print(
#     *values: object,
#     sep: str | None = " ",
#     end: str | None = "\n",
#     file: SupportsWrite[str] | None = None,
#     flush: Literal[False] = False
# ) -> None
name = input("Name? ")
print("Hello,", name + "!")

print("Hello,", name, end="???")
print("World!")

print("Hello", "My", "World!", sep="???", end="??")
print()

print("Hello 'friend'", name + "?")
print("Hello \"friend\"", name + "?")

#new feature
print(f"Hello {name}")


