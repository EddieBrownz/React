import { Link } from "react-router-dom";
import "../assests/general.css";
import "../assests/Header.css";
function Home(){
        return(
                <div className="body">
                <div className="body-container">
                <div className="body-1">
                    <div className="body-pic">
                        <img
                            className="body-pic1"
                            src="./src/pics/byggnad1.png"
                            alt="no image found"
                        />
                    </div>
                    <div className="body-text">
                        <p className="intro">Yttertavle ägg</p>
                        <p className="body-pargraph">
                            är ett familjeföretag som bara har frigående höns.
                            Anläggningen i Yttertavle är Norrlands största med
                            frigående höns. "Ägg-Johnny", före detta
                            industriarbetare på Obbola fabriken sadlade 1992 om för
                            att bli egen företagare. Innan dess hade han vid sidan
                            av jobbet drivit äggproduktion i mindre skala med
                            burhöns sedan 1986. Jonnys fru Eva som tidigare jobbat
                            som dagmamma kavlade också upp ärmarna och gick in i
                            företaget. Företaget har numera 4 heltidsanställa plus
                            extra-anställda och omsätter 22 miljoner kronor per år.
                        </p>
                    </div>
                </div>
                <div className="body-2">
                    <div className="body-text-2">
                        <p className="intro2">Yttertavle ägg Ägg från frigående höns</p>
                        <p className="body-pargraph-2">
                            Höns i frigående system lever i stora flockar inomhus.
                            Hönsen har tillgång till ströbad, värprede och
                            sittpinne. I stallet, som kan vara med våningssystem
                            eller med bara en våning, skaffar sig varje höna sin
                            plats i flocken och i stallet. Hon använder oftast samma
                            värprede varje dag. Ägg från höns i frigående system
                            inomhus märks med en kod, t.ex. 2SE599. Koden betyder
                            2=frigående inomhus, SE=Sverige, 599 producentens nummer
                        </p>
                    </div>
                    <div className="body-pic-2">
                        <img
                            src="./src/pics/free-range-chickens.jpg"
                            alt="no image found"
                        />
                    </div>
                </div>
            </div>
            </div>
        )
}
export default Home;
