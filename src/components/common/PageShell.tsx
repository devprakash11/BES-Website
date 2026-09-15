import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function PageShell({eyebrow,title,children}:{eyebrow:string,title:string,children:ReactNode}){return <><section className="page-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div></section><section className="section"><div className="container page-content">{children}</div></section></>}
export function Placeholder({title,text}:{title:string,text:string}){return <article className="content-card"><h2>{title}</h2><p>{text}</p><Link to="/contact" className="text-link">Contact the school <ArrowRight size={17}/></Link></article>}
