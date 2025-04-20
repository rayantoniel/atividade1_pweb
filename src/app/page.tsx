import { ProductList } from "../components/ProductList";
import "../styles/Page.css";

export default function Home() {
  return (
    <main className="main-page">
      <h1 className="main-title">Catálogo de Produtos</h1>
      <ProductList />
    </main>
  );
};