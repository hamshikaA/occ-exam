import IntroHeader from "./components/layout/header/header";
import Form from "./components/layout/form/form";
import Footer from "./components/layout/footer/footer";

const App = () => {
  return (
    <div className="grid__container">
      <main className="main__grid--container">
        <div className="intro__container">
          <IntroHeader />
        </div>

        <div className="form__container">
          <Form />
        </div>
      </main>
      <Footer className="footer__container" />
    </div>
  );
};

export default App;
