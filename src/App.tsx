import { Outlet } from "react-router";
import { Navbar } from "./pages/Home/Navbar/Navbar";
import styles from "./pages/Home/home.module.scss";
import "./App.scss";

function App() {
  return (
    <section className={styles.container}>
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
