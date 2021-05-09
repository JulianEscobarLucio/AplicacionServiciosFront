import { Servicio } from './sevicio';

export class Compra {
   id: string;
   servicios?: Servicio[];
   nombreCliente: string;
   direccion: string;
   telefono: string;
   estado: string;
}
