const sentence = "hello there from lighthouse labs";

let time = 500;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
  // time will plus 50 first then run the function setTimeout loop then plus another 50ms then run the loop
}
setTimeout(() => process.stdout.write("\n"), time);
