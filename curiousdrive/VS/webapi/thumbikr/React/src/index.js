fetch("https://api.github.com/search/repositories?q=react&id=10270250")
  .then(response => response.json())
  .then(json => displayjson(json))

  const displayjson = (json) => {
    const bear = json.items.map(items => (
        {
            id: items.id,
            name: items.name
        }
    ))

    for (var bearitem of bear) {
        console.log(bearitem.id + ": " + bearitem.name)
    }
  }

  /* 10270250 */