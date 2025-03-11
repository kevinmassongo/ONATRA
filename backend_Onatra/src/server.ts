import app from "./app";

const port = 4000; // Changez le port ici
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
