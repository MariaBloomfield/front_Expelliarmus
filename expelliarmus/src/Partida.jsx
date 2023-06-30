import './Partida.css'
import Dados from './Dados';
import Ejercitos from './Ejercitos';
import { AuthContext } from "./auth/AuthContext";
import { useContext, useState } from 'react';
import ReactModal from 'react-modal';

export default function Partida() {
    const [mostrarDados, setMostrarDados] = useState(false);
    // const { territoryId, setTerritoryId } = useContext(AuthContext);
    const [territoryId, setTerritoryId] = useState(-1);
    const { numterritories, datosterritory } = useContext(AuthContext);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState('');

    const handleClickTerritorio = (ejercitoId) => {
        setTerritoryId(ejercitoId);
        if (ejercitoId !== -1) {
            setMostrarDados(true);
        } else {
            setMostrarDados(false);
            setErrorMensaje('No puedes atacar ese ejército');
            setMostrarModal(true);
        }
        console.log(`Territorio ${ejercitoId} fue clickeado.`);
    };

    const resultado = (data) => {
        console.log(data);
        const winner = data.winner;
        const territorio = data.territorio;
    }
      
    const actualizarMostrarDados = (mostrar) => {
        setMostrarDados(mostrar);
    };

    const { gameId } = useContext(AuthContext);
    return (
        <>
        <br></br>
        <h2>Partida X{ gameId }</h2>

        <div class="parent">
            <div class="div1"> <div class="image-container"> 
                <img class="image1" src="src/assets/imgs/tablero.png" /> 
                <Ejercitos territorioConquistado={datosterritory} handleClickTerritorio={handleClickTerritorio} />
            </div></div>
            <div class="div2"> 
                <p>Tu objetivo es conquistar todos los territorios del mundo de Harry Potter</p><br></br>
                <h4>Territorios conquistados: {numterritories}</h4>
            </div>
            {mostrarDados && (
                <div class="div3"> <div className="dado-container">
                    <Dados resultado={resultado}/>    
                </div></div>
            )}
        </div>
        <ReactModal
            isOpen={mostrarModal}
            onRequestClose={() => setMostrarModal(false)}
            contentLabel="No puedes atacar ese ejército"
        >
            <h3>{errorMensaje}</h3>
            <button onClick={() => setMostrarModal(false)}>Cerrar</button>
        </ReactModal>

        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}
