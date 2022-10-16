def get_product_all_elements(arr):
    # initialize result array
    result = []
    # for an index in a range of length of arr:
    for index in range(len(arr)):
        # set product = 1
        product = 1
        # for an i in a range of length of arr
        for i in range(len(arr)):
            # if i is equal to index
            if i == index:
                # continue
                continue
            # else product is multiplied with arr[i]
            
            product *= arr[i]
        # append product to result
        result.append(product)
    # return result
    return result

# print(get_product_all_elements(tc1["input"]))
# # print(get_product_all_elements([1, 2, 3, 4, 5]))
# print(get_product_all_elements(tc2["input"]))
# # print(get_product_all_elements([3, 2, 1]))