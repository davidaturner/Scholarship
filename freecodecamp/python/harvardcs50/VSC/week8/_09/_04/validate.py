# Regular expressions
import re

email = input("What is your email? ").strip(" ")

# username, domain = email.split("@")
# if username:
#     print(username)
# if domain:
#     print(domain)
# else:
#     print("INVALID")

# re.search(pattern, string, flags=0)
# additional patterns
# ^ = match at beginning of string
# $ = match at end of string
# [] = set of characters
# [^] = set of characters except what comes after the carat

# if re.search(r"^.+@.+\.net$", email):
if re.search(r"^[^@]+@[^@]+\.net$", email):
    print("Valid")
else:
    print("Invalid")
    
# enter - turnin19@earthlink.net

# enter - my email addy is turnin19@earthlink.net    

# enter - my email addy is turnin19@earthlink.net.
    
# enter - turnin19@@@earthlink.net
    

    