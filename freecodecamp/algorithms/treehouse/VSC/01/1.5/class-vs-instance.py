# Class attributes vs instance attributes

# Besides instance attributes, Python also supports class attributes. The class 
# attributes don’t associate with any specific instance of the class. But they’re 
# shared by all instances of the class.

# If you’ve been programming in Java or C#, you’ll see that class attributes are
#  similar to the static members, but not the same.

# To define a class attribute, you place it outside of the __init__() method. For 
# example, the following defines pi as a class attribute:

class Circle:
    pi = 3.14159

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.pi * self.radius**2

    def circumference(self):
        return 2 * self.pi * self.radius

# main Circle example.
c = Circle(10)
print(c.pi)             # 3.14159
print(Circle.pi)        # 3.14159

# When you access an attribute via an instance of the class, Python searches for the 
# attribute in the instance attribute list. If the instance attribute list doesn’t 
# have that attribute, Python continues looking up the attribute in the class attribute 
# list. Python returns the value of the attribute as long as it finds the attribute in 
# the instance attribute list or class attribute list.

# However, if you access an attribute, Python directly searches for the attribute in 
# the class attribute list.

# The following example defines a Test class to demonstrate how Python handles instance 
# and class attributes.

class Test:
    x = 10

    def __init__(self):
        self.x = 20

# main Test example.
test = Test()
print(test.x)  # 20
print(Test.x)  # 10