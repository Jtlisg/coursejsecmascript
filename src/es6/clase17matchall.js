const myRegex = /\b(Apple)+\b/g;

const myFruit = 'Apple,Banana Kiwi,Apple,Apple, etc. etc.';

for (const match of myFruit.matchAll(myRegex)){
    console.log(match);
};