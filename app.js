var order = []

/* Check what is selected and add it to local storage */
function totalOrder(){
    for (var i = 0; i < document.forms[0].length; i++){

            if (document.forms[0].elements[i].value != 0){    
            order.push  (document.forms[0].elements[i].value)
            order.push(" " + document.forms[0].elements[i].name +" " +  "$"  + document.forms[0].elements[i].value * document.forms[0].elements[i].id + " "   )
            order.push('<br>');
            }
}

 /* Make array into Json and store it */
 var myJsonString = JSON.stringify(order);    
 localStorage.setItem('totalOrder', myJsonString);
}

/* Show order from local storage */
function showOrder(){
    if (localStorage.length > 0) {
    for(var i=0;i<localStorage.length; i++) {
    var key = localStorage.key( i );
    var item = JSON.parse( localStorage.getItem( key ) );
   /*  Remove commas from array */
    var withoutCommas = item.join('');
   /* Make the order div visible */
   document.getElementById('input')
   .style.display = "block";
}
    /* Output elements from array */
    document.getElementById('input').innerHTML = "<h4>Your order:</h4>" + "<br>" + withoutCommas + "<br>" + '<input type="submit" class="saveOrder" value="Confirm Order" name="submit" onclick="return confirmOrder()">'
     /*  Scroll to the order */
     var elem = document.getElementById("input");
     elem.scrollIntoView();
}
    };
 
/* Order confirmation   */ 
function confirmOrder(){
    document.getElementById('input').innerHTML =  "<h4>Order confirmed</h4>" + "<br>" + "Please allow us 30-50 minutes for delivery" 
}

/* Book table */
function bookTable(){

    for (var i = 0; i < document.forms[0].length; i++){

        /*   Form verification */
          if (document.forms[0].elements[i].type == 'text' || document.forms[0].elements[i].type == 'email' 
                || document.forms[0].elements[i].type == 'tel' || document.forms[0].elements[i].type == 'date'
                    || document.forms[0].elements[i].type == 'time' || document.forms[0].elements[i].type == 'number'
                        || document.forms[0].elements[i].type == 'date' ){
              if (document.forms[0].elements[i].value == ''){
                  alert("You must fill out your " + document.forms[0].elements[i].name);
                  document.forms[0].elements[i].focus();
                  return false;
              }
          } 
};
document.getElementById('book-a-table').innerHTML = "<h4>Thank you for booking</h4>" + '<br>' + "Confirmation e-mail will be sent shortly."
};


/* Contact */
function contact(){
    var contactDetails = []

       /*  Check what is written and store it in array */
     for (var i = 0; i < document.forms[0].length; i++){
        contactDetails.push  (document.forms[0].elements[i].value) 
       contactDetails.push ('%0D%0A')
} 
   /*  Remove commas from array */
 var contactDetailsWithoutComma = contactDetails.join(''); 
 /* Open default email and pre populate the mail */
 window.open("mailto:tommyevertsen52@gmail.com.com?subject=Contact&body=" + contactDetailsWithoutComma); 
}