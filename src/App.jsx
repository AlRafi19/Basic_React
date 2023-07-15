import './assets/css/style.css'
import Header from './component/Header';
import ContentSection from './component/ContentSection';
import Footer from './component/Footer';
function App() {

  return (
    <div>
      <div id="container">
          <Header text="Chat With Me"/>
          <div className='mainContent'>
            <ContentSection/>
          </div>
          <Footer footerText="Favourite Quote" qoute="'Happiness and freedom begin with one principle. Some things are within your control and some are not..' - Epictetus"/>
      </div>
    </div>
  )
}

export default App