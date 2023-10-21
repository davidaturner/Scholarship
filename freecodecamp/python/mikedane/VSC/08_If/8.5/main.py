# Create a translator that takes in a word or phrase and translate and output a word 
# that changes all vowels in a 'g'.
def translate(phrase):
    translated = ""
    for letter in phrase:
        # if letter in "AEIOUaeiou":
        if letter in "AEIOU":
            translated += 'G'
        elif letter in "aeiou":
            translated += 'g'
        else:
            translated += letter
    return translated

phrase = input("Enter a phrase: ")
print(translate(phrase))