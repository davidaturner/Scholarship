class Chef:

    def make_chicken(self):
        print("The chef makes a chicken")

    def make_salad(self):
        print("The chef makes a salad")

    def make_special_dish(self):
        print("The chef makes a hamburger")

class ChineseChef(Chef):

    # def make_chicken(self):
    #     print("The chef makes a chicken")

    # def make_salad(self):
    #     print("The chef makes a salad")

    # overloaded
    def make_special_dish(self):
        print("The chef makes orange chicken")

    def make_fried_rice(self):
        print("The chef makes fried rice")

# class ChineseChef:

#     def make_chicken(self):
#         print("The chef makes a chicken")

#     def make_salad(self):
#         print("The chef makes a salad")

#     def make_special_dish(self):
#         print("The chef makes a egg foo yung")

#     def make_fried_rice(self):
#         print("The chef makes fried rice")