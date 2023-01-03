# book solution
def get_product_all_elements(arr):

    # create an array of products from the input array.
    # example: for an input of [1, 2, 3, 4, 5]
    # store [1, 2, 6, 24, 120]
    prefix_products = []
    for num in arr:
        if prefix_products:
            prefix_products.append(prefix_products[-1] * num)
        else:
            prefix_products.append(num)

    # create a 2nd array of products from the input array.
    # first reverse the input, create the array, then reverse the result.
    # example: for an input of [1, 2, 3, 4, 5]
    # store [120, 120, 60, 20, 5]
    suffix_products= []
    for num in reversed(arr):
        if suffix_products:
            suffix_products.append(suffix_products[-1] * num)
        else:
            suffix_products.append(num)
    suffix_products = list(reversed(suffix_products))

    # mathematical trick that allows routine to run in O(n) (3n)
    # instead of s2 solution of O(n2)
    result = []
    for i in range(len(arr)):
        if i == 0:
            result.append(suffix_products[i + 1])
        elif i == len(arr) - 1:
            result.append(prefix_products[i - 1])
        else:
            result.append(prefix_products[i - 1] * suffix_products[i + 1])
    # print(f"Prefix: {prefix_products}")
    # print(f"Suffix: {suffix_products}")
    # print(f"Result: {result}")
    # print(f"Expected: [120, 60, 40, 30, 24]")
    return result