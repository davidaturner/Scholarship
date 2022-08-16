#time library
import time

# time.clock has been depreciated and removedd
# in python 3.3/3.8
# time1 = time.clock()
# print("Hello, World!")
# time2 = time.clock()
# print(time2 - time1)

# latest_tutorial.py

time1 = time.perf_counter()
print("Hello, World!")
time2 = time.perf_counter()
print(float("{:.6f}".format(time2 - time1)))

print("Before")
time.sleep(5)
print("After")

