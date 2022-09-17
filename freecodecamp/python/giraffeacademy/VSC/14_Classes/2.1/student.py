class Student:
    def __init__(self, name, major, gpa, is_on_probation):
        self.name = name
        self.major = major
        self.gpa = gpa
        self.is_on_probation = is_on_probation

student1 = Student("Jackie Tibbs", 34, 2.8, False)
print(student1.name)