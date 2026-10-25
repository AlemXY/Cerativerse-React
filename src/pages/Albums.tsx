import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { albums, type Album } from "../data/content";
type Filter = "Todos" | Album["era"];
const filters: Filter[] = ["Todos", "Solista", "Soda Stereo", "Colaboración"];
export function Albums() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [current, setCurrent] = useState<Album | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = albums.filter((a) => filter === "Todos" || a.era === filter);
  const show = (album: Album) => {
    setCurrent(album);
    dialog.current?.showModal();
  };
  return (
    <>
      <section className="subhero">
        <div className="container">
          <p className="eyebrow">DISCOGRAFÍA / SELECCIÓN DESTACADA</p>
          <h1>
            Obras que abren
            <br />
            <em>otros mundos.</em>
          </h1>
          <p>
            Seis publicaciones destacadas del proyecto original. Explora sus
            distintas etapas.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filtrar por etapa">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={filter === f ? "selected" : ""}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="album-grid">
            {visible.map((a) => (
              <button
                key={a.title}
                className="album-card album-button"
                type="button"
                onClick={() => show(a)}
                aria-label={`Más información sobre ${a.title}`}
              >
                <div className="album-image">
                  <img
                    src={a.image}
                    alt={`Portada de ${a.title}`}
                    loading="lazy"
                  />
                  <span className="album-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="album-meta">
                  <span>
                    {a.era} · {a.year}
                  </span>
                  <h2>{a.title}</h2>
                  <p>{a.style}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="catalog-note">
            Selección de referencia, no discografía exhaustiva. Las portadas
            pertenecen a sus respectivos titulares.
          </p>
        </div>
      </section>
      <dialog
        ref={dialog}
        className="album-dialog"
        aria-label={
          current ? `Detalle de ${current.title}` : "Detalle del álbum"
        }
        onClick={(e) => {
          if (e.currentTarget === e.target) dialog.current?.close();
        }}
      >
        <button
          aria-label="Cerrar detalle"
          type="button"
          className="dialog-close"
          onClick={() => dialog.current?.close()}
        >
          <X size={22} />
        </button>
        {current && (
          <div className="dialog-grid">
            <img src={current.image} alt={`Portada de ${current.title}`} />
            <div>
              <span className="eyebrow">
                {current.era} · {current.year}
              </span>
              <h2>{current.title}</h2>
              <p>{current.description}</p>
              <p className="dialog-style">{current.style}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dialog.current?.close()}
              >
                Volver a los álbumes
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
