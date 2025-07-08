export interface Post {
  userId: number;
  id?: number; // opcional porque en POST no se envía
  title: string;
  body: string;
}
