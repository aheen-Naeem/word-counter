#!/usr/bin/env node

import inquirer from "inquirer";

function counter(paragraph:string){
    let freeWhiteSpaces = paragraph.replace(/\s/g,"")
    return freeWhiteSpaces.length
}

async function startWordCount(counter:(text:string)=>number){
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write paragraph here...",
            name: "paragraph"
        })

        console.log(counter(res.paragraph))
}
    while(true)
}
startWordCount(counter)