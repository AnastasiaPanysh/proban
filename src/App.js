import LandingPage from './page/LandingPage';
import { TranslationProvider } from './components/TranslationProvider/TranslationProvider';
function App() {
  return (
    <TranslationProvider>
      <LandingPage />
    </TranslationProvider>
  )
}

export default App;
