function startWord () {
  const word = document.getElementById('word').innerText  // 코드캠프
  const lastword = word[word.length - 1]  // 프       ===> 제시어의 마지막단어 추출

  const myword = document.getElementById('myword').value // 프랑스
  const firstword = myword[0]                     //  ===> 입력단어의 첫번째 단어 추출

  if (lastword === firstword) {
    // 정답일 때 쓰는 곳
    document.getElementById('result').innerText = '정답입니다!'
    document.getElementById('word').innerText = myword
    document.getElementById('myword').value = ''
    // const result = document.getElementById('result').innerText = '정답입니다!'
  } else {
    document.getElementById('result').innerText = '오답입니다!'
  }
}


function menuHome () {
  document.getElementById('main').setAttribute('src', 'home.html')
  document.getElementById('menuHome').style = 'background-color: white; color: black;'
  document.getElementById('menuGame').style = 'background-color: #298EB5; color: white;'
  document.getElementById('menuJukebox').style = 'background-color: #298EB5; color: white;'
}

function menuGame () {
  document.getElementById('main').setAttribute('src', 'game.html')
  document.getElementById('menuGame').style = 'background-color: white; color: black;'
  document.getElementById('menuHome').style = 'background-color: #298EB5; color: white;'
  document.getElementById('menuJukebox').style = 'background-color: #298EB5; color: white;'
}


function menuJukebox () {
  document.getElementById('main').setAttribute('src', 'jukebox.html')
  document.getElementById('menuJukebox').style = 'background-color: white; color: black;'
  document.getElementById('menuHome').style = 'background-color: #298EB5; color: white;'
  document.getElementById('menuGame').style = 'background-color: #298EB5; color: white;'
}