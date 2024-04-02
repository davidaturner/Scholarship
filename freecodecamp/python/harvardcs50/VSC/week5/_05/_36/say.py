# packages - pypi.org
# py -m pip install cowsay
import cowsay
import sys

if len(sys.argv) == 2:
    cowsay.cow("Hello, " + sys.argv[1])