import readlinesync from 'readline-sync'

const greetings = () => {
    console.log(`Welcome to the Brain games!`);
    const name = readlinesync.question('May I have your name?');
    console.log(`Hello, ${name}!`);    
};

export default greetings;