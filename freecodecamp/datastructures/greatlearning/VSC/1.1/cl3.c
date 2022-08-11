#include <stdio.h>

int main()
{
    /* Find the element that has no duplicate.*/
    /* Problem: what if there was a 2nd duplicate of an element. */
    /* This "clever" solution FAILS. My solution, cl1.c worked though. */
    // int arr[] = {1, 2, 3, 4, 1, 2, 3, 5, 5, 1}; //Fails. Returns 5.
    int arr[] = {1, 2, 3, 4, 1, 2, 3, 5, 5}; // Works. Returns 4.

    int res = 0;
    int arrlen = (sizeof(arr)) / (sizeof(int));

    for (int i = 0; i < arrlen; i++)
    {
        res = res ^ arr[i];
    }

    printf("%d", res);
    return 0;
}
