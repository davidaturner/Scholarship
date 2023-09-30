#include <stdio.h>
#include <stdlib.h>

int main()
{

    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\n", age);

    double gpa;
    printf("Enter your gpa: ");
    scanf("%lf", &gpa);
    printf("Your gpa is %f.\n", gpa);

/*
    // doesn't always count for the previous newline.
    char grade;
    printf("Enter your grade: ");
    scanf("%c", &grade);
    printf("Your grade is %c.\n", grade);
*/

    char grade[] = "Hello, World!";
    printf("Enter your grade: ");
    scanf("%s", grade);             // don't need the pointer here.
    printf("Your grade is %c.\n", grade[0]);

    char name[20];
    printf("Enter your name: ");
    scanf("%s", name);
    printf("Your name is %s.\n", name);

    return 0;
}
