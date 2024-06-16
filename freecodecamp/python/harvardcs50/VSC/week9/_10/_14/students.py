# name = input("Input name: ")
# house = input("Input house: ")
# print(f"{name} lives in the {house} house")

# using tuples. use (). results are immutable.
# if you need to change the values in the results, use lists []
# use dict with index 'name' and 'house'

def main():
    # name = get_name()
    # house = get_house()

    # name, house = get_name(),  get_house()
 
    student = get_student()

    # print(f"{name} lives in the {house} house")
    # print(f"{student[0]} lives in the {student[1]} house")
    print(f"{student['name']} lives in the {student['house']} house")

# def get_student():
#     # return get_name(), get_house()
#     return (get_name(), get_house())

# def get_student():
#     student = {}
#     student["name"] = get_name()
#     student["house"] = get_house()
#     return student

def get_student():
    return { "name" : get_name(), "house" : get_house()}

def get_name():
    return input("Input name: ")

def get_house():
    return input("Input house: ")   

if __name__ == "__main__":
    main()