#include <stdio.h>
int sum(int a, int b)
{
    return a + b;
}

int average(int a, int b)
{
    return sum(a, b) / 2;
}

int main()
{
    printf("Hello, World!\n");
    int a = 10;
    int b = 15;
    printf("The sum of %d and %d is: %d\n", a, b, sum(a, b));
    printf("The average therefore is: %d\n", average(a, b));

    return 0;
}