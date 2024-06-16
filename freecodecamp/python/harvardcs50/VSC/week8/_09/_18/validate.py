# Regular expressions
import re

email = input("What is your email? ").strip(" ")

# re.search(pattern, string, flags=0)
# additional patterns
# ^ = match at beginning of string
# $ = match at end of string
# [] = set of characters
# [^] = set of characters except what comes after the carat

# \d = decimal digit
# \D = not a decimal digit
# \s = whitespace
# \S = not whitespace
# \w = word character- alphanumeric + underscore
# \W = not a word charcter

# flags
# re.IGNORECASE
# re.MULTILINE
# re.DOTALL

# if re.search(r"^[^@]+@[^@]+\.net$", email):
# if re.search(r"^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.net$", email):
if re.search(r"^\w+@\w+.net$", email, re.IGNORECASE):
    print("Valid")
else:
    print("Invalid")
    
# enter - turnin19@earthlink.net

# enter - my email addy is turnin19@earthlink.net    

# enter - my email addy is turnin19@earthlink.net.
    
# enter - turnin19@@@earthlink.net
    

    