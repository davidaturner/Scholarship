# test
def verify(tc, func, calculated):
    print("*--------------------*")
    print("Input:", tc["input"])
    print("Running", func)
    # calculated = get_product_all_elements(tc["input"])
    print("Output:")
    print("Calculated:",calculated)
    expected = tc["output"]
    print("Expeced:",expected)
    print(calculated == expected)