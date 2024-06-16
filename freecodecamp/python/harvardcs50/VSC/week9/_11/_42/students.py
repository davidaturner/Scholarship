# class, unlike dict, allows functions and validation to data.
# class Student:
#     ...
class Student:
    def __init__(self, name, house):
        if not name:
            raise ValueError("Missing name.")
        # if house not in [
        #     "Gryffindor", 
        #     "Hufflepuff", 
        #     "Ravenclaw", 
        #     "Slytherin"
        #     ]:
        #     raise ValueError("Invalid house")
        if not house:
            raise ValueError("Missing house.")
        self.name = name
        self.house = house

    # to be used with the print() function
    def __str__(self):
        # return "a student"
        return f"{self.name} lives in the {self.house} house."
    
    def charm(self):
        if self.name == "Harry":
            return "Stag"
        elif self.name == "Hermoine":
            return "Otter"
        elif self.name == "Martha":
            return "Jack Russell terrier"
        else:
            return "No or unknown patronus"
    
def main():
    student = get_student()
    print(student)
    print("Expecto patronus!", student.charm())

def get_student():
    return Student(get_name(), get_house())

def get_name():
    return input("Input name: ")

def get_house():
    return input("Input house: ")   

if __name__ == "__main__":
    main()