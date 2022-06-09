async function handleLogin(req, res, client, uuid, hasher) {
  const { email, password } = req.body;
  const user = (await client.query(`SELECT * FROM users WHERE email = $1`, [email])).rows[0];

  if (user) {
    const passwordIsValid = hasher.compare(password, user.hashed_password);
    if (await passwordIsValid) {
      const sessionID = uuid.v4();

      client.query(
        `INSERT INTO sessions (uuid, user_id, created_at)
    VALUES ($1, $2, NOW())`,
        [sessionID, user.id]
      );

      res.json({ session: sessionID });
    } else res.json({ response: "Username or password is incorrect." });
  } else res.json({ response: "Username or password is incorrect." });
}

module.exports = { handleLogin };
