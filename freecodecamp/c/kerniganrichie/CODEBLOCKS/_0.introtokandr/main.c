#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*
        C provides no operations to deal directly with composite objects such as character strings,
        sets, lists, or arrays considered as a whole. There is no analog for manipulating an entire
        array or string. This language does not define any storage allocation facility otherwise
        than static definition and stack discipline provided by the local variables of function:
        there is no heap nor garbage collection. Finally C itself provides no input-output facilities;
        there is no READ or WRITE statements, and no wired in file access methods. All of these
        higher-level mechanisms must be provided by explicitly called functions.

        The lack of a heap or 'garbage collection' feature in C is both one of the greatest strengths
        of the language and at the same time is likely the reason that the average programmer will
        never develop or maintain a major C application during their career. C provides a simple
        feature using the malloc() and free() functions that allow the programmer to request a certain
        amount of memory to be allocated dynamically, use the memory then return the memory to the C
        runtime library for later use.

        The term 'heap' refers to memory that C manages on our behalf when we need to "borrow" a bit of
        memory and give it back later. There are a couple issues with a simple heap implementation. First,
        if we 'forget' to call free() when we are done with the memory, we have created a "memory leak" and
        will run out of memory and abort. C places the onus of giving back any dynamically allocated memory
        on the programmer. The more difficult problem is that after a series of calls with malloc() and free()
        the heap space becomes fragmented and some cleanup is needed. This clean up is called "garbage
        collection".

        C offers only straightforward single thread control flow construction: tests, loops, grouping, and
        subprograms, but not multiprogramming, parallel operations, synchronization, or co-routines.

    */
    printf("Hello world!\n");
    return 0;
}
