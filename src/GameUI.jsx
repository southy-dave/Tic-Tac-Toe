import React from 'react'
import { useState } from 'react'

const GameUI = () => {
    const[gameActive, setGameActive] = useState(true)
    const[playerTurn, setPlayerTurn] = useState('X')
    
    const playGame = (cellIndex) => {
        const cell = document.getElementById(`cell-${cellIndex}`) 
        if (cell.textContent !== '' && gameActive) {return}
            {playerTurn === 'X' ? cell.textContent = 'X' : cell.textContent = 'O'} 
            {playerTurn === 'X' ? cell.className = 'text-[#592c91]' : cell.className = 'text-[#f09a13]'} 

       
        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X')
        checkWinner()
    }

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const [a, b, c] of winningCombinations) {
            const cellA = document.getElementById(`cell-${a}`);
            const cellB = document.getElementById(`cell-${b}`);
            const cellC = document.getElementById(`cell-${c}`);

            if (cellA.textContent && cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent) {
                
                document.getElementById('player-turn').textContent = `Player ${cellA.textContent} Wins!`;
                cellA.className = 'text-[#592c91] bg-[#000000] rounded-lg'
                cellB.className = 'text-[#592c91] bg-[#000000] rounded-lg'
                cellC.className = 'text-[#592c91] bg-[#000000] rounded-lg'
                setGameActive(false)
                return; 
            
            }   else if (Array.from({ length: 9 }, (_, i) => document.getElementById(`cell-${i}`).textContent).every(cell => cell !== '')) {
                document.getElementById('player-turn').textContent = "It's a Draw!";
                
            }    
        }
    
        return null;
    };

  return (
    <div className="h-screen flex flex-col items-center justify-center  bg-[#f2eeff] text-white">
        
    <div className='bg-[#fffefc] p-5 rounded-lg gap-1 flex flex-col items-center justify-center '>

      <h1 className='font-extrabold text-4xl text-[#592c91] mb-5'>Tic Tac Toe</h1>
    <div id='player-turn' className='flex font-medium text-lg text-[#2c2c2c] justify-center items-center rounded-lg mb-1'>Player {playerTurn}'s Turn</div>
    <div className='p-2 flex flex-col items-center justify-center gap-2 font-bold text-3xl'  >

    <div className='flex flex-row items-center justify-center gap-2'>
      <span id='cell-0' onClick={() => {playGame(0)}}></span>
      <span id='cell-1' onClick={() => {playGame(1)}}></span>
      <span id='cell-2' onClick={() => {playGame(2)}}></span>
    </div>

    <div className='flex flex-row items-center justify-center gap-2'>
      <span id='cell-3' onClick={() => {playGame(3)}}></span>
      <span id='cell-4' onClick={() => {playGame(4)}}></span>
      <span id='cell-5' onClick={() => {playGame(5)}}></span>
    </div> 

    <div className='flex flex-row items-center justify-center gap-2'>
      <span id='cell-6' onClick={() => {playGame(6)}}></span>
      <span id='cell-7' onClick={() => {playGame(7)}}></span>
      <span id='cell-8' onClick={() => {playGame(8)}}></span>
    </div>

    </div>

    <button id='reset-button' className='bg-[#592c91] text-white rounded-lg mt-1 h-8 w-64' onClick={() => {
      for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).textContent = ''
      }
      setPlayerTurn('X')
      document.getElementById('player-turn').textContent = 'Player X\'s Turn'
    }}>Reset</button>
    </div>

    </div>
  )
}

export default GameUI
