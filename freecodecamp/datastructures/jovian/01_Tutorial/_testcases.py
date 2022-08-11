tests = []
# 0. query is a middle elemeent in the list cards
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 1. query is the first element in the list cards 
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 2. query is the last elemenet in the list cards 
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 3. query is not in list cards
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 4. the list cards carry only one card, the query
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 5. the list cards is empty 
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 6. the list cards have repeating numbers, only one query 
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 7. the list cards have repeating numbers of the query
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})
# 8. the list cards have negative numbers but perserve order
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})

# 9. the list cards have negative numbers but perserve order
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})

# 10. the query number is negative
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})

# 11. the list cards have at least one not a number element
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})

# 12. the list cards have negative numbers but out of order
tests.append( {
    'input' : {
        'cards': [13, 11, 12, 7, 4, 3, 1, 0],
        'query': 7
    },
    'output' : {
        'position': 3
    }
})