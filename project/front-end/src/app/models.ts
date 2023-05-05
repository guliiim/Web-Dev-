export interface AuthToken{
  token: string;
  user: number;
  role: string;
}
export interface Category {
  id: number;
  name: string;
}
export interface Book {
  id:number;
  name:string;
  author :string;
  description :string;
  price:number;
  year :number;
  image:string;
  category :string;

}
export interface User{
  username: string;
  password: string;
}
export interface Order {
  id :number;
  book: string;
  user: string;
  status: string;
}
