#include <stdio.h>

/* Find the single element in list */
// TODO - Current, time complexity is O 3N which for large sets O N.
// Could I do better for smaller data sets? And should I?
int main(int argc, char const *argv[])
{
    int arr[] = {1, 2, 3, 1, 2, 3, 4, 5, 5, 1};

    int len = sizeof(arr) / sizeof(int);
    int holding[len];

    for (int i = 0; i < len; i++)
    {
        holding[i] = 0;
    }
    for (int i = 0; i < len; i++)
    {
        if (arr[i] < len)
        {
            holding[arr[i]]++;
        }
    }
    for (int h = 0; h < len; h++)
    {
        if (holding[h] == 1)
        {
            printf("%d", h);
            break;
        }
    }

    return 0;
}
