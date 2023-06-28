import './Partida.css'
import Dados from './Dados';
import Ejercitos from './Ejercitos';
export default function Partida() {
    return (
        <>
        <header>
        <div>
          <a href="/acerca" target="_blank">
            <img src="src/assets/imgs/logo.png" className="logo expelliarmus" alt="logo" />
          </a> 
        </div>
        </header>
        <br></br>
        <h1>Simulación de una jugada</h1>
        <h2>Partida X987A14</h2>

        <div class="parent">
            <div class="div1"> <div class="image-container"> 
                <img class="image1" src="src/assets/imgs/tablero.png" /> 
                <Ejercitos />
            </div></div>
            <div class="div2"> 
                <p>Tu objetivo es conquistar todos los territorios del mundo de Harry Potter</p><br></br>
                <h4>Territorios conquistados: 5</h4>
            </div>
            <div class="div3"> <div className="dado-container">
                <Dados />
            </div></div>
        </div>

        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}


// import React from 'react';
// import Modal from 'react-modal';
// import './Partida.css';
// import Dados from './Dados';
// import Ejercitos from './Ejercitos';

// export default function Partida({ territorio, winner, loser, territories }) {
//     const [showWinnerModal, setShowWinnerModal] = React.useState(false);

//     // Función para abrir el modal del ganador
//     const showWinnerDialog = () => {
//         setShowWinnerModal(true);
//     };

//     React.useEffect(() => {
//         if (winner !== false) {
//             showWinnerDialog();
//         }
//     }, [winner]);

//     return (
//         <>
//             <header>
//                 <div>
//                     <a href="/acerca" target="_blank">
//                         <img src="src/assets/imgs/logo.png" className="logo expelliarmus" alt="logo" />
//                     </a>
//                 </div>
//             </header>
//             <br />
//             <h1>Simulación de una jugada</h1>
//             <h2>Partida X987A14</h2>

//             <div className="parent">
//                 <div className="div1">
//                     <div className="image-container">
//                         <img className="image1" src="src/assets/imgs/tablero.png" />
//                         <Ejercitos territorioConquistado={territorio} cantidadTerritoriosConquistados={territories} />
//                     </div>
//                 </div>
//                 <div className="div2">
//                     <p>Tu objetivo es conquistar todos los territorios del mundo de Harry Potter</p><br />
//                     <h4>Territorios conquistados: {territories}</h4>
//                 </div>
//                 <div className="div3">
//                     <div className="dado-container">
//                         <Dados />
//                     </div>
//                 </div>
//             </div>

//             <p className="read-the-docs">
//                 Página hecha por el equipo Las Motomamis
//             </p>

//             {/* Modal del ganador */}
//             <Modal
//                 isOpen={showWinnerModal}
//                 onRequestClose={() => setShowWinnerModal(false)}
//                 contentLabel="Has ganado"
//             >
//                 <h3>¡El jugador {winner} ha ganado!</h3>
//                 <button onClick={() => setShowWinnerModal(false)}>Cerrar</button>
//             </Modal>
//         </>
//     );
// }
