#include <stdio.h>

int main()
{
    // a = 5(00000101), b = 9(00001001)
    int a = 5, b = 9;

    // 0101 & 1001
    // The result is 00000001 (1)
    printf("%d\n", (a & b));

    // 0101 | 1001
    // The result is 00001101 (13)
    printf("%d\n", (a | b));

    // 0101 & 1001
    // The result is 00001100 (12)
    printf("%d\n", (a ^ b));

    // 0001 & 0001
    // The result is 00000000 (0)
    // So n ^ n = 0.                    // Important!
    printf("%d\n", (1 ^ 1));

    // 0000 & 0100
    // The result is 00000100 (4)
    // So. 0 ^ n = n.                   // Important!
    printf("%d\n", (0 ^ 4));

    // 0101 & 1001
    // The result is 11111010 (-6)
    printf("%d\n", (~a));

    // 0101 & 1001
    // The result is 00001101 (18)
    printf("%d\n", (b << 1));

    // 0101 & 1001
    // The result is 00000100 (4)
    printf("%d\n", (b >> 1));

    return 0;
}
