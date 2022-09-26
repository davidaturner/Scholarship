def quadratic_func(n):
    for i in range(n):      # O(n)
        for j in range(n):  # O(n)
            print(i, j)     # O(1)

quadratic_func(3)   #O(n)* #O(n) + O(1) = O(n2) + O(1) = O(n2)