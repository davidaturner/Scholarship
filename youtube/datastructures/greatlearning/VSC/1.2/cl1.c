#include <stdio.h>
#include <stdlib.h>

/* Print only the middle nodes */

int main(int argc, char const *argv[])
{
    struct Node
    {
        int data;
        struct Node *next;
    };

    struct Node *head = NULL;
    struct Node *second = NULL;
    struct Node *third = NULL;
    struct Node *fourth = NULL;
    struct Node *fifth = NULL;

    head = (struct Node *)malloc(sizeof(struct Node));
    head->data = 10;
    second = (struct Node *)malloc(sizeof(struct Node));
    second->data = 2;
    third = (struct Node *)malloc(sizeof(struct Node));
    third->data = 14;
    fourth = (struct Node *)malloc(sizeof(struct Node));
    fourth->data = 56;
    fifth = (struct Node *)malloc(sizeof(struct Node));
    fifth->data = 38;

    head->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = fifth;
    fifth->next = NULL;

    // algorithm
    struct Node *start = head;
    while (start != NULL)
    {
        if (start->next != NULL)
        {
            if (start->next->next != NULL)
            {
                printf("%d ", start->next->data);
            }
        }
        start = start->next;
    }

    return 0;
}
