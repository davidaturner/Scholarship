#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*
    You sure you are building the right main.c?
    */
    int thousand = 1000;    // 4 bytes

    short a = 200;          // 2 bytes
    char b = 'c';            // 1 byte
    unsigned char c = 'd';  // 1 byte
    long d = 2000;          // 8 bytes

    printf("%d\n", thousand);
    return 0;
}
