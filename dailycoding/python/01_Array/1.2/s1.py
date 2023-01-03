ex = [3, 7, 5, 6, 9]
def locate_smallest_window_to_be_sorted(l):
    for i in range(len(l)):
        a = l[i:]
        print(a)

locate_smallest_window_to_be_sorted(ex)