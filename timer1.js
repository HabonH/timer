const timerApp = function() {
  const timer = process.argv.slice(2).filter(x => !isNaN(x)).filter(x => x > 0);
  
  timer.forEach(() => {
    setTimeout(()=> {
      process.stdout.write('\x07');
      console.log(". \n");
    }, timer * 1000);

  });
};

timerApp();