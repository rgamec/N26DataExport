# N26DataExport
Currently (as of 2019-03-30) N26 has no easy way to quickly export a list of transactions as a CSV-formatted file. This bookmarklet provides a simple way to do this.

## Usage
* Create a new bookmark in your browser, set the location to the contents of the JS file in this project (starting with "javascript:" to run it in-URL).
* Login to your N26 online account.
* Open the JS console and click the bookmarklet.
* The transaction history will be printed to the console as CSV-formatted data.

## TODO
Obviate the need to open the console by printing the CSV to a field added to the site's DOM.

## Issues
This bookmarklet will probably break when the site layout gets updated. The three jQuery selectors would need to be fiddled with to get it working again.
