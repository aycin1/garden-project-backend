async function handleValidateSession(req, res, client) {
  const { sessionID } = req.body;
  const session = (await client.query(`SELECT * FROM sessions WHERE uuid = $1`, [sessionID])).rows;

  let isValid = Boolean(session.length);

  res.status(200).json({ response: isValid });
}

module.exports = { handleValidateSession };
