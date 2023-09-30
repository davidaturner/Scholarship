#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{
    /*
        Linked List
        Linear data structure
        Similar to Arrays
        More dynamic in size (more efficient memory allocation)
        Easy insertion and deletion (no array resizing)
    */
    struct Node
    {
        int data;
        struct Node *next;
    };

    struct Node *head = NULL;
    struct Node *second = NULL;
    struct Node *third = NULL;

    head = (struct Node *)malloc(sizeof(struct Node));
    head->data = 10;
    second = (struct Node *)malloc(sizeof(struct Node));
    second->data = 2;
    third = (struct Node *)malloc(sizeof(struct Node));
    third->data = 14;

    head->next = second;
    second->next = third;
    third->next = NULL;

    struct Node *start = head;
    while (start != NULL)
    {
        printf("%d ", start->data);
        start = start->next;
    };

    return 0;
}
