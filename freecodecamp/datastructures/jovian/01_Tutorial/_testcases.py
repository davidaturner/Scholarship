tests = []
# 0. query is a middle elemeent in the list cards
tests.append( {
    'input' : {
        'cards': [13, 12, 11, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 1. query is the first element in the list cards 
tests.append( {
    'input' : {
        'cards': [13, 12, 11, 7, 4, 3, 1, 0],
        'query': 13
    },
    'output' : {
        'position': 0
    }
})
# 2. query is the last elemenet in the list cards 
tests.append( {
    'input' : {
        'cards': [13, 12, 11, 7, 4, 3, 1, 0],
        'query': 0
    },
    'output' : {
        'position': 7
    }
})
# 3. query is not in list cards
tests.append( {
    'input' : {
        'cards': [13, 12, 11, 7, 4, 3, 1, 0],
        'query': 12
    },
    'output' : {
        'position': -1
    }
})
# 4. the list cards carry only one card, the query
tests.append( {
    'input' : {
        'cards': [7],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 5. the list cards carry only one card, NOT the query
tests.append( {
    'input' : {
        'cards': [13],
        'query': 7
    },
    'output' : {
        'position': -1
    }
})
# 6. the list cards is empty 
tests.append( {
    'input' : {
        'cards': [],
        'query': 7
    },
    'output' : {
        'position': -1
    }
})
# 7. the list cards have repeating numbers, only one query 
tests.append( {
    'input' : {
        'cards': [13, 11, 11, 7, 4, 1, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 8. the list cards have repeating numbers of the query
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 7, 7, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 9. the list cards have negative numbers but perserve order
tests.append( {
    'input' : {
        'cards': [13, 12, 11, 7, 4, 3, 1, -7],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})

# 10. the list cards have number out of order
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 4, 7, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 4
    }
})

# 11. the query number is negative
tests.append( {
    'input' : {
        'cards': [13, 12, 11, 7, 4, 3, 1, -7],
        'query': -7
    },
    'output' : {
        'position': 7
    }
})

# 12. the list cards have non numbers
tests.append( {
    'input' : {
        'cards': [13, 12, "Eleven", 7, 4, "III", 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})