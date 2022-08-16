# Class template

# class ClassName:
#     def __init__(self): #this overrides the base __init__
#         self.attribute = 0

#     def AFunction(self):
#         action(s)

class Pet:
    def __init__(self, name, speak="Silent"):
        self.Name = name
        self.Speak = speak
    def __repr__(self):
        return f"Pet: Name: '{self.Name}' Speak: '{self.Speak}'"
        # return "Name: " + self.Name + ", Speak: " + self.Speak
    def __str__(self):
        return f"My pet's name is '{self.Name}'. And it says '{self.Speak}'."
        # return "My pet's name is '" + self.Name + "'. And it says '" + self.Speak + "'."

print("My Pet Arby")
arby = Pet("Arby", "Woof")
# for logging, debugging
print(repr(arby))
# for reporting
print(arby)

# Repr vs Str

# Note: If __repr__ is defined, and __str__ is not, the object will behave as 
# though __str__=__repr__.

# Almost every object you implement should have a functional __repr__ that’s 
# usable for understanding the object. Implementing __str__ is optional: do 
# that if you need a “pretty print” functionality (for example, used by a report 
# generator).

# The goal of __repr__ is to be unambiguous

# Logging is the lifeblood of any decent fire-and-forget server system. Python makes 
# it easy to log: with maybe some project specific wrappers, all you need is a

# log(INFO, "I am in the weird function and a is", a, "and b is", b, "but I got a 
# null C — using default", default_c)

# But you have to do the last step — make sure every object you implement has a 
# useful repr, so code like that can just work

#examples
import datetime
now = datetime.datetime.now()
now.__str__()
'2020-12-27 22:28:00.324317'
now.__repr__()
'datetime.datetime(2020, 12, 27, 22, 28, 0, 324317)'

print("The time is now!")
print(repr(now))
print(str(now))

# class Person:

#     def __init__(self, person_name, person_age):
#         self.name = person_name
#         self.age = person_age

#     def __str__(self):
#         return f'Person name is {self.name} and age is {self.age}'

#     def __repr__(self):
#         return f'Person(name={self.name}, age={self.age})'
