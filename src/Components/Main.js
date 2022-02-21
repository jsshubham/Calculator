import React from "react";
import {
  Div,
  MainComponent,
  Heading,
  Buttons,
  Button,
} from "../Style/MainStyle";

function Main() {
  return (
    <Div>
      <MainComponent>
        <Heading>
          <h1>0</h1>
        </Heading>
        <Buttons>
          <Button className="grey grid-item">Ac</Button>
          <Button className="grey grid-item">+/-</Button>
          <Button className="grey grid-item">%</Button>
          <Button className="Orange grid-item">&#247;</Button>
          <Button className="greyDark grid-item">7</Button>
          <Button className="greyDark grid-item">8</Button>
          <Button className="greyDark grid-item">9</Button>
          <Button className="Orange grid-item">&#9587;</Button>
          <Button className="greyDark grid-item">4</Button>
          <Button className="greyDark grid-item">5</Button>
          <Button className="greyDark grid-item">6</Button>
          <Button className="Orange">&#8722;</Button>
          <Button className="greyDark">1</Button>
          <Button className="greyDark">2</Button>
          <Button className="greyDark">3</Button>
          <Button className="Orange">+</Button>
          <Button className="greyDark grid-items zero">0</Button>
          <Button className="greyDark grid-item">.</Button>
          <Button className="Orange grid-item">=</Button>
        </Buttons>
      </MainComponent>
    </Div>
  );
}

export default Main;
