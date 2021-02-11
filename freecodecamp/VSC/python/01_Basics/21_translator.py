'''
replace vowel with 'g'

example: dog --> dgg
example: fat --> fgt
'''


def translate(phrase):
    translation = ""
    for letter in phrase:
        # if letter in "AEIOUaeiou":
        if letter.lower() in "aeiou":
            if letter.isupper():
                translation += 'G'
            else:
                # translation = translation + 'g'
                translation += 'g'
        else:
            # translation = translation + letter
            translation += letter
    return translation


print(translate('dog'))
print(translate('fat'))

myphrase = input("Enter a phrase: ")
print(translate(myphrase))
