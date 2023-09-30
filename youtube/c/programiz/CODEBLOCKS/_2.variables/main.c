#include <stdio.h>
#include <stdlib.h>

int main()
{
    int age = 25, bygone;
    printf("Hello world!\n");
//    printf("%d\n", age);
    printf("Age: %d\n", age);
    age = 31;
    printf("Age: %d\n", age);
    printf("Age: %d\n");            //missing int value
    printf("Bygone: %d\n", bygone); // uninitialized variable
    return 0;
}
