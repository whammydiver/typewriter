const sentence = "hello there from lighthouse labs";
let timerCount = 0;

const typewriter = function(letter, timer) {
  setTimeout(() => {
    (process.stdout.write(letter))}, timer);
}
for (const char of sentence) {
  timerCount += 50;
  typewriter(char, timerCount)
};
