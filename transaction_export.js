/* Bookmarklet to export CSV-formatted list of transactions from N26 */
/* Working in Chrome as of 2019-03-30 */

/* Load a recent JQuery (for .parent, .each) */
var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

/* Due to encryptQuery, we'll iterate over the transactions by searching the URLs */
$('a[href*="/transactions/"]').parent()
                              .parent()
                              .each(function(){
                                var transaction = $( this ).find(":first-child > span:nth-child(2)").context.outerText;
                                console.log(transaction);
                              });
                              
/* TODO: Add a 'Copy' button to the site's DOM to send the CSV text straight to the clipboard */
