import './Partida.css'
import Dados from './Dados';
import Ejercitos from './Ejercitos';
import { AuthContext } from "./auth/AuthContext";
import { useContext, useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export default function Partida() {
    const [mostrarDados, setMostrarDados] = useState(false);
    const [territoryId, setTerritoryId] = useState(-1);
    const { user, setUser, numterritories, setNumterritories, datosterritory, winner, gameId, setGameId } = useContext(AuthContext);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState('');
    const [mostrarPopup, setMostrarPopup] = useState(false); 
    const [mostrarPopup2, setMostrarPopup2] = useState(false); 
    const [mostrarPopup3, setMostrarPopup3] = useState(false);

    useEffect(() => {
        if (typeof gameId === 'string') {
            const regex = /[\\"\\\\]+/g;
            const cleanString = gameId.replace(regex, "");
            const numero = parseInt(cleanString, 10);
            console.log("El valor de gameId es:", numero);
            setGameId(numero);
        }
    }, [gameId]);

    useEffect(() => {
        if (typeof numterritories === 'string') {
            const regex1 = /[\\"\\\\]+/g;
            const cleanString1 = numterritories.replace(regex1, "");
            const territorios = parseInt(cleanString1, 10);
            console.log("El valor de num_territorios es:", territorios);
            setNumterritories(territorios);
        }
    }, [numterritories]);

    useEffect(() => {
        if (typeof user === 'string') {
            const regex = /[^a-zA-Z0-9]/g;
            const cleanString = user.replace(regex, "");
            console.log("El nombre de usuario es:", cleanString);
            setUser(cleanString);
        }
    }, [user]);


    const handleClickTerritorio = (ejercitoId) => {
        if ( ejercitoId === 'X'){
            setMostrarPopup3(true);
        } else {
            setTerritoryId(ejercitoId);
            if (ejercitoId !== -1) {
                setMostrarDados(true);
            } else {
                setMostrarDados(false);
                setErrorMensaje('¡No puedes atacar ese ejército!');
                setMostrarModal(true);
            }
            console.log(`Territorio ${ejercitoId} fue clickeado.`);
        }
    };

    const resultado = (data) => {
        console.log(data);
        const territorio = data.territorio.id;
        console.log(data.winner);
        if (territorio !== -1) {
            console.log("ataque existoso");
            setMostrarPopup(true);
            if ( numterritories === 41) {
                setMostrarPopup2(true);
            }
        }
    }

    const actualizarMostrarDados = (mostrar) => {
        setMostrarDados(mostrar);
    };

    return (
        <>
            <br />
            <h2>Partida X{gameId}</h2>
            <h4>Elige un territorio para comenzar a atacar</h4>

            <div class="parent">
                <div class="div1">
                    <div class="image-container">
                        <img class="image1" src="/assets/imgs/tablero.png" />
                        <Ejercitos
                            territorioConquistado={datosterritory}
                            handleClickTerritorio={handleClickTerritorio}
                        />
                    </div>
                </div>
                <div class="div2">
                    <p>Tu objetivo es conquistar todos los territorios del mundo de Harry Potter</p>
                    <br />
                    <h4>Territorios conquistados: {numterritories}</h4>
                </div>
                {mostrarDados && (
                    <div class="div3">
                        <div className="dado-container">
                            <Dados resultado={resultado} />
                        </div>
                    </div>
                )}
            </div>
            <ReactModal
                isOpen={mostrarModal}
                onRequestClose={() => setMostrarModal(false)}
                contentLabel="¡No puedes atacar ese ejército!"
                className="popup-container"
            >
                <div className="content">
                    <h3>{errorMensaje}</h3>
                    <button className="close-button" onClick={() => setMostrarModal(false)}>Cerrar</button>
                </div>
            </ReactModal>
            <ReactModal
                isOpen={mostrarPopup}
                onRequestClose={() => setMostrarPopup(false)}
                contentLabel="Territorio conquistado"
                className="popup-container"
            >
                <div className="content">
                    <h3 className="mensajeError">Territorio conquistado</h3>
                    <button className="close-button" onClick={() => setMostrarPopup(false)}>Cerrar</button>
                </div>
            </ReactModal>
            <ReactModal
                isOpen={mostrarPopup2}
                onRequestClose={() => setMostrarPopup2(false)}
                contentLabel="Territorio conquistado"
                className="popup-container"
            >
                <div className="content">
                    <h3>¡Felicitaciones! Has ganado el juego</h3>
                    <button className="close-button" onClick={() => setMostrarPopup2(false)}>Cerrar</button>
                </div>
            </ReactModal>
            <ReactModal
                isOpen={mostrarPopup3}
                onRequestClose={() => setMostrarPopup3(false)}
                contentLabel="Territorio conquistado"
                className="popup-container"
            >
                <div className="content">
                    <h3>No es tu turno, no puedes atacar todavía :(</h3>
                    <button className="close-button" onClick={() => setMostrarPopup3(false)}>Cerrar</button>
                </div>
            </ReactModal>


            <p className="read-the-docs">Página hecha por el equipo Las Motomamis</p>
        </>
    );
}