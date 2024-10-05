import RegistrationForm from "./components/form";
import Header from "./components/header";
import { useTranslation } from 'react-i18next';
import './i18n'; 

function App() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    // handleMenuClose(null);
  };
  return (
    <div>
    <Header handleLanguageChange={handleLanguageChange}/>
    <RegistrationForm />
  </div>
  );
}

export default App;
