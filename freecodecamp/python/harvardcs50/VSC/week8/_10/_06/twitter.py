import re
# url = input("URL: ").strip()
# # print (url)
# username = url.replace("https://twitter.com/", "")
# print (username)

url = input("URL: ").strip()
# # print (url)
# # username = re.sub(r"https://twitter.com/", "", url)
# username = re.sub(r"^(https?://)?(www\.)?twitter.com/", "", url)
# print (username)

# A | B 
# (...) capture this group
# (?:...) do not capture this group
 
# found = re.search(r"^(https?://)?(www\.)?twitter\.com/(.+)$", url, re.IGNORECASE)
# found = re.search(r"^(?:https?://)?(?:www\.)?twitter\.com/(.+)$", url, re.IGNORECASE)
found = re.search(r"^(?:https?://)?(?:www\.)?twitter\.com/([a-z0-9]+)$", url, re.IGNORECASE)
if found:
    print (found.group(1))
    # print (found.group(2))
    # print (found.group(3))
    # print (found.group())
else:
    print("Not a URL!")

    
# https://twitter.com/davidaturner

# http://twitter.com/davidaturner

# http://www.twitter.com/davidaturner

# www.twitter.com/davidaturner

# davidaturner