import {Link} from 'react-router';
export function NotFound(){return <section className="subhero not-found"><div className="container"><p className="eyebrow">404 / PÁGINA NO ENCONTRADA</p><h1>Perdimos el <em>ritmo.</em></h1><p>La página que buscas no existe o cambió de dirección.</p><Link className="btn btn-primary" to="/">Volver al inicio</Link></div></section>}
