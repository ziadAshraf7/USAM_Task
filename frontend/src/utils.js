

export const backEndUrlPath = "http://localhost:4000"

export const usamProgramsTypes = {
    wiseProgram : "wise" , 
    uscProgram : "usc" ,
    ambassadorsProgram : "ambassadors" , 
    sparkProgram : "spark"
} 

export const appPaths = {
    homePage : "/" ,
    wiseProgram : `/usamProgram/${usamProgramsTypes["wiseProgram"]}` ,
    uscProgram : `/usamProgram/${usamProgramsTypes["uscProgram"]}` ,
    ambassadorsProgram : `/usamProgram/${usamProgramsTypes["ambassadorsProgram"]}`, 
    sparkProgram : `/usamProgram/${usamProgramsTypes["sparkProgram"]}` ,
    programRegisterationPage : "/registeration/:formId" ,
    successPage : "/success"
}

export const registerationFormsPath = {
    wiseProgram : `/registeration/${usamProgramsTypes["wiseProgram"]}` ,
    uscProgram : `/registeration/${usamProgramsTypes["uscProgram"]}` ,
    ambassadorsProgram : `/registeration/${usamProgramsTypes["ambassadorsProgram"]}`, 
    sparkProgram : `/registeration/${usamProgramsTypes["sparkProgram"]}` ,
}