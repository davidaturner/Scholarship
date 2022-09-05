sentence = 'Hi! My name is joe'
sentenc = "Hi! My name is joe"
print(sentence)
print(sentenc)

sentenc = 'Hi! My name is \njoe'
print(sentenc)

sentence = 'Hi! My name is joe and I don\'t like the sox'
print(sentence)

sentence = "\"Hi! My name is joe and I don\'t like the sox!\" - the joe bog"
print(sentence)

sentence = 'Hi! \U0001F923'  # emoji code
print(sentence)
emoji = "\U0001F923"
print("Hi! I am an emoji! " + emoji)

print(sentenc[0])
print(sentenc[0:3])

hiyeah = sentenc[0:3]
print(hiyeah)
print("i" in hiyeah)
print("I" not in hiyeah)
print(hiyeah * 4)

print("word"[0:3])

# order important!
# define parts before using them
emoji = "\U0001F923"
billy = "Billy"  # "Cindy"
jets = "Jets"  # "Giants"
sentenc = "Hi! My name is %s and I don\'t like the %s! %s" % (
    billy, jets, emoji)
print(sentenc)
# format operator
sentenc = f"Hi! My name is {billy} and I don\'t like the {jets}! {emoji}"
print(sentenc)
sentence = f"Hi! My name is {billy} {billy[0:3] + ' ' + 'Johnson'}!"
print(sentence)
