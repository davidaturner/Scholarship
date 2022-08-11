#include <stdio.h>
int main()
{
    printf("Hello, World!\n");

    // Decimal      0123456789
    // Hexidecimal  0123456789ABCDE
    // Binary       01

    int d = 4;
    printf("%d\n", d);

    int h = 0xa;
    printf("%d\n", h);

    h = 0xabc;
    printf("%d\n", h);

    unsigned char uc = 0b00000001;
    printf("%d\n", uc);

    uc = 0b00100000;
    printf("%d\n", uc);

    uc = 0b10000000;
    printf("%d\n", uc);

    const int furball = 3;
    printf("%d\n", furball);

    return 0;
}