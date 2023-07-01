import './Ejercitos.css';
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { AuthContext } from "./auth/AuthContext";
import { useContext } from 'react';
import React from 'react';
import Partida from './Partida';
import { useNavigate } from 'react-router-dom';

const Ejercitos = ({ territorioConquistado,  handleClickTerritorio }) => {
  const { gameId, user, territoryId, setTerritoryId, armyInfo, setArmyinfo, gameTurn, setGameTurn, color, setColor } = useContext(AuthContext);
  const [territories, setTerritories] = useState({});

  const [ejercitosPosiciones, setEjercitosPosiciones] = useState({
      1: { id: 1, color: "rojo", top: '5%', left: '51%' },
      2: { id: 2, color: "rojo", top: '3.5%', left: '58%' },
      3: { id: 3, color: "rojo", top: '2%', left: '63%' },
      4: { id: 4, color: "rojo", top: '2.5%', left: '70%' },
      5: { id: 5, color: "rojo", top: '5.5%', left: '68%' },
      6: { id: 6, color: "rojo", top: '2.5%', left: '78%' },
      7: { id: 7, color: "rojo", top: '8.5%', left: '70%' },
      8: { id: 8, color: "rojo", top: '12%', left: '67%' },
      9: { id: 9, color: "rojo", top: '17.5%', left: '71%' },
      10: { id: 10, color: "rojo", top: '15%', left: '63.5%' },
      11: { id: 11, color: "rojo", top: '8%', left: '58%' },
      12: { id: 12, color: "rojo", top: '13%', left: '52.5%' },
      13: { id: 13, color: "rojo", top: '9%', left: '46.5%' },
      14: { id: 14, color: "rojo", top: '6.5%', left: '44%' },
      15: { id: 15, color: "rojo", top: '9%', left: '40%' },
      16: { id: 16, color: "rojo", top: '11%', left: '80%' },
      17: { id: 17, color: "rojo", top: '5.5%', left: '39.5%' },
      18: { id: 18, color: "rojo", top: '1.8%', left: '36.5%' },
      19: { id: 19, color: "rojo", top: '0%', left: '32.5%' },
      20: { id: 20, color: "rojo", top: '30.5%', left: '82%' },
      21: { id: 21, color: "rojo", top: '24.5%', left: '83%' },
      22: { id: 22, color: "rojo", top: '31%', left: '76%' },
      23: { id: 23, color: "rojo", top: '33.5%', left: '21%' },
      24: { id: 24, color: "rojo", top: '26.5%', left: '25%' },
      25: { id: 25, color: "rojo", top: '27.5%', left: '19%' },
      26: { id: 26, color: "rojo", top: '21%', left: '19%' },
      27: { id: 27, color: "rojo", top: '16%', left: '10%' },
      28: { id: 28, color: "rojo", top: '16%', left: '40%' },
      29: { id: 29, color: "rojo", top: '14.5%', left: '47%' },
      30: { id: 30, color: "rojo", top: '20%', left: '51%' },
      31: { id: 31, color: "rojo", top: '23%', left: '47%' },
      32: { id: 32, color: "rojo", top: '29.5%', left: '47.5%' },
      33: { id: 33, color: "rojo", top: '29%', left: '54%' },
      34: { id: 34, color: "rojo", top: '11%', left: '15.5%' },
      35: { id: 35, color: "rojo", top: '10%', left: '9%' },
      36: { id: 36, color: "rojo", top: '5.5%', left: '11%' },
      37: { id: 37, color: "rojo", top: '6%', left: '17%' },
      38: { id: 38, color: "rojo", top: '5.5%', left: '22.5%' },
      39: { id: 39, color: "rojo", top: '2.5%', left: '13%' },
      40: { id: 40, color: "rojo", top: '2.5%', left: '6%' },
      41: { id: 41, color: "rojo", top: '22.5%', left: '75%' },
  });

  useEffect(() => {
    if (typeof gameTurn === 'string') {
        const regex = /[\\"\\\\]+/g;
        const cleanString = gameTurn.replace(regex, "");
        const turno = parseInt(cleanString, 10);
        console.log("El valor del turno es:", turno);
        setGameTurn(turno);
    }
  }, [gameTurn]);

  if (armyInfo === 'hola') {
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/territories/${gameId}`)
          .then((response) => {
            const data = response.data.resultado;
      
            setTerritories(data);
      
            setEjercitosPosiciones((prevEjercitosPosiciones) => {
              const updatedEjercitosPosiciones = { ...prevEjercitosPosiciones };
              data.forEach((territorio) => {
                const color = territorio.color;
                const id = territorio.id;
                if (updatedEjercitosPosiciones[id]) {
                  updatedEjercitosPosiciones[id] = {
                    ...updatedEjercitosPosiciones[id],
                    color: color
                  };
                }
              });
              return updatedEjercitosPosiciones;
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }, [gameId]);
      
  }
  else if (armyInfo === null) {
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/start/${gameId}`)
        .then((response) => {
            setArmyinfo('hola');
            const data = response.data.resultado;
            setTerritories(data);

            // Actualizar los colores en ejercitosPosiciones según los datos recibidos del backend
            setEjercitosPosiciones(prevEjercitosPosiciones => {
            const updatedEjercitosPosiciones = { ...prevEjercitosPosiciones };
            Object.keys(data).forEach((territorioId) => {
                const color = data[territorioId].color;
                const id = data[territorioId].id;
                if (updatedEjercitosPosiciones[id]) {
                updatedEjercitosPosiciones[id] = {
                    ...updatedEjercitosPosiciones[id],
                    color: color
                };
                }
            });
            return updatedEjercitosPosiciones;
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, [gameId]);
  }

  useEffect(() => {
    if (territorioConquistado && territories[territorioConquistado.id]) {
      const updatedTerritories = { ...territories };
      updatedTerritories[territorioConquistado.id].color = territorioConquistado.color;
      setTerritories(updatedTerritories);

      // Actualizar el color en ejercitosPosiciones según el territorio conquistado
      setEjercitosPosiciones(prevEjercitosPosiciones => {
        const updatedEjercitosPosiciones = { ...prevEjercitosPosiciones };
        const id = territorioConquistado.id;
        if (updatedEjercitosPosiciones[id]) {
          updatedEjercitosPosiciones[id] = {
            ...updatedEjercitosPosiciones[id],
            color: territorioConquistado.color
          };
        }
        return updatedEjercitosPosiciones;
      });
    }
  }, [territorioConquistado, territories]);

  const handleClick = (ejercitoId) => {
    console.log(`Ejército ${ejercitoId} fue clickeado.`);
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/attack/${ejercitoId}/${user}`)
        .then((response) => {
            const data = response.data;
            const territorio = data.id;
            const turno = data.turno;
            const color = data.color;
            setColor(color);
            console.log(data);
            console.log("el juego esta en el turno: ", gameTurn);
            console.log("el turno del jugador es: ", turno);
            if (turno !== gameTurn) {
                handleClickTerritorio('X');
                console.log("No es tu turno");
            } else {
                if (territorio === -1){
                    handleClickTerritorio(-1);
                    setTerritoryId(-1);
                } else {
                    console.log(ejercitoId);
                    setTerritoryId(ejercitoId);
                    handleClickTerritorio(ejercitoId); 
                } 
            }      
            
        })
        .catch((error) => {
            console.log(error);
        });
  };

  return (
    <div>
      {Object.values(ejercitosPosiciones).map((territorio) => (
        <img
          key={territorio.id}
          className={`ejercito-${territorio.id}`}
          src={`/assets/imgs/fichas/${territorio.color}.png`}
          alt={`Ejército ${territorio.color}`}
          style={{
            top: territorio.top,
            left: territorio.left,
            width: '2%',
            height: 'auto',
            position: 'absolute'
          }}
          onClick={() => handleClick(territorio.id)}
        />
      ))}

      <div className="ejercitos-container">
        <div className="jugador-container">
          <div className="jugador">Jugador 1</div>
          <img className="ejercito-amarillo" src="/assets/imgs/fichas/amarillo.png" alt="Ejército Amarillo" />
        </div>
        <div className="jugador-container">
          <div className="jugador">Jugador 2</div>
          <img className="ejercito-rojo" src="/assets/imgs/fichas/rojo.png" alt="Ejército Rojo" />
        </div>
        <div className="jugador-container">
          <div className="jugador">Jugador 3</div>
          <img className="ejercito-azul" src="/assets/imgs/fichas/azul.png" alt="Ejército Azul" />
        </div>
        <div className="jugador-container">
          <div className="yo">Jugador 4 ({color})</div>
          <img className="ejercito-gris" src={`/assets/imgs/fichas/${color}.png`} alt="Ejército Gris" />
        </div>
      </div>
    </div>
  );
};

export default Ejercitos;