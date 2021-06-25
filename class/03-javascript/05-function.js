    // function getToken () {
    //   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    //   // console.log(token)
    //   document.getElementById('aaa').innerText = token
    // }

    // const getToken = function () {
    //   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    //   // console.log(token)
    //   document.getElementById('aaa').innerText = token
    // }

    let timer
    const getToken = () => {
        clearInterval(timer)
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
        
        // console.log(token)
        document.getElementById('aaa').innerText = token

        // let count = 10
        // setInterval(() => {
        //   if (count >= 0) {
        //     document.getElementById('bbb').innerText = count
        //     count = count - 1
        //   }
        // }, 1000)

        // let count = 10
        // setInterval(() => {
        //   if (count >= 0) {
        //     const minutes = Math.floor( count / 60)
        //     const seconds = count % 60
        //     document.getElementById('bbb').innerText = minutes + ':' + seconds
        //     count = count - 1
        //   }
        // }, 1000)

        let count = 5
        timer = setInterval(() => {
          if (count >= 0) {
          const minutes = String(Math.floor( count / 60)).padStart(2, '0')
          const seconds = String(count % 60).padStart(2, '0')
          document.getElementById('bbb').innerText = minutes + ':' + seconds
          }
          if(count < 59){
            document.getElementById("bbb").style="color:red"
          }
          if(count === 0) {
            document.getElementById('ttt').setAttribute('disabled', 'true')
          }
          count = count - 1
          }, 1000)
    }


    // function random () {
    //   let number = 50
    //   let random = Math.floor(Math.random() * 100)
    //   if (random >= number) {
    //     console.log('Win')
    //   } else {
    //     console.log('Lose')
    //   }
    // }

    // function divide (num1, num2) {
    //   return num1 / num2
    // }
    
    // function sum (num) {
    //   let result = 0;
    //   for (let i = 0; i <= num; i++) {
    //     result = result + i
    //     console.log(result)
    //   }

//     let count = 10               == > 10초 카운트다운
//     setInterval (() => {
//       if (count >= 0) {
//         console.log(count)
//         count = count - 1
//     }
// } , 1000)


// let count = 180             == > 3분 타이머
// setInterval (() => {
//     if (count >= 0) {
//         const minutes = Math.floor(count / 60)
//         const seconds = count % 60
//         console.log(minutes + ':' + seconds)
//         count = count - 1
//     }
    
// }, 1000)