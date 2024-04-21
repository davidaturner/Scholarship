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
# patterns
# . = any character other than newline.
# * = 0 or more repetitions
# + = 1 or more repetitions
# ? = 0 or just 1 repetition
# {m} = m repetitions
# {m, n} = at least m repetitions but no more than n repetitions

# if re.search(r"..@.+", email):
# if re.search(r".+@.+", email):
if re.search(r".+@.+\.net", email):
    print("Valid")
else:
    print("Invalid")

# enter - ischicagoisnotchicago19@gmail.com

# enter - ischicagoisnotchicago19@