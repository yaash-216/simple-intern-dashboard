function get_user(req, res) {
  try {
    res.status(200).json({
      name: "Yash",
      referralCode: "yash2025",
      donations: 5000,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { get_user };
