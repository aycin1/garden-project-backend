export default async function handleLogout(req, res) {
  const { sessionID } = req.body;
  if (!sessionID) res.status(400).json({ error: "No Session Data Found" });
  else {
    client.query(`DELETE FROM sessions WHERE uuid = $1`, [sessionID]);
    res.status(200).json({ response: "Session Deleted" });
  }
}
