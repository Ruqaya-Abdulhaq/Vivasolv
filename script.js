function setMessage(id, value){
    if(!value){
        document.getElementById(id).innerHTML = "This field is required";
        return false;
    }else{
        document.getElementById(id).innerHTML = "";
    }
    return true;
}

function displayToast(){
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show();
}

function resetForm(ids){
    for (let index = 0; index < ids.length; index++) {
        document.getElementById(id).value = "";
    }
}

function goHome(){
    window.location.replace("../home/home.html");
}