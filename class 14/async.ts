let riceDelevery = new Promise(function (res, rej) {

  const riceOnGodam = false;

  if (riceOnGodam) {

    res("gari bhj do");

  } else {

    rej("stoke unavalable");
  }
});

riceDelevery.then(

    (responce) => {

    console.log(responce);

  }).catch(

    (rerr) => {

    console.log(rerr);
  });
