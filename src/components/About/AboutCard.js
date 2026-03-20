import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous ! Je suis{" "}
            <span className="purple">Dioman Diakite</span> originaire de{" "}
            <span className="purple">Bamako, Mali</span>.
            <br />
            J'étudie actuellement le{" "}
            <span className="purple">développement logiciel (L3)</span> à{" "}
            <span className="purple">ESIIA</span>.
            <br />
            Je suis titulaire d'un{" "}
            <span className="purple">
              Master 1 en Informatique de Gestion
            </span>{" "}
            (ESGIC, Bamako) et d'un{" "}
            <span className="purple">
              Bachelor en Informatique Réseaux et Sécurité
            </span>{" "}
            (École Racine, Marrakech).
            <br />
            <br />
            En dehors du code, j'ai développé une forte passion pour le{" "}
            <span className="purple">trading</span>, et je suis convaincu que
            les marchés financiers peuvent être un levier pour bâtir une
            fortune.
            <br />
            <br />
            Mon parcours a longtemps évité le développement. Après mon{" "}
            <span className="purple">
              bac en Sciences Exactes (2017, 13,78)
            </span>
            , je me suis orienté vers des filières où l'on codait peu :{" "}
            <span className="purple">Informatique de Gestion</span>, puis{" "}
            <span className="purple">Réseaux &amp; Sécurité</span>.
            <br />
            <br />
            Le trading m'a amené à tester une stratégie manuelle avec un{" "}
            <span className="purple">win rate d'environ 70%</span>. En voulant
            automatiser, j'ai collecté beaucoup de données et j'ai découvert ma
            passion pour la <span className="purple">data</span> et le
            développement.
            <br />
            <br />
            C'est dans cette optique que je me suis retrouvé en{" "}
            <span className="purple">France</span> : je poursuis un{" "}
            <span className="purple">bachelor en développement web</span> pour
            consolider mes bases avant un{" "}
            <span className="purple">master en Data</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Parcours international :{" "}
              <span className="purple">Mali -&gt; Maroc -&gt; France</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Focus actuel :{" "}
              <span className="purple">Développement + Data</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Objectif :{" "}
              <span className="purple">
                Automatiser des stratégies de trading
              </span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transformer la curiosité en compétences, et les données en
            décisions."
          </p>
          <footer className="blockquote-footer">Dioman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
