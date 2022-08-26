"""
arrays
fixed size, contigous block of memory with O(1) time to store
and access an element
looking up an element up by value typically requires an entire
traversal of the array, unless it is sorted in some way
deleting an element lead to O(N) time
better timewise to overwrite the value
similarly inserting an element may lead to O(n) as well
not suitable for applications where the size of collection of
elements are not known
"""