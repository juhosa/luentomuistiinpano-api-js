const handler = async (event) => {
  let courses = [
    {id: 0, name: "versionhallinta"},
    {id: 1, name: "java"},
    {id: 2, name: "ruotsi"},
    {id: 3, name: "ohjelmointi 1"},
]

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(courses),
      headers: { "content-type": "application/json" },
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
