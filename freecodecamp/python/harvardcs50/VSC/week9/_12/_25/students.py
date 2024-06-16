# class, unlike dict, allows functions and validation to data.
# class Student:
#     ...
class Student:
    def __init__(self, name, house):
        self.name = name
        self.house = house

    def __str__(self):
        return f"{self.name} lives in the {self.house} house."
   
    # @property
    # def name(self):
    #     return self._name
        
    # @name.setter
    # def name(self, name):
    #     if not name:
    #         raise ValueError("Missing name.")
    #     self._name = name

    # @property
    # def house(self):
    #     return self._house
        
    # @house.setter
    # def house(self, house):
    #     if house not in ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"]:
    #         raise ValueError("Invalid house")
    #     self._house = house

    @classmethod
    def get(cls):
        name = get_name()
        home = get_house()
        return cls(name, home)
    
def get_student():
    return Student(get_name(), get_house())

def get_name():
    return input("Input name: ")

def get_house():
    return input("Input house: ")   


def main():
    # student = get_student()
    student = Student.get()
    print(student)

if __name__ == "__main__":
    main()

