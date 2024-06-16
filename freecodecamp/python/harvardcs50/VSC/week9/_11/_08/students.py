# name = input("Input name: ")
# house = input("Input house: ")
# print(f"{name} lives in the {house} house")

# class, unlike dict, allows functions and validation to data.
# class Student:
#     ...
class Student:
    def __init__(self, name, house):
        if not name:
            raise ValueError("Missing name.")
        if house not in [
            "Gryffindor", 
            "Hufflepuff", 
            "Ravenclaw", 
            "Slytherin"
            ]:
            raise ValueError("Invalid house")
        
        self.name = name
        self.house = house

def main():
    # name, house = get_name(),  get_house()
 
    student = get_student()
    # print(f"{student['name']} lives in the {student['house']} house")
    print(f"{student.name} lives in the {student.house} house")

def get_student():
    # return { "name" : get_name(), "house" : get_house()}
    return Student(get_name(), get_house())

def get_name():
    return input("Input name: ")

def get_house():
    return input("Input house: ")   

if __name__ == "__main__":
    main()