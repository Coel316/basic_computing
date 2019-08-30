function askMachineType() {

   /* var name = prompt("Apple or PC?");

    if (name === '' ) {
        name = 'Apple is better';
    } 
    return name;
   */

   var order = prompt('Do you want to order an Apple or PC comuter?');
   var item, quantity;
   var items;

   while (order !== 'Apple' && order !== 'PC') {
       order = prompt('Please enter number of computers needed...');

   }
    
