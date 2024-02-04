process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const readed = process.stdin.read();
  if (readed) {
    process.stdout.write(`Your name is: ${readed}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
