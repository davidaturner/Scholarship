# Big O Notation is used to analyze the efficiency of the algorithm as its 
# input approaches infinity. Which means that as the size of the input 
# to the algorithm grows, how drastic do the space or time requirements grow
# with it.

def linear_func(n):              # O(n)
    for i in range(len(n)):      # O(n)
        print(1000*10000)       # O(1)  constant time. no n to grow large.


n = [1, 2, 3, 4, 5, 6, 7]
linear_func(n)                  #O(n)+ O(1) as n -> infinity == O(n)