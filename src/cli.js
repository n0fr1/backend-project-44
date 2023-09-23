import readlinesync from 'readline-sync'

const greetings = () => {
    const name = readlinesync.question('May I have your name?');
    console.log(`Hello, ${name}!`);    
};

export default greetings;