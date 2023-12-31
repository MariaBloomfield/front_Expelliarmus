import './Equipo.css'
import { useContext, useEffect } from 'react';
import { AuthContext } from "./auth/AuthContext";

export default function Equipo() {
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        if (typeof user === 'string') {
            const regex = /[^a-zA-Z0-9]/g;
            const cleanString = user.replace(regex, "");
            console.log("El nombre de usuario es:", cleanString);
            setUser(cleanString);
        }
    }, [user]);

    return (
        <>
        <br></br>
        <h1 class="page-heading"> Equipo: Las Motomamis</h1>
        <section class="two-column">
            <div>
                <span>
                    <h2>María Bloomfield Joannon</h2>
                    <p> Estudiante de Ingeniería de Software de cuarto año en la Pontificia Universidad Católica. En su tiempo libre juega fútbol, escucha música y lee.  
                    </p>

                </span>
                <img class="img-block" src="/assets/imgs/equipo/mery.jpeg" alt="" />
            </div>
            <div>
                <span>
                    <h2>Olivia Irarrázabal Pavez</h2>
                        <p>Estudiante de Ingeniería de Software de cuarto año en la Pontificia Universidad Católica. En su tiempo libre le gusta hacer trekkings, tocar guitarra y piano. 
                    </p>
                </span>
                <img src="/assets/imgs/equipo/oli.jpeg" alt="" />
            </div>
        </section>
        <div class="container">
            <img class="img2"src="/assets/imgs/equipo/nosotras.jpeg" alt="" />
            <div>
                <h1>¿Quiénes somos?</h1>
                <p class="description">
                Somos 2 amigas estudiantes de Ingeniería, estamos aprendiendo a programar en distintos lenguajes y hacer páginas webs funcionales. 
                Nos encanta Harry Potter y quisimos usar esta temática para darle más emoción y magia a nuestro juego. Los dejamos muy invitados a
                jugar contra sus amigos, pudiendo elegir su casa favorita de Hogwarts y conquistar diferentes territorios del Mundo Magico de Harry Potter.</p>
            </div>
        </div>

        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}