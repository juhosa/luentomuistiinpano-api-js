const handler = async (event) => {
  let notes = [
    {
        "id": 0,
        "text": "add lisää",
        "course": {"id": 0, "name": "versionhallinta"},
        "timestamp": "2022-10-23 13:13:13",
    },
    {
        "id": 1,
        "text": "commit tallenta",
        "course": {"id": 0, "name": "versionhallinta"},
        "timestamp": "2022-10-23 13:33:47",
    },
    {
        "id": 2,
        "text": "push työntää muutokset remoteen",
        "course": {"id": 0, "name": "versionhallinta"},
        "timestamp": "2022-10-24 13:53:18",
    },
    {
        "id": 3,
        "text": "talar du svenska",
        "course": {"id": 2, "name": "ruotsi"},
        "timestamp": "2022-11-01 08:23:12",
    },
]

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(notes),
      headers: { "content-type": "application/json"},
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
