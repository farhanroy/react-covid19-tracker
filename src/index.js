import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

function App() {
  const [covids, setCovids] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi"
    );

    setCovids(response.data);
  };

  return (
    <div className="App">
      <h1>😷 Data Covid19 di Indonesia</h1>
      <h2>Mengambil data covid19 berdasarkan provinsi</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="covids">
        {covids &&
          covids.map((covid, index) => {

            return (
              <div className="covid" key={index}>
                <h2>{covid.attributes.Provinsi}</h2>

                <div className="details">
                  <p>Meningkat ⬆️<b>:</b> {covid.attributes.Kasus_Meni}</p>
                  <p>Sembuh 💚<b>:</b> {covid.attributes.Kasus_Semb}</p>
                  <p>Positif 🤕<b>:</b> {covid.attributes.Kasus_Posi}</p>
                </div>
              </div>
            );
          })}
      </div>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
