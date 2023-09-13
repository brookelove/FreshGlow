const { Comment } = require("../models");
const commentData = [
  { body: "I love the shade of that lipstick! 💄" },
  { body: "Does anyone have recommendations for a good concealer?" },
  { body: "Eyeliner game on point! 👁️" },
  { body: "This foundation is my holy grail! 🙌" },
  { body: "The eyeshadow palette has such pretty colors! 😍" },
  { body: "Blush adds a nice pop of color to your cheeks!" },
  { body: "I can never get my mascara to look this good!" },
  { body: "Highlighter for that glow ✨" },
  { body: "Bronzer is a must for a sun-kissed look!" },
  { body: "Makeup brushes make all the difference! 🖌️" },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
