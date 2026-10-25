import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { members, asset } from "../data/content";
export function History() {
  return (
    <>
      <section className="subhero">
        <div className="container">
          <p className="eyebrow">EL ARTISTA / LA BANDA / EL LEGADO</p>
          <h1>
            Una forma distinta
            <br />
            de <em>hacer música.</em>
          </h1>
          <p>
            Explora el recorrido creativo detrás de una de las obras más
            influyentes del rock latinoamericano.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container history-grid">
          <div className="history-photo">
            <img
              src={asset("assets/images/about/about-img.png")}
              alt="Retrato gráfico de Gustavo Cerati del proyecto original"
            />
          </div>
          <div className="history-copy">
            <p className="eyebrow">01 / GUSTAVO CERATI</p>
            <h2>
              La búsqueda como <em>identidad.</em>
            </h2>
            <p>
              Gustavo Cerati fue cantante, guitarrista, compositor y productor
              argentino. Su trabajo con Soda Stereo y su carrera solista
              marcaron distintos momentos del rock en español.
            </p>
            <p>
              La experimentación con texturas, guitarras y electrónica acompañó
              una obra donde la exploración creativa se convirtió en parte
              esencial del lenguaje musical.
            </p>
            <p className="content-note">
              Este contenido es una síntesis editorial de homenaje, no una
              biografía oficial.
            </p>
            <Link className="text-link" to="/albumes">
              Explorar la discografía <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section band-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SODA STEREO</p>
              <h2>
                Tres voces, <em>un sonido.</em>
              </h2>
            </div>
          </div>
          <p className="band-lead">
            El encuentro entre Cerati, Zeta Bosio y Charly Alberti dio forma a
            Soda Stereo, una banda fundamental del rock en español.
          </p>
          <div className="members-grid">
            {members.map((m) => (
              <article className="member" key={m.name}>
                <img
                  src={m.image}
                  alt={`Ilustración de ${m.name}`}
                  loading="lazy"
                />
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="closing">
        <div className="container closing-inner">
          <p className="eyebrow">SIGUE EXPLORANDO</p>
          <h2>
            Cada disco es
            <br />
            <em>una nueva etapa.</em>
          </h2>
          <Link className="btn btn-primary" to="/albumes">
            Ver álbumes <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
