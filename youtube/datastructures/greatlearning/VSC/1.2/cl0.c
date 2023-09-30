#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *addHead(int data)
{
    struct Node *n = (struct Node *)malloc(sizeof(struct Node));
    n->data = data;
    n->next = NULL;

    return n;
}

struct Node *add(int data, struct Node *head)
{

    if (head != NULL)
    {

        struct Node *n = (struct Node *)malloc(sizeof(struct Node));
        n->data = data;
        n->next = NULL;

        struct Node *start = head;
        while (start != NULL)
        {
            if (start->next == NULL)
            {
                start->next = n;
                break;
            }
            start = start->next;
        }
    }
    else
    {

        head = addHead(data);
    }

    return head;
}

void display(struct Node *head)
{
    struct Node *start = head;
    while (start != NULL)
    {
        printf("%d ", start->data);
        start = start->next;
    };
}

int main(int argc, char const *argv[])
{
    struct Node *head = NULL;

    head = addHead(10);
    add(2, head);
    add(15, head);

    display(head);

    return 0;
}
