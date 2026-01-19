export default function handler(req, res) {
  const strings = [
    "You are so beautiful",
    "I love youuuu",
    "I miss you",
    "Call me",
    "I want to give you a hug",
    "You are a great person"
  ];

  const randomIndex = Math.floor(Math.random() * strings.length);
  const randomString = strings[randomIndex] + " :)";

  res.status(200).json({
    randomString
  });
}
