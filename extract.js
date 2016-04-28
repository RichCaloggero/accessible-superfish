// This function removes table markup from the physionet menu to show how it works with simple list markup


function extract ($ul) {
var $tables;
debug ("extract:");
$tables = $ul.children("li").has("table");

while ($tables && $tables.length > 0) {
//debug ($tables.length, " tables");

$tables.each (function () {
var $table = $("table:first", this);
var $ul = $("ul:first", $table);
//debug ("$ul $table:", $ul[0].nodeName, $table[0].nodeName, jQuery.contains($table[0], $ul[0]), $ul.children().length);

$table.replaceWith ($ul.clone());
//debug ("- replace");
}); // each 

$tables = $ul.children("li").has("table");
//debug ($tables.length, " tables");
} // while

} // extract
