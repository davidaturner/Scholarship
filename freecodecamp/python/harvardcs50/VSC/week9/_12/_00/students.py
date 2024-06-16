# class, unlike dict, allows functions and validation to data.
# class Student:
#     ...
class Student:
    def __init__(self, name, house):
        # if not name:
        #     raise ValueError("Missing name.")
        # if not house:
        #     raise ValueError("Missing house.")
        # elif house not in ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"]:
        #     raise ValueError("Invalid house")
        self.name = name
        self.house = house

    # to be used with the print() function
    def __str__(self):
        # return "a student"
        return f"{self.name} lives in the {self.house} house."

# @property is a decorator - a function that modify the functionality 
# of other function
    
    @property
    def name(self):
        # return self.name
        return self._name
        
    @name.setter
    def name(self, name):
        if not name:
            raise ValueError("Missing name.")
        # self.name = name
        self._name = name

    @property
    def house(self):
        # return self.house
        return self._house
        
    @house.setter
    def house(self, house):
        if house not in ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"]:
            raise ValueError("Invalid house")
        # self.house = house
        self._house = house

def main():
    student = get_student()
    print(student)

def get_student():
    return Student(get_name(), get_house())

def get_name():
    return input("Input name: ")

def get_house():
    return input("Input house: ")   

if __name__ == "__main__":
    main()