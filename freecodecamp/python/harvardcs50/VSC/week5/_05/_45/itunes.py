import json
import requests
import sys

# Api
# pypi.org/project/requests

# py -m pip install requests
# example
# https://itunes.apple.com/search?entity=song&limit=1&term=wheezer

# {
#  "resultCount":1,
#  "results": [
# {"wrapperType":"track", "kind":"song", "artistId":133517040, 
#  "collectionId":215736229, "trackId":215738277, "artistName":"Walking Buffalo", 
#  "collectionName":"DrumSpeaker", "trackName":"Wheezer", 
#  "collectionCensoredName":"DrumSpeaker", "trackCensoredName":"Wheezer", 
#  "artistViewUrl":"https://music.apple.com/us/artist/walking-buffalo/133517040?uo=4", 
#  "collectionViewUrl":"https://music.apple.com/us/album/wheezer/215736229?i=215738277&uo=4", 
#  "trackViewUrl":"https://music.apple.com/us/album/wheezer/215736229?i=215738277&uo=4", 
#  "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/5b/73/61/mzm.nabnwgtm.aac.p.m4a", 
#  "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music/70/38/99/mzi.erijontd.jpg/30x30bb.jpg", 
#  "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music/70/38/99/mzi.erijontd.jpg/60x60bb.jpg", 
#  "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music/70/38/99/mzi.erijontd.jpg/100x100bb.jpg", 
#  "collectionPrice":9.99, "trackPrice":0.99, "releaseDate":"2006-09-01T12:00:00Z", 
#  "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, 
#  "discNumber":1, "trackCount":16, "trackNumber":6, "trackTimeMillis":152000, "country":"USA", 
#  "currency":"USD", "primaryGenreName":"Worldwide", "isStreamable":true}]
# }

if len(sys.argv) != 2:
    sys.exit()
response = requests.get("https://itunes.apple.com/search?entity=song&limit=3&term="
                        + sys.argv[1])
# docs.python.org/3/library/json.html

# print(response.json())
# dumps json which makes the json more readable
print(json.dumps(response.json(), indent=2))

o = response.json()
for result in o["results"]:
    print(result["trackName"])


