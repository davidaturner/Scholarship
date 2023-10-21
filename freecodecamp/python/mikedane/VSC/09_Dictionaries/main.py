month_conversions = {}

# month_conversions["Jan"] = "January"
# month_conversions["Feb"] = "February"
# month_conversions["Mar"] = "March"

month_conversions = { "Jan" : "January", 
                    1 : "February", 
                    "Mar" : "March"}

print(month_conversions)
print(month_conversions["Mar"])
print(month_conversions.get(1))

# print(month_conversions["Apr"])
# print(month_conversions["Apr", "Key Not Found"])