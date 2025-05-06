const num   = [1,2,3,4,5,6,7,8,9,0],
      sym   = ['.','!','@','#','$','%','^','&','*','(',')','_','+','{','}','<','>','?','|',';','=','-']
      alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const generatePass = (len) => {
    let pass = '';

    do {
        let ranSym = sym[Math.floor(Math.random() * sym.length)];
        let ranNum = num[Math.floor(Math.random() * num.length)];
        let ranAlpha = alpha[Math.floor(Math.random() * alpha.length)];
        pass+= `${ranSym}${ranNum}${ranAlpha}`;
    } while (pass.length < len);

    return pass;
}

document.querySelector('button').addEventListener("click", function (e) {
	let len = Number(document.querySelector('select').value);
  document.querySelector('pre').innerText = generatePass(len);
})
