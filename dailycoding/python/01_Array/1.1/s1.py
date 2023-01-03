# O(n) solution using division.
def get_product_all_elements(arr):
    # setup output array
    result = []

    # get the product of all values in the input array
    max_product = 1
    for num in arr:
        max_product *=num

    # divide the max_product into each element and store the int value.
    for num in arr:
        result.append(int(max_product/num))
#     print(result)
    return result
# get_product_all_elements([1,2,3,4,5])