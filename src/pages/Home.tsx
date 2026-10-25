import { ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router";
import { albums, asset, highlights } from "../data/content";
export function Home() {
  return (
    <>
      <section className="hero">
        <div
          className="hero-art"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(9,10,18,.96) 5%,rgba(9,10,18,.72) 48%,rgba(9,10,18,.26) 100%),url('${asset("assets/images/backgrounds/banner-hero.jpg")}')`,
          }}
        />
        <div className="container hero-content">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> HOMENAJE NO OFICIAL · ROCK EN
            ESPAÑOL
          </p>
          <h1>
            La música
            <br />
            trasciende <em>el tiempo.</em>
          </h1>
          <p className="hero-lead">
            Un espacio visual para descubrir la sensibilidad, la experimentación
            y el universo creativo de Gustavo Cerati.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/albumes">
              Explorar discografía <ArrowUpRight size={18} />
            </Link>
            <Link className="btn btn-outline" to="/historia">
              Conocer la historia <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>ARTE / SONIDO / MEMORIA</span>
          <span>DESLIZA PARA EXPLORAR ↓</span>
        </div>
      </section>
      <section className="section introduction">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">01 / EL UNIVERSO</p>
            <h2>
              Una obra que sigue <span>resonando.</span>
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              De Soda Stereo a una carrera solista de exploración constante,
              Gustavo Cerati convirtió cada etapa en una búsqueda artística
              propia.
            </p>
            <Link to="/historia" className="text-link">
              Conocer más <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / ÁLBUMES</p>
              <h2>
                Capítulos de un <em>mismo universo.</em>
              </h2>
            </div>
            <Link className="text-link" to="/albumes">
              Ver todos los álbumes <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="album-grid featured-grid">
            {albums.slice(0, 3).map((a) => (
              <Link to="/albumes" className="album-card" key={a.title}>
                <div className="album-image">
                  <img
                    src={a.image}
                    alt={`Portada de ${a.title}`}
                    loading="lazy"
                  />
                  <span className="album-arrow">
                    <MoveUpRight size={20} />
                  </span>
                </div>
                <div className="album-meta">
                  <span>
                    {a.era} · {a.year}
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.style}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section legacy">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / LEGADO</p>
              <h2>
                Más allá de <em>las canciones.</em>
              </h2>
            </div>
          </div>
          <div className="legacy-grid">
            {highlights.map((v) => (
              <article className="legacy-card" key={v.title}>
                <div className="legacy-icon">
                  <img loading="lazy" src={v.image} alt="" />
                </div>
                <span>{v.number}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="closing">
        <div className="container closing-inner">
          <p className="eyebrow">UNA HISTORIA QUE SIGUE VIVA</p>
          <h2>
            Siempre hay algo
            <br />
            <em>nuevo que escuchar.</em>
          </h2>
          <Link className="btn btn-primary" to="/albumes">
            Recorrer los álbumes <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
