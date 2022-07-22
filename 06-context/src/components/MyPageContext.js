import { AuthProvider } from "../context/AuthContext";
import { LanguajeProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <h2>Mi página</h2>
      <ThemeProvider>
        <LanguajeProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LanguajeProvider>
      </ThemeProvider>
    </div>
  );
};
export default MyPageContext;
