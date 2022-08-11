#include <stdio.h>
void myMethod()
{
    int a = 4, b = 2;

    // operators
    printf("%d\n", a + b);
    printf("%d\n", a - b);
    printf("%d\n", a * b);
    printf("%d\n", a % b);
    printf("%d\n", a / b);
    printf("DONE!\n");

    for (int i = 0; i < 10; i++)
    {
        if (i == 3)
        {
            printf("%d\n", i);
        }
        printf("A\n");
        if (i != 7)
        {
            printf("%d\n", i);
        }
        printf("B\n");
        if (i > 7)
        {
            printf("%d\n", i);
        }
        printf("C\n");
        if ((i >= 2 && i < 5) || (i == 9))
        {
            printf("%d\n", i);
        }
        printf("D\n");
    }
}

int main(int argc, char const *argv[])
{
    myMethod();

    return 0;
}
