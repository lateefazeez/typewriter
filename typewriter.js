const sentence = "hello there from lighthouse labs";

const animate = (input) => {
  
  let interval = 0;
  for (const char of input) {
    //process.stdout.clearLine();
    setTimeout(() => {
    // print the char here
      process.stdout.write(char);
    }, interval);
    interval += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, interval);
};

animate(sentence);
