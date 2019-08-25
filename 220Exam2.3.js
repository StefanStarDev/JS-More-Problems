function solve(input) {

    let path = input.shift().split(', ')

    for (let i = 0; i < input.length; i++) {

        let element = input[i]

        if (element === 'Retire!') {
            break;

        } else {
            element = input[i].split(' - ')
        }

        let command = element[0]
        let operation = element[1]
        let isExist = path.indexOf(operation)

        if (command === 'Start') {
            let operation = element[1]


            if (isExist === -1) {
                path.push(operation)
            }

        } else if (command === 'Complete') {
            if (isExist !== -1) {
                path.splice(isExist, 1)
            }
        } else if (command === 'Side Quest') {
            let splitOperations = operation.split(':')
            let quest = splitOperations[0]
            let sideQuest = splitOperations[1]
            let ifQuestExist = path.indexOf(quest)
            let ifSideQuestExist = path.indexOf(sideQuest)
            if (ifQuestExist !== -1) {
                if (ifSideQuestExist === -1) {
                    path.splice(ifQuestExist+1, 0, sideQuest)
                }
            }

        } else if (command === 'Renew') {
            if(isExist !== -1){
                path.splice(isExist,1)
                path.push(operation)
            }
        }



    }

    console.log(path.join(', '))


}

solve([ 'Hello World, If else',
'Complete - Homework',
'Side Quest - If else:Switch',
'Renew - Hello World',
'Retire!' ])