// code your solution here
function saturdayFun(toDo = "roller-skate") {
return `This Saturday, I want to ${toDo}!`
//saturdayFun("bathe my dog");
}
//saturdayFun("bathe my dog")



function mondayWork(goTo = "go to the office") {
    return `This Monday, I will ${goTo}.`

}
//ondayWork("work from home")


function wrapAdjective(result = "*") {
    return function (emphatic = " a hard worker"){
   return `You are ${result}${emphatic}${result}!`
    }
    }
        