"""
File: L01homework01.py (submitted as: main.py)
One of my favorite songs
"""
# Variable section

# Song
Song = "Long Haired Lady"
# Unusual in that Linda was given co-lead in singing
AsSungBy = "Paul and Linda McCartney"
# No Lennon? No problem I guess. Lol.
WrittenBy = "Paul and Linda McCartney"
# Paul and Linda was suited by the Publisher for royalties.
PublishedBy = "Northern Songs"
# I doubt 'Indie Pop' was a genre in '71. Ah well.
Genre = "Indie Pop"
# Album cover shows Paul handling a ram sheep
# The back cover shows two roaches copulating
# (Paul mentioned that was how he felt about the three
# members 'ganging up' on him during the breakup
# of the Beatles).
OnTheAlbum = "Ram"
# The official length but YouTube says it's a little longer.
Duration = "5:54"
# A new super songwriting duo? Nahhh.
ProducedBy = "Paul and Linda McCartney"
# Neither the critics nor the other Beatles liked in '71
ReviewedByCritics = "Poorly received"
# Never popular enough to release as a single.
SingleReleased = False
# Never popular enough to have an official video.
VideoReleased = False
# Two different album release dates.
AlbumUSReleased = "17 May 1971"
AlbumUKReleased = "21 May 1971"
# Followed the album - McCartney. Critics hated that album.
# Needed a more professional sound. Mac tried to accommodate.
FollowUpToAlbum = "McCartney (1970)"
# Studios that recorded and mixed the final product.
RecordedMixed = [
    "Columbia Recordings/New York",
    "A&R Recordings/New York",
    "Sound Recording/Los Angeles"
]
# Among the musicians of special note
# Seiwell stayed with McCartney when Wings were formed.
# Heather McCartney is Linda's elderest daughter.
# And yeah, THAT New York Philharmonic!
MusiciansOnAlbum = [
    "Paul McCartney",
    "Linda McCartney",
    "David Spinozza",
    "Hugh McCraken",
    "Denny Seiwell",
    "Heather McCartney",
    "Marvin Stamm",
    "New York Philharmonic"
]
# RAM was released while the Beatles was
# being dissolved in the courts. With Lennon
# and McCartney the co-founders, you can imagine
# things were a mess for a long time..
Label = "Apple"
# The remastered was MUCH BETTER received.
AlbumRemastered = "2012"
# Rated Amazon's Choice
SoldOnAmazon = True
# Simple Audio Cd price
AmazonBasic = 10.57
# A number of collector packages are available
# for purchasing
AmazonOtherAvail = True

# Printing
print("Song: " + Song)
print("AsSungBy: " + AsSungBy)
print("WrittenBy: " + WrittenBy)
print("Genre: " + Genre)
print("OnTheAlbum: " + OnTheAlbum)
print("Duration: " + Duration)
print("ProducedBy: " + ProducedBy)
print("PublishedBy: " + PublishedBy)
print("ReviewedByCritics: " + ReviewedByCritics)
print("SingleReleased: " + str(SingleReleased))
print("VideoReleased: " + str(VideoReleased))
print("AlbumUSReleased: " + AlbumUSReleased)
print("AlbumUKReleased: " + AlbumUKReleased)
print("FollowupToAlbum: " + FollowUpToAlbum)
print("RecordedMixed: ")
print(RecordedMixed)
print("MusiciansOnAlbum: ")
print(MusiciansOnAlbum)
print("Label: " + Label)
print("AlbumRemastered: " + AlbumRemastered)
print("SoldOnAmazon: " + str(SoldOnAmazon))
print("AmazonBasic: " + str(AmazonBasic))
print("AmazonOtherAvail: " + str(AmazonOtherAvail))
