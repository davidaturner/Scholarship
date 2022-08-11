#include <stdio.h>

int f = 0;        // global: available to all source files associated with program.
static int e = 0; // static: available only in this source file.
// extern int d = 0; // global: available to every source file of every program.
void myMethod()
{
    int n = 0;
    static int m = 0; // create variable once and use.
    printf("%d %d %d  %d\n", n, m, f, e);
    n++;
    m++;
    f++;
    e++;
    // d++;
}

int main(int argc, char const *argv[])
{
    // cpu has registers
    // register i = 0; // some cpus allow. mine does not. heh.
    int i = 0;
    while (i < 5)
    {
        myMethod();
        i++;
    }
    printf("DONE!");

    return 0;
}
