# Also known as associated array.
# Key must be unique
months = {
    "Jan": "January",
    "Feb": "Febrary",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December"
}

dayInTheWeek = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",

}
print(months["Nov"])
print(months.get("Jul"))
print(months.get("Luv", "Key not in dictionary"))

print(dayInTheWeek.get(4))
