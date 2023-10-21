import random

Feet_InA_Mile = 5280
Meters_InA_Kilometer = 1000
Members_OfThe_Beatles = tuple(['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'])

def print_collection(collection):
    if type(collection) == str or type(collection) == list or type(collection) == tuple:
        for c in collection:
            print(c, end=" ")
    else:
        print("Not a string, list or tuple.")

def get_file_ext(filename):
    return filename[filename.index(".") + 1:]

def roll_dice(num):
    return random.randint(1, num)

