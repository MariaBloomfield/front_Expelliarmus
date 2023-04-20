import './Equipo.css'
export default function Equipo() {
    return (
        <>
        <h1 class="page-heading"> Equipo: Las Motomamis</h1>
        <section class="two-column">
            <div>
                <span>
                    <h2>María Bloomfield Joannon</h2>
                    <p> Estudiante de Ingeniería de Software de cuarto año en la Pontificia Universidad Católica. En su tiempo libre juega fútbol, escucha música y lee.  
                    </p>

                </span>
                <img src="src/assets/imgs/mery.jpeg" alt="" />
            </div>
            <div>
                <span>
                    <h2>Olivia Irarrázabal Pavez</h2>
                        <p>Estudiante de Ingeniería de Software de cuarto año en la Pontificia Universidad Católica. En su tiempo libre le gusta hacer trekkings, tocar guitarra y piano. 
                    </p>
                </span>
                <img src="src/assets/imgs/oli.jpeg" alt="" />
            </div>
        </section>
        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}