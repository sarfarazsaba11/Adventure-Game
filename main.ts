import inquirer from "inquirer";
import chalk from "chalk";


console.log(`${chalk.bold.bgRed('Tekken-3')}\n`)

let loop = true;


class Player{
    name:string
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }

     healthDecrease(){
        let fuel:number = this.fuel - 25;
        this.fuel = fuel
    }
    healthIncrease(){
        let fuel = this.fuel + 25;
        this.fuel = fuel
    }
}


class Oponent{
    name:string
    fuel:number = 100;
    constructor(name:string){
        this.name = name
    }
    healthDecrease(){
        let fuel:number = this.fuel - 25;
        this.fuel = fuel
    }
}




let player = await inquirer.prompt({
    type:'list',
    name:'playerName',
    message:'Select your Player:',
    choices: ['King','Anna','Paul','Jin','Lei','GunJack']
})

let oponent = await inquirer.prompt({
    type:'list',
    name:'oponentPlayer',
    choices:['King','Anna','Paul','Jin','Lei','GunJack']
})



let p1 = new Player(player.playerName);
let o1 = new Oponent(oponent.oponentPlayer)

console.log('')
console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
console.log('')
console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
console.log('')

do{
if (oponent.oponentPlayer === 'King'){
    
    let ask = await inquirer.prompt({
        type:'list',
        name:'select',
        message:'Select',
        choices:['Attack','Energy Drink']
    });
    if(ask.select === 'Attack'){
        let num = Math.floor(Math.random()*2);
        if(num > 0){
            p1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
        if(num <= 0){
            o1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
    }
    if(ask.select === 'Energy Drink'){
        p1.healthIncrease()
        console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        
    }

    if(p1.fuel == 0){
        console.log(chalk.redBright.bold('You loose'));
        process.exit()
    }

    if (o1.fuel == 0){
        console.log(chalk.greenBright.bold('You Won'))
        process.exit()
    }
}







if (oponent.oponentPlayer === 'Anna'){
    

    let ask = await inquirer.prompt({
        type:'list',
        name:'select',
        message:'Select',
        choices:['Attack','Energy Drink']
    });
    if(ask.select === 'Attack'){
        let num = Math.floor(Math.random()*2);
        if(num > 0){
            p1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
        if(num <= 0){
            o1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
    }
    if(ask.select === 'Energy Drink'){
        p1.healthIncrease()
        console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
    }

    if(p1.fuel == 0){
        console.log(chalk.redBright.bold('You loose'));
        process.exit()
    }

    if (o1.fuel == 0){
        console.log(chalk.greenBright.bold('You Won'))
        process.exit()
    }
}






if (oponent.oponentPlayer === 'Paul'){
   

    let ask = await inquirer.prompt({
        type:'list',
        name:'select',
        message:'Select',
        choices:['Attack','Energy Drink']
    });
    if(ask.select === 'Attack'){
        let num = Math.floor(Math.random()*2);
        if(num > 0){
            p1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
        if(num <= 0){
            o1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
    }
    if(ask.select === 'Energy Drink'){
        p1.healthIncrease()
        console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
    }
    if(p1.fuel == 0){
        console.log(chalk.redBright.bold('You loose'));
        process.exit()
    }

    if (o1.fuel == 0){
        console.log(chalk.greenBright.bold('You Won'))
        process.exit()
    }
}






if (oponent.oponentPlayer === 'Jin'){
   

    let ask = await inquirer.prompt({
        type:'list',
        name:'select',
        message:'Select',
        choices:['Attack','Energy Drink']
    });
    if(ask.select === 'Attack'){
        let num = Math.floor(Math.random()*2);
        if(num > 0){
            p1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
        if(num <= 0){
            o1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
    }
    if(ask.select === 'Energy Drink'){
        p1.healthIncrease()
        console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
    }

    if(p1.fuel == 0){
        console.log(chalk.redBright.bold('You loose'));
        process.exit()
    }

    if (o1.fuel == 0){
        console.log(chalk.greenBright.bold('You Won'))
        process.exit()
    }
}






if (oponent.oponentPlayer === 'Lei'){
   

    let ask = await inquirer.prompt({
        type:'list',
        name:'select',
        message:'Select',
        choices:['Attack','Energy Drink']
    });
    if(ask.select === 'Attack'){
        let num = Math.floor(Math.random()*2);
        if(num > 0){
            p1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
        if(num <= 0){
            o1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
    }
    if(ask.select === 'Energy Drink'){
        p1.healthIncrease()
        console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
    }

    if(p1.fuel == 0){
        console.log(chalk.redBright.bold('You loose'));
        process.exit()
    }

    if (o1.fuel == 0){
        console.log(chalk.greenBright.bold('You Won'))
        process.exit()
    }
}





if (oponent.oponentPlayer === 'GunJack'){

    let ask = await inquirer.prompt({
        type:'list',
        name:'select',
        message:'Select',
        choices:['Attack','Energy Drink']
    });
    if(ask.select === 'Attack'){
        let num = Math.floor(Math.random()*2);
        if(num > 0){
            p1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
        if(num <= 0){
            o1.healthDecrease()
            console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
        }
    }
    if(ask.select === 'Energy Drink'){
        p1.healthIncrease()
        console.log(chalk.bold.green(`${p1.name} health is ${p1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} health is ${o1.fuel}`))
            console.log('')
    }

    if(p1.fuel == 0){
        console.log(chalk.redBright.bold('You loose'));
        process.exit()
    }

    if (o1.fuel == 0){
        console.log(chalk.greenBright.bold('You Won'))
        process.exit()
    }




}}while(loop)