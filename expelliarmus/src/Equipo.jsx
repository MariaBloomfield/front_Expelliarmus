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
                <img class="img-block" src="src/assets/imgs/mery.jpeg" alt="" />
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
        <h2>¿Quiénes somos?</h2>
        <div class="container">
            <img src="src/assets/imgs/nosotras.jpeg" alt="" />
            <p> Somos 2 amigas estudiantes de Ingeniería, estamos aprendiendo a programar en distintos lenguajes y hacer páginas webs funcionales. 
            Nos encanta Harry Potter y quizimos usar esta temática para darle más emoción y magia a nuestro juego. Los dejamos muy invitados a
            jugar contra sus amigos, pudiendo elegir su casa favorita de Hogwarts y conquistar diferentes territorios del Mundo Magico de Harry Potter.</p>
        </div>
        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}