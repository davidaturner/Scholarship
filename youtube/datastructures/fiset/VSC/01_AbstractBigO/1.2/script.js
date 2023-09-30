/*
Complexity Analysis

Questions:
How much time does this algorithm need to finish?
How much space does this algorithm need for computation?

Big-O notation:
Gives an upper bound of the complexity in the worst case, helping to quantify
performance as the input become arbitrarily large.

Terminology:
With 'n' being the size of the input.
Complexity ordered in from smallest to largest

Constant Time: O 1
example:
i = 0
while(i< 11) {
    i++
}

Logarithmetic Time O log n
example: binary search

Linear Time: O n
example:
i = 0
while(i < n) {
    i++
}

Linearthmetic Time: O n log n
example: sort using mergesort

Quadratic Time: O n*n
example: result = 0
for(i=0; i<n; i++) {
    for(j=i; j<n; j++) {
        result += j
    }
}
example: if iterative through a matrix of m * n = O n*m (Important!)

Cubic Time: O n*n*n
Exponential Time: O b^n
example: find all the subsets in a set

Factorial Time: O n!
find all permutation of a string

Additional properties:
In handling a constant c when calculating: 
1. O n + c IS O n 
example: 2000 + infinity = infinity, the constant 2000 become miniscule
2. O cn where c > 0 IS O n 
example: 2500 * infinity = infinity, a constant multiple become superfluous
3. O cn^3 + dn^2 + en + f IS O n^3 (highest order only, the rest add little comparative)



*/