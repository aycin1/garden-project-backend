async function handleGetUser(req, res, client) {
  const session = req.params.session;
  const userID = (await client.query(`SELECT user_id FROM sessions WHERE uuid = $1`, [session])).rows[0].user_id;
  res.status(200).json({ userID });
}

module.exports = { handleGetUser };
