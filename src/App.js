import React, {Component } from "react";

export default class App extends Component{

  state = {
    jogadores: [
      {
        nome: "Neymar",
        idade: 30,
        time: "PSG"
      },
      {
        nome: "Messi",
        idade: 35,
        time: "PSG"
      },
      {
        nome: "Cristiano Ronaldo",
        idade: 37,
        time:  "Manchester United"
      },
      {
        nome: "Vinícius Júnior",
        idade: 22,
        time:"Real Madrid"
      },
      {
        nome: "Giorgian De Arrascaeta",
        idade: 28,
        time: " Flamengo"
      },
      {
        nome: "João Gomes",
        idade: 21,
        time:"Flamengo"
      }
    ]
  }
  
  render(){
    return(
      <nav>
        {this.state.jogadores.map((item) => (
          <section className="card">
            <ul>
              <ol>{item.nome}, {item.idade}, {item.time}</ol>
            </ul>
          </section>
        ))}
      </nav>
    )
  }
}