#include <stdio.h>
#include <stdlib.h>

int main()
{
    char characterName [] = "Jacko";
    int characterAge = 70;

    printf("There once was a man named %s.\n", characterName);
    printf("He was %d years ago.\n", characterAge);
    printf("He really liked the name %s.\n", characterName);
    characterAge = 30;
    printf("But did not like being %d.\n", characterAge);

    return 0;
}
