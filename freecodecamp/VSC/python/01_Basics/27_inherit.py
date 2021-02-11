class Chef:
    def make_chicken(self):
        print("The Chef makes a chicken dish.")

    def make_salad(self):
        print("The Chef makes a salad.")

    def make_special(self):
        print("The Chef makes a bbq ribs dish.")


chef = Chef()

chef.make_special()


class AsianChef(Chef):
    # Override!
    def make_special(self):
        print("The Chef makes a orange chicken dish.")

    def make_fried_rice(self):
        print("The Chef makes a fried rice dish.")


asianchef = AsianChef()

asianchef.make_chicken()
asianchef.make_special()
asianchef.make_fried_rice()
