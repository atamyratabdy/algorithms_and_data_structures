function alphabetWar(fight) {
    const arrayOfFighters = fight.split(''),
          powersOfLetters = { w: -4, p: -3, b: -2, s: -1, z: 1, d: 2, q: 3, m: 4 }      
    let sum = 0
    
    arrayOfFighters.map((fighter) => sum+= powersOfLetters[fighter])
    
    if(sum<0) return "Left side wins!";
    else if(sum > 0) return "Right side wins!";
    return "Let's fight again!";
  }

    /**
   * 
   * alphabetWar("z") => "Right side wins!"
   *     
   * alphabetWar("wwwwww") => "Left side wins!"
   * 
   * alphabetWar("zdqmwpbs") => "Let's fight again!"
   * 
   */