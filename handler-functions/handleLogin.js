const uuid = require("uuid");
const hasher = require("pbkdf2-password-hash");

async function hashPassword(password) {
  //   const salt = "we_love_gardens";
  const hashedPassword = await hasher.hash(password); //can add salt later if we have time to/want to
  return hashedPassword;
}

async function handleLogin(req, res, client) {
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
