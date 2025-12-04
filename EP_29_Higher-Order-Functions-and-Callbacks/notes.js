
// higher order function is function either take fn or return fn 

//higher order function
function a(b) {
    console.dir(b);
    b()
}




//callback function
a(function () {
    console.log('Hiiiiiiiiiiiiiiiiiii');
})