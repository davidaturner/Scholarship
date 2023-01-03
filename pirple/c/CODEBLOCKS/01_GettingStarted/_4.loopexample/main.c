#include <stdio.h>
#include <stdlib.h>

int main()
{
    char bacon = 0;            //-128..127
    for(int i=0; i<140; i++) {
      printf("%d ", bacon++);
    }

    return 0;
}
