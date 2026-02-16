import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./product.module.css";
function Product() {
  return (
    <main className={styles.product}>
      <Header></Header>
      <section>
        <img className={styles.productImage} src="./public/img-1.jpg"></img>
        <div>
          <h1>About WorldWide.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis doloribus libero sunt expedita ratione iusto, magni,
            id sapiente sequi officiis et.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum perspiciatis? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis doloribus libero sunt expedita ratione
            iusto, magni, id sapiente sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
