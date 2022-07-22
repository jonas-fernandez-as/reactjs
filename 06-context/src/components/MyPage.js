import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Mi aplicacion SIN context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de página",
  },
  en: {
    headerTitle: "Mi aplicacion without context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

let initialAuth=null;

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);
  const handleTheme = (e) => {
    // console.log(e.target.value)
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
   console.log(e.target.value)

   if(e.target.value === "es"){
    setLanguage("es")
    setTexts(translations.es);
   }else{
    setLanguage("en");
    setTexts(translations.en)
   }
  };

  const handleAuth = (e)=>{
   if(auth){
    setAuth(null);
   }else{
    setAuth(true);
   }
  }
  return (
    <div className="my-page">
      <h2>Mi página</h2>
      <Header
        auth={auth}
        theme={theme}
        handleAuth={handleAuth}
        handleLanguage={handleLanguage}
        handleTheme={handleTheme}
        texts={texts}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
export default MyPage;
