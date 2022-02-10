const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
const list=[];

const ulParent=document.createElement('ul');
for(let i of warriorsGames)
{ 
    let {awayTeam,homeTeam}=i;
   
   let winnerTeam=awayTeam.isWinner?awayTeam.team:homeTeam.team;
   let point=awayTeam.points -homeTeam.points;
   let p=point>0?point:-1*point;
   
   
   const gameli=document.createElement('li');
   gameli.innerHTML=`${winnerTeam} is won with <b>${p}</b> points `;
   if(winnerTeam ==awayTeam.team)
      gameli.style.backgroundColor='#00ff00';
   else
   gameli.style.backgroundColor='#ff0000';
   ulParent.append(gameli);
}
document.body.prepend(ulParent);
