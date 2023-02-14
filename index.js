import chalk from 'chalk';
import {exec} from "child_process";
import fs from 'fs';
import util from 'util';
//import { format, compareAsc } from 'date-fns'
import { formatDistanceToNow, isAfter, isBefore, isToday, parse, format, set} from 'date-fns'
import {Command} from 'commander';

//new Promise()
//    .then(() => {
//        console.log('run after promise has resolved')
//    })

const first =`Sheila`     //make it in coulors, with its import chalk
const last = `Aliaga`
const name = `${chalk.bgMagenta(first)} ${chalk.bgYellow(last)}`
console.log('name', name)

console.log(`npm & node: ${process.env.npm_config_user_agent}`)   //works only with run npm start, not with node index.js

const asyncExec = util.promisify(exec);
const { stdout } = await asyncExec('git --version');
console.log(`git version: ${stdout}`);

  
//console.log("Today is: " + format(new Date(), 'EEEE dd/MMM/yyyy'))   //writes the current date, with its import on top om date-fns

const startOfCourse = new Date (2023, 0, 31)     // calculate the days of classes, with its import om format distance to now
const result = formatDistanceToNow(startOfCourse)
console.log("I start JavaScript-ramverk asignature " + result + " ago.")


const argumentParser = new Command();
argumentParser.option('--date')
argumentParser.parse();

const dateStringSentAsArgument = (argumentParser.args[0]);
const dateSentAsArgument = parse(dateStringSentAsArgument, 'yyyy-MM-dd', new Date())
const currentDate = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds:0})

console.log('isToday', isToday(dateSentAsArgument))
console.log('isAfter', isAfter(dateSentAsArgument, currentDate))
console.log('isBefore', isBefore(dateSentAsArgument, currentDate))


const fileContent = `
Name: ${first} ${last}
npm & node: ${process.env.npm_config_user_agent}
Git version: ${stdout}
Todays date is: ${format(new Date(), 'EEEE dd/MMM/yyyy')}
I started in JavaScript-ramverk ${result} ago.
`;

const addContent = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <head>
            <title>npm</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="src/style.css">
        </head>
    </head>
    <body>
        <header>
            <h1>Asigment 2: NPM AND MORE...</h1>
        </header>
        <main>
            <div>
                
            </div>
        </main>
    </body>
</html>

`
await fs.promises.writeFile('index.md', fileContent); // create a index.md file and write, git-node and npm version, with ist import util
await fs.promises.writeFile('index.html', addContent);   // create a index.html 





