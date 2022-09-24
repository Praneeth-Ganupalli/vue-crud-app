import store from "@/store/index";
export  function formHandler(validationSet) {
    let errorMessages = [];
    let isValid = true;
    if(validationSet && validationSet.length)
    {
        validationSet.forEach(ele => {
            const eleValue=window.$("#" + ele.dataId).val();
            if (!eleValue) {
                window.$("#" + ele.dataId).addClass("is-invalid").next().text(ele.requiredMessage || ele.errorMessage);
                errorMessages.push(ele.requiredMessage || ele.errorMessage);
            }
            else if(ele.isExpectedValueValidation)
            {
                if(eleValue!=ele.expectedValue)
                {
                    window.$("#" + ele.dataId).addClass("is-invalid").next().text(ele.incorrectMessage);
                    errorMessages.push(ele.incorrectMessage);
                }
            }
            else {
                window.$("#" + ele.dataId).removeClass("is-invalid").next().text("");
            }
    
        });
    }
    if (errorMessages.length) {
        isValid = false;
    }
    return isValid;
}

export function duplicateUser(userEmailELement)
{
    let isValid=true;
    let allUsers=store?.state?.userlist?.userList;
    if(allUsers.length)
    {
        allUsers=allUsers.map((user)=>{
            return (user.email).toLowerCase();
        })
    }
    if(allUsers.includes((userEmailELement.email).toLowerCase()))
    {
        window.$("#" + userEmailELement.dataId).addClass("is-invalid").next().text(userEmailELement.errorMessage);
        isValid=false;
    }
    else{
        window.$("#" + userEmailELement.dataId).removeClass("is-invalid").next().text("");
    }
    return isValid;
}