const fs = require('fs');

// Read HTML file
fs.readFile('samp.html', 'utf8', (err, htmlData) => {
  if (err) throw err;
  console.log('\nHTML file content:');
  console.log(htmlData);
});

// Read XML file
fs.readFile('index1.xml', 'utf8', (err, xmlData) => {
  if (err) throw err;
  console.log('\nXML file content:');
  console.log(xmlData);
});

// Read JSON file
fs.readFile('users.json', 'utf8', (err, jsonData) => {
  if (err) throw err;
  console.log('\nJSON file content:');
  console.log(JSON.parse(jsonData));
});

// Read TEXT file
fs.readFile('node1.txt', function(err, txtData) {
	if(err) throw err;
	console.log('\nText file content:');
	console.log(txtData.toString());
});