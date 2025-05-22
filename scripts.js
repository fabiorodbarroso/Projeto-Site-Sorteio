// function generateNumber() {

//     const min = Math.ceil(document.querySelector(".input-min").value)
//     const max = Math.floor(document.querySelector(".input-max").value)
//     const result = Math.floor(Math.random() * (max - min) + min);
//     alert(result)


// }
  function generateNumber() {
    const numero = Math.floor(Math.random() * 1000) + 1;

    Swal.fire({
      title: "Parabéns!",
      text: `O(a) ganhador(a) sorteado(a) foi o número: ${numero}`,
      icon: "success"
    });
  }


window.onload = function () {
    Swal.fire({

        html: `<img src="./assets/teste.png" alt="Ícone personalizado" width="400" height="300" style="margin-bottom: 90px;">
    <p>Por favor, selecione um número em cada campo para sortear!</p>
  `,
      confirmButtonText: 'OK',
      timer: 3000,
      
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
  