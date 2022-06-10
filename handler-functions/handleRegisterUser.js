async function handleRegisterUser(req, res, client, hasher) {
  async function hashPassword(password, hasher) {
    //   const salt = "we_love_gardens";
    const hashedPassword = await hasher.hash(password); //can add salt later if we have time to/want to
    return hashedPassword;
  }
  const { firstName, lastName, email, password, passwordConfirmation } = await req.body;

  if (firstName && lastName && email && password && passwordConfirmation) {
    if (password === passwordConfirmation) {
      const hashedPassword = await hashPassword(password, hasher);

      try {
        await client.query(
          `INSERT INTO users (first_name, last_name, email, hashed_password, created_at) VALUES ($1, $2, $3, $4, NOW())`,
          [firstName, lastName, email, hashedPassword]
        );

        await res.status(200).json({ response: "Account created!" });
      } catch (error) {
        await res.status(400).json({ error: "An account already exists for this email!" });
      }
    } else {
      await res.status(400).json({ error: "Passwords do not match, please try again" });
    }
  } else {
    await res.status(400).json({ error: "Please provide all data required!" });
  }
}

module.exports = { handleRegisterUser };
