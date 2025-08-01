function get_leaderboard(req, res) {
  try {
    res.status(200).json([
      { name: "Yash", donations: 5000 },
      { name: "Prabhas", donations: 3000 },
      { name: "Nani", donations: 1500 },
    ]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { get_leaderboard };
