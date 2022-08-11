#include <stdio.h>
int main()
{
    /*
    Type	             Size (bytes)	                     Format Specifier
    int	                at least 2, usually 4	                 %d, %i
    char	             1	                                     %c
    float	             4	                                     %f
    double	             8	                                     %lf
    short int	         2 usually	                             %hd
    unsigned int        at least 2, usually 4	                 %u
    long int	        at least 4, usually 8	                 %ld, %li
    long long int	        at least 8	                         %lld, %lli
    unsigned long int	    at least 4	                         %lu
    unsigned long long int	at least 8	                         %llu
    signed char           	1	                                 %c
    unsigned char	        1	                                 %c
    long double	      at least 10, usually 12 or 16	             %Lf
    */

    // this DOES work if coded in a SUBDIRECTORY
    char ch = 0;
    for (int i = 0; i < 13; i++)
    {
        for (int j = 0; j < 20; j++)
        {
            printf("%d ", ch);
            ch++;
        };
        printf("\n");
    }

    return 0;
}