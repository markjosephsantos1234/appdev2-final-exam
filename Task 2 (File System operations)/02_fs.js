const fs = require('fs')

fs.writeFile('message.txt', 'Node.js is awesome!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully.');

  try {
    const data = fs.readFileSync('message.txt', 'utf8');
    console.log('File content:', data);

    fs.unlink('message.txt', (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log('File deleted successfully.');
    });

  } catch (readErr) {
    console.error('Error reading file:', readErr);
  }
});

