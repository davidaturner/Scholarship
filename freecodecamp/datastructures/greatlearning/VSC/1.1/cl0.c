#include <stdio.h>

int main(int argc, char const *argv[])
{
    int rollNo[10];

    for (int i = 0; i < 10; i++)
    {
        printf("Enter number: ");
        scanf("%d", &rollNo[i]);
    }

    for (int i = 0; i < 10; i++)
    {
        printf("%d ", rollNo[i]);
    }

    return 0;
}
