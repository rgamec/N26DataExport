/* Bookmarklet to export CSV-formatted list of transactions from N26 */
/* Working in Chrome as of 2019-03-30 */

/* Load a recent JQuery (for .parent, .each) */
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

/* Storing transactions in this data structure */
var transactions = [];

/* Due to encryptQuery, we'll iterate over the transactions by searching the URLs */
$('a[href*="/transactions/"]').parent()
                              .parent()
                              .each(function(){
                                var transaction = {};
  
                                /* Fetching transaction description */
                                transaction.description = $(this).find("div:eq(2)").get()[0].innerText.split("\n")[0];
  
                                /* Fetching transaction amount */
                                transaction.amount = $(this).find("div:eq(3)").get()[0].innerText;
  
                                /* Fetching transaction date */  
                                /* Remove the split() for the full datetime */
                                transaction.date = $(this).find("div:eq(2) time").get()[0].dateTime.split("T")[0];

                                /* console.log(transaction);*/
                                transactions.push(transaction);
                              });
                              
/* TODO: Add a 'Copy' button to the site's DOM to send the CSV text straight to the clipboard */
transactions.forEach(function(transaction){
    console.log(transaction.date + "," + transaction.description + "," + transaction.amount);
});
