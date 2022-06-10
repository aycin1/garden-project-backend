async function handleGetUser(req, res, client) {
  if (!session) res.status(400).json({ error: "No session data found!" });
  const session = req.params.session;
  const userIDResponse = await client.query(`SELECT user_id FROM sessions WHERE uuid = $1`, [session]);
  if (!userIDResponse) res.status(400).json({ error: "No user data found!" });
  else {
    userID = userIDResponse.rows[0].user_id;
    res.status(200).json({ userID });
  }
}

module.exports = { handleGetUser };
