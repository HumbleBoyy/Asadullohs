import { t } from 'i18next'
import './home.css'

const Home = () => {
  return (
    <>
      <section id='home' className='home'>
        <div className="container">
           <div className="home_items_wrapper">
              <div className="home_item_right">
                 <h1 className='greeting'>{t("Home.greeting")}</h1>
                 <h2 className='name'>{t("Home.name")}</h2>
                 <h3 className='profession'>{t("Home.profession")}</h3>
                 <p className='info_paragraph'>{t("Home.paragraph")}</p>
                 <div className='home_buttons'>
                    <button className='home_btn'>{t("Home.btn1")}</button>
                    <button className='home_btn'>{t("Home.btn2")}</button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Home
