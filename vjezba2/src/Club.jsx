import React, {useState} from "react";
import RealMadrid from "./assets/RealMadrid.jpg";
import Barcelona from "./assets/Barcelona.png";
import ManchesterUnited from "./assets/ManchesterUnited.png";
import BayernMunich from "./assets/BayernMunich.png";
import Juventus from "./assets/Juventus.png";
import ParisSaintGermain from "./assets/ParisSaintGermain.png";
import Liverpool from "./assets/Liverpool.png";
import Ajax from "./assets/Ajax.png";
import ACMilan from "./assets/ACMilan.png";
import BorussiaDortmund from "./assets/BorussiaDortmund.png";
import ManchesterCity from "./assets/ManchesterCity.png";
import Hajduk from "./assets/Hajduk.png";
import Default from "./assets/Default.png";
import "./Club.css";

const Club = ({club, setClub, reset}) => {
    
    const [displayOptions, setDisplayOptions] = useState(null);

    const clubOptions = [
       {value: "RealMadrid" , src: RealMadrid, alt: "Real Madrid", players: [
        "Thibaut Courtois",
        "Dani Carvajal",
        "Éder Militão",
        "David Alaba",
        "Marcelo",
        "Casemiro",
        "Luka Modrić",
        "Toni Kroos",
        "Karim Benzema",
        "Vinícius Júnior",
        "Eden Hazard"
      ]},
       {value: "Barcelona" , src: Barcelona, alt: "Barcelona", players: [
        "Marc-André ter Stegen",
        "Sergi Roberto",
        "Gerard Piqué",
        "Ronald Araújo",
        "Jordi Alba",
        "Sergio Busquets",
        "Frenkie de Jong",
        "Pedri",
        "Lionel Messi",
        "Antoine Griezmann",
        "Ousmane Dembélé"
      ]
      },
       {value: "ManchesterUnited", src: ManchesterUnited, alt: "Manchester United", players: [
        "David de Gea",
        "Aaron Wan-Bissaka",
        "Harry Maguire",
        "Raphael Varane",
        "Luke Shaw",
        "Scott McTominay",
        "Fred",
        "Bruno Fernandes",
        "Paul Pogba",
        "Mason Greenwood",
        "Cristiano Ronaldo"
      ]
      },
       {value: "BayernMunich", src: BayernMunich, alt: "Bayern Munich", players: [
        "Manuel Neuer",
        "Benjamin Pavard",
        "Niklas Süle",
        "Lucas Hernandez",
        "Alphonso Davies",
        "Joshua Kimmich",
        "Leon Goretzka",
        "Leroy Sané",
        "Thomas Müller",
        "Kingsley Coman",
        "Robert Lewandowski"
      ]
      },
       {value: "Juventus", src: Juventus, alt: "Juventus", players: [
        "Wojciech Szczęsny",
        "Juan Cuadrado",
        "Giorgio Chiellini",
        "Matthijs de Ligt",
        "Alex Sandro",
        "Adrien Rabiot",
        "Rodrigo Bentancur",
        "Federico Chiesa",
        "Paulo Dybala",
        "Dejan Kulusevski",
        "Alvaro Morata"
      ]
      },
       {value: "ParisSaintGermain", src: ParisSaintGermain, alt: "Paris Saint Germain", players: [
        "Keylor Navas",
        "Achraf Hakimi",
        "Presnel Kimpembe",
        "Marquinhos",
        "Nuno Mendes",
        "Idrissa Gueye",
        "Marco Verratti",
        "Georginio Wijnaldum",
        "Lionel Messi",
        "Kylian Mbappé",
        "Neymar Jr."
      ]
      },
      {value: "Liverpool", src: Liverpool, alt: "Liverpool", players: [
          "Alisson Becker", 
          "Trent Alexander-Arnold",
          "Virgil van Dijk",
          "Joe Gomez",
          "Andrew Robertson",
          "Jordan Henderson",
          "Fabinho",
          "Naby Keïta",
          "Mohamed Salah",
          "Sadio Mané",
          "Roberto Firmino"
        ]
      },
      {value: "Ajax", src: Ajax, alt: "Ajax", players: [
          "André Onana", 
          "Noussair Mazraoui",
          "Daley Blind",
          "Jurrien Timber",
          "Nicolás Tagliafico",
          "Ryan Gravenberch",
          "Davy Klaassen",
          "Steven Berghuis",
          "Dusan Tadic",
          "Sebastien Haller",
          "Antony"
        ]
      },
      {value: "ACMilan", src: ACMilan, alt: "AC Milan", players: [
          "Gianluigi Donnarumma", 
          "Davide Calabria",
          "Fikayo Tomori",
          "Simon Kjaer",
          "Theo Hernandez",
          "Franck Kessié",
          "Ismael Bennacer",
          "Hakan Calhanoglu",
          "Brahim Diaz",
          "Zlatan Ibrahimovic",
          "Alexis Saelemaekers"
        ]
      },
      {value: "BorussiaDortmund", src: BorussiaDortmund, alt: "Borussia Dortmund", players: [
          "Roman Bürki", 
          "Thomas Meunier",
          "Mats Hummels",
          "Manuel Akanji",
          "Raphael Guerreiro",
          "Emre Can",
          "Jude Bellingham",
          "Marco Reus",
          "Erling Haaland",
          "Giovanni Reyna",
          "Thorgan Hazard"
        ]
      },
      {value: "ManchesterCity", src: ManchesterCity, alt: "Manchester City", players: [
          "Ederson", 
          "Kyle Walker",
          "Ruben Dias",
          "Aymeric Laporte",
          "João Cancelo",
          "Kevin De Bruyne",
          "Rodri",
          "Phil Foden",
          "Riyad Mahrez",
          "Gabriel Jesus",
          "Raheem Sterling"
        ]
      },
      {value: "Hajduk" , src: Hajduk, alt: "Hajduk", players: [
        "Ivan Lučić",
        "Dominik Prpić",
        "Filip Uremović",
        "Dino Mikanović",
        "Zvonimir Šarlija",
        "Rokas Pukštas",
        "Filip Kronović",
        "Mihael Žaper",
        "Marko Livaja",
        "Ivan Perišić",
        "Nikola Kalinić"
      ]} 
    ];

    const handleSelectClub = (selectedClub) => {
        setClub({
            value: selectedClub.value,
            src: selectedClub.src,
            alt: selectedClub.alt,
            players: selectedClub.players
          });
        setDisplayOptions(!displayOptions);
        reset();
    }

    const toggleDisplayOptions = () => {
        setDisplayOptions(!displayOptions);
    }

    return (
        <div className = "club-logos">
            {club.value ? 
            <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <button className = "selected-logo" onClick = {toggleDisplayOptions}>
                    <img src = {clubOptions.find((selectedClub) => selectedClub.value === club.value)?.src}/>
                </button>
                <h1>{clubOptions.find((selectedClub) => selectedClub.value === club.value)?.alt}</h1>
            </div> : 
            <div>
                <button className = "selected-logo" onClick = {toggleDisplayOptions}>
                    <img src ={Default} alt = {"Choose a club"}/>
                </button>
            </div>}

                {displayOptions && 
            <div className = "club-options">
                {clubOptions.map((club) => (
                    <img 
                    key = {club.value}
                    src = {club.src}
                    alt = {club.alt}
                    onClick = {() => handleSelectClub(club)}
                    />
            ))} </div>}




            
        </div>
    )
}

export default Club