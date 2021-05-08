import { Sevicio } from './sevicio';

export class Compra {
   id: string;
   servicios?: Sevicio[];
   nombreCliente: string;
   direccion: string;
   telefono: string;
   estado: string;
}
