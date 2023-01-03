#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*
    printf("Roses are red.\n");
    printf("Violets are blue.\n");
    printf("Sugar is sweet.\n");
    printf("And so are you.\n");
    */

    char color[10];
    char pluralNoun[10];
    char adjective[10];
    char verb[10];

    // Note: When asking, don't use newline in prompt.
    // scanf - only scans to first whitespace.
    printf("Enter a color: ");
    scanf("%s", color);
    printf("Enter a capped-plural-noun ");
    scanf("%s", pluralNoun);
    printf("Enter a adjective: ");
    scanf("%s", adjective);
    printf("Enter a verb: ");
    scanf("%s", verb);

    printf("Roses are %s.\n", color);
    printf("%s are blue.\n", pluralNoun);
    printf("Sugar is %s.\n", adjective);
    printf("And so %s you.\n", verb);

        printf("--------------------\n");

    // does not work if name is not exactly two inputs.
    char firstName [10];
    char lastName [10];
    printf("Enter full name: ");
    scanf("%s%s", firstName, lastName);
    printf("%s %s", firstName, lastName);
    return 0;
}
