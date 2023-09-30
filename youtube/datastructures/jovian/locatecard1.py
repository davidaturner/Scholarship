def locate_card(cards, query):
    # brute force solution

    # set up variables
    found = False
    position = 0

    # set up to loop through all the cards
    # checking if any one of them is the query.
    # if so, set found
    # if we get through all of the cards,
    # exit the loop.
    for card in cards:
        if card == query:
            found = True
            break
        position += 1

    # after the loop, check to see if query was found.
    # if not give position value of -1.
    # otherwise return with position (zero-based)
    if found != True:
        return -1
    else:
        return position


# test = {
#     'input' : {
#         'cards': [13, 11, 12, 7, 4, 3, 1, 0],
#         'query': 7
#     },
#     'output' : {
#         'position': 3
#     }
# }

test = {
    'input' : {
        'cards': [],
        'query': 7
    },
    'output' : {
        'position': -1
    }
}

# cards = [13, 12, 11, 7, 4, 3, 1, 0]
# query = 7
# pos = locate_card(cards, query)
# print("Position: ",pos)

print("cards: ",test['input']['cards'])
print("query: ",test['input']['query'])
print("running test...")
pos = locate_card(test['input']['cards'],test['input']['query'])
print("position: ", pos)
print("test passed: ", pos == test['output']['position'])