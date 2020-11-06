import './App.css';
import Row from './Compoents/Row';
import request from './request.js';
import './App.css'
import Banner from './Compoents/Banner';
import Nav from './Compoents/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner  />
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOrginal}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action  Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;
