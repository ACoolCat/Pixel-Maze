document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score =0

  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  const squares = [];

  function createBoard() {
    for (let i=0; i < layout.length; i++){
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      switch(layout[i]) {
        case 0:
          squares[i].classList.add('sugar-pill')
        break;
        case 1:
          squares[i].classList.add('wall')
        break;
        case 2:
          squares[i].classList.add('ghost-lair')
        break;
        case 3:
          squares[i].classList.add('gumdrop')
      }
    }
  }
  createBoard()

  let heroCurrentIndex = 490
  squares[heroCurrentIndex].classList.add('hero')

  function moveHero(e){
    squares[heroCurrentIndex].classList.remove('hero')
    switch(e.keyCode) {
    case 37:
      if(heroCurrentIndex % width !== 0
        && !squares[heroCurrentIndex -1].classList.contains('wall')
        && !squares[heroCurrentIndex -1].classList.contains('ghost-lair'))
       heroCurrentIndex -=1

       if(heroCurrentIndex -1 === 363) {
         heroCurrentIndex = 391
       }
      break
    case 38:

      if(heroCurrentIndex - width >=0
        && !squares[heroCurrentIndex -width].classList.contains('wall')
        && !squares[heroCurrentIndex - width].classList.contains('ghost-lair'))
        heroCurrentIndex -=width
      break
    case 39:
      if(heroCurrentIndex % width < width -1
        && !squares[heroCurrentIndex +1].classList.contains('wall')
        && !squares[heroCurrentIndex +1].classList.contains('ghost-lair'))
        heroCurrentIndex +=1

        if(heroCurrentIndex +1 === 392) {
          heroCurrentIndex = 364
        }
      break
    case 40:
      if(heroCurrentIndex + width < width * width
        && !squares[heroCurrentIndex +width].classList.contains('wall')
        && !squares[heroCurrentIndex +width].classList.contains('ghost-lair'))
        heroCurrentIndex +=width
      break
  }
  squares[heroCurrentIndex].classList.add('hero')

  sugarPillEaten()
  gumdropEaten()
  checkForGameOver()
  checkForWin()


  }
  document.addEventListener('keyup', moveHero)

  function sugarPillEaten(){
    if(squares[heroCurrentIndex].classList.contains('sugar-pill')){
      score++
      scoreDisplay.innerHTML = score
      squares[heroCurrentIndex].classList.remove('sugar-pill')
    }
  }

  function gumdropEaten(){
    if(squares[heroCurrentIndex].classList.contains('gumdrop')){
      score +=10
      monsters.forEach(monster=> monster.isHunted = true)
      setTimeout(unHuntMonsters, 10000)
      squares[heroCurrentIndex].classList.remove('gumdrop')
    }
  }

  function unHuntMonsters(){
    monsters.forEach(monster => monster.isHunted = false)
  }




  class Monster{
    constructor(className, startIndex, speed){
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.timerId = NaN
      this.isHunted = false
    }
  }

  monsters = [
    new Monster('bill', 348, 250),
    new Monster('bob', 377, 400),
    new Monster('biff', 351, 300),
    new Monster('bloid', 378, 500)
  ]

  monsters.forEach(monster => {
    squares[monster.currentIndex].classList.add(monster.className)
    squares[monster.currentIndex].classList.add('monster')
  })

  monsters.forEach(monster => moveMonster(monster))

  function moveMonster(monster){
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    monster.timerId = setInterval(function(){
      if (!squares[monster.currentIndex + direction].classList.contains('wall')
      && !squares[monster.currentIndex + direction].classList.contains('monster')) {
        squares[monster.currentIndex].classList.remove(monster.className, 'monster', 'hunted-monster')
        monster.currentIndex += direction
        squares[monster.currentIndex].classList.add(monster.className, 'monster')
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      if (monster.isHunted){
        squares[monster.currentIndex].classList.add('hunted-monster')
      }

      if(monster.isHunted && squares[monster.currentIndex].classList.contains('hero')) {
        monster.currentIndex = monster.startIndex
        score +=100
        squares[monster.currentIndex].classList.add(monster.className, 'monster')
      }
      checkForGameOver()

    }, monster.speed)
  }

  function checkForGameOver() {
    if (squares[heroCurrentIndex].classList.contains('monster')
    && !squares[heroCurrentIndex].classList.contains('hunted-monster')){
      monsters.forEach(hero => clearInterval(hero.timerId))
      document.removeEventListener('keyup', moveHero)
      window.location = 'https://pixelmaze.herokuapp.com/lose';
    }
  }

  function checkForWin(){
    if(score > 272){
      monsters.forEach(monster => clearInterval(monster.timerId))
      document.removeEventListener('keyup', moveHero)
      window.location = '/halloffame/win';
    }
  }
})
