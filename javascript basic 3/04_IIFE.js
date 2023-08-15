// Immediately Invoked Function Expressions (IIFE)
// IFEs prevent pollution of the global JS scope.
(function chay(){
    // named IIFE
    console.log('Chay!');
} )() ; // use semicollen to close IIFE function

((name)=>{
    //simple IIFE
    console.log(`Hi ${name}!`)
})("harfool gujjar"); // alaways use semicollen in IIFE