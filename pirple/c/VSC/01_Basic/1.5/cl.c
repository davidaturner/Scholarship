#include <stdio.h>
int main()
{
    char ch = 0;
    unsigned char uch = 0;

    printf("Hello, World!");
    for (int i = 0; i < 260; i++)
    {
        printf("%d\n", uch);
        uch++;
    }

    ch = 70;
    printf("\n");
    printf("%c\n", ch);
    printf("%c\n", 'F');
    printf("%d\n", 'F'); // ascii value
    printf("%d\n", 'f'); // ascii value

    // lets attempt to get lowercase ascii.
    for (int i = 0; i < 130; i++)
    {
        printf("%d:%c\n", i, i);
    }
    printf("\n");
    // '0' - '9' : ascii 48 - 57
    // 'A' - 'Z' : ascii 65 - 90
    // 'a' - 'z' : ascii 97 - 122

    // operations
    int m0 = 232;
    int m1 = 1445;
    printf("%d\n", m1 + m0); // add
    printf("%d\n", m1 - m0); // subtract
    printf("%d\n", m1 * m0); // multiple
    printf("%d\n", m1 / m0); // divide a
    // printf("%f\n", m1 / m0); // divide b - zero. must cast. see below.
    printf("%d\n", m1 % m0); // modulus

    // float
    float iAmFloat = 0.5f;
    printf("%f\n", iAmFloat);
    printf("%2.3f\n", iAmFloat);
    printf("%f\n", (float)m1 / (float)m0);

    return 0;
}