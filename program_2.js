var count = 0;

for(var i=2, l=process.argv.length; i<l; i++) {
  count += Number(process.argv[i]);
}

console.log(count);
