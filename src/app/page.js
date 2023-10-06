import Articles from './layouts/Articles'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Articles />
      <Footer />
    </main>
  )
}
