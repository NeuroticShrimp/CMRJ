import React from 'react';
import laureates from './LaureatesObject'


function Laureaci(){
  return(
          <div id="Laureaci" className="content-body">
          <h2>Laureaci Konkursów</h2>
          <h4>Rozstrzygnęliśmy Konkurs 2022</h4>
          <h5>Pani mgr inż. Angelika Zaszczynska z Instytutu Podstawowych Problemów Techniki PAN</h5>
          <p> Za pracę: Opracowanie nowej strategii wytwarzania i modyfikacji piezoelektrycznych polimerowych
            nanowlokien
            jako inteligentnych rusztowan w inzynierii tkanki nerwowejj</p>

          <img src="src\assets\images\2022 ZaszczynskaSm.jpg" width="400px" alt="2022 Zaszczynska" />

          <h5>Pan mgr inż. Jakub Mikolaj Banczerowski z Politechniki Warszawskiej</h5>
          <p>Za pracę: Proces technologiczny oraz modelowanie numeryczneobrobki termo-plastycznej tytanu
            na potrzeby inzynierii biomedycznej</p>

          <p>
            Zwycięzcy Konkursu 2022 otrzymaja równorzędne nagrody w wysokości CDN$4,000.00 każdy. Serdecznie
            gratulujemy laureatom, pozostałym kandydatom dziękujemy za zainteresowanie się naszym konkursem i
            życzymy sukcesów w pracy zawodowej. Zapraszamy do Konkursu 2023.</p>

          <h4>Laureaci naszych poprzednich konkursów:</h4>

          {laureates.map((laureate) => (
        <section className="laureatesList" key={laureate.Name} value={laureate.Name}>
          <h5>Laureaci Konkursu {laureate.Year} - Nagroda {laureate.Reward}</h5>
          <h5>{laureate.Name}</h5>
          <h6>{laureate.School} </h6>
          <br/>
        </section>
      ))}
          </div>
          )
}

export default Laureaci;