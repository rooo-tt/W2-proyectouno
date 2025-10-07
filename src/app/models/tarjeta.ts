/*ng g (generate)  i (interface) nombreinterfaz */
/*interfaz lo que me dice que va a ser (boleano y asi) */

export interface Tarjeta {
    id: string; //ejemplo de id alfanumerico -> 123ab 
    img: string; 
    alt: string;
    titulo: string;
    descripcion: string; 
    anualPublicacion: number; 
}
