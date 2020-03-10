let timer = 100
const typeWriter = function (spinner){
  for (const char of spinner){
    setTimeout(() => {
      console.log(`\r ${char}`);
      }, (timer));
      timer += 200;
  }
}

const spinner = ['|','/','-','\\']
typeWriter(spinner);