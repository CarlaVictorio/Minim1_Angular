//Interfaz de 'Denuncia'

export interface Denuncia {
    titulo: string;
    descripcion: string;
    _id: string;
    fecha: Date;
    idUser: string;
    gravedad: number; 
    createdAt?: string;
    updatedAt?: string;
}