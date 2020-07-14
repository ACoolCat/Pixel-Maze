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


  }
  document.addEventListener('keyup', moveHero)




  class Monster{
    constructor(className, startIndex, speed){
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
    }
  }

  monster = [
    new Monster('bill', 348, 250),
    new Monster('bob', 377, 400),
    new Monster('biff', 351, 300),
    new Monster('bloid', 378, 500)
  ]

  monster.forEach(monster => {
    squares[monster.currentIndex].classList.add(monster.className)
    squares[monster.currentIndex].classList.add('monster')
  })
})
