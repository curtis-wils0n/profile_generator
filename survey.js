const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, activity, music, meal, food, sport, superpower;

function askQuestions() {
  rl.question('What\'s your name (or nickname)? ', (answerName) => {
    name = answerName;
    rl.question('What\'s an activity you like doing? ', (answerActivity) => {
      activity = answerActivity;
      rl.question('What do you listen to while doing that? ', (answerMusic) => {
        music = answerMusic;
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answerMeal) => {
          meal = answerMeal;
          rl.question('What\'s your favourite thing to eat for that meal? ', (answerFood) => {
            food = answerFood;
            rl.question('Which sport is your absolute favourite? ', (answerSport) => {
              sport = answerSport;
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answerSuperpower) => {
                superpower = answerSuperpower;
                //STDOUT
                process.stdout.write(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.\n`);
                rl.close();
              })
            })
          })
        })
      })
    })
  })
};

askQuestions();