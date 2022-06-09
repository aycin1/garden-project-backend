export default async function handleGetIdAndGardensForUser(req, res) {
  const { sessionID } = req.body;

  const response = (
    await client.query(
      `SELECT * FROM gardens JOIN sessions ON sessions.user_id = gardens.user_id JOIN users ON sessions.user_id = users.id WHERE uuid = $1`,
      [sessionID]
    )
  ).rows;

  res.status(200).json(response);
}
