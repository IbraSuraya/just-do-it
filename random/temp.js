function generateRandomString() {
  // Generate random characters for each section
  const section1 = generateRandomLetters(3); // 4 huruf abjad
  const section2 = generateRandomSection(4);
  const section3 = generateRandomSection(2);

  // Create the final formatted string
  const randomString = `N${section1}-${section2}-${section3}J6`;

  return randomString;
}

function generateRandomLetters(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letters = '';

  // Generate random letters for the section
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    letters += characters.charAt(randomIndex);
  }

  return letters;
}

function generateRandomSection(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let section = '';

  // Generate random characters for the section
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    section += characters.charAt(randomIndex);
  }

  return section;
}

// Example usage
const randomString = generateRandomString();
console.log(randomString);
