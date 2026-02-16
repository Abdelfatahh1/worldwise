import Header from "../components/Header";
import styles from "./pricing.module.css";
function Pricing() {
  return (
    <main className={styles.pricing}>
      <Header></Header>
      <section>
        <div>
          <h1>Simple pricing. Just $9/month.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img className={styles.pricingImage} src="./public/img-2.jpg"></img>
      </section>
    </main>
  );
}

export default Pricing;
