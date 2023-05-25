const simplejson = { "name": "Andrew", "age": 30, "graduate": true };
console.log(simplejson);

const nestedjson =
{
  "andrew": {
    "username": "Shucks",
    "location": "Florida",
    "online": true,
    "followers": 987
  },
  "jesse": {
    "username": "JesJesEH",
    "location": "Canada",
    "online": false,
    "followers": 432
  },
  "mark": {
    "username": "MarkyMark",
    "location": "Georgia",
    "online": false,
    "followers": 321
  },
  "kyle": {
    "username": "IareKyle",
    "location": "New York",
    "online": true,
    "followers": 654
  }
};
console.log(nestedjson);
console.log(nestedjson["mark"]);

const nestedarrays = 
{
  "firstName": "John",
  "lastName": "Smith",
  "location": "Delaware",
  "websites": [
    {
      "description": "work",
      "URL": "https://www.JSONSMITH.com/"
    },
    {
      "description": "videos",
      "URL": "https://www.youtube.com"
    }
  ],
  "socialMedia": [
    {
      "description": "twitter",
      "link": "https://twitter.com"
    },
    {
      "description": "facebook",
      "link": "https://www.facebook.com/"
    },
    {
      "description": "github",
      "link": "https://github.com"
    }
  ]
}
console.log(nestedarrays);
console.log(nestedarrays.socialMedia);