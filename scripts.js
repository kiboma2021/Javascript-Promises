let p = new Promise ((resolve, reject) => {
  let a = 1+4

  if(a == 2) {
    resolve ('Success')
  } else {
    reject ('Failed')
  }
});

p.then((message) => {
  console.log('Using then gives ' +message);
}).catch((message) => {
  console.log('Using catch is for: ' + message);
})