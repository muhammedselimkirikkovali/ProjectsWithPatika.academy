import React from "react";
import WeatherForm from "./WeatherForm";
import { useWeather } from "../Context/WeatherContext";
import { Container, Row, Col } from "react-bootstrap";

function Result() {
  const { handleCitySelect, weatherData } = useWeather();
  // console.log(city);
  return (
    <div>
      <WeatherForm handleCitySelect={handleCitySelect} />
      {weatherData && (
        <Container style={{ maxWidth: "100%" }}>
          <Row>
            <Col style={{ border: "1px solid grey", backgroundColor: "white" }}>
              <p> {weatherData[0].day} </p>
              <img className="mb-2" src={weatherData[0].icon} alt="" />
              <p> {weatherData[0].description.toUpperCase()} </p>
              <p> Şimdi : {weatherData[0].degree} C° </p>
              <p>
                Min: {weatherData[0].min} C° &nbsp; Max: {weatherData[0].max} C°
              </p>
            </Col>
            <Col>
              <p> {weatherData[1].day} </p>
              <img className="mb-2" src={weatherData[1].icon} alt="" />
              <p> {weatherData[1].description.toUpperCase()} </p>

              <p>
                Min: {weatherData[1].min} C° &nbsp; Max: {weatherData[1].max} C°
              </p>
            </Col>
            <Col>
              <p> {weatherData[2].day} </p>
              <img className="mb-2" src={weatherData[2].icon} alt="" />
              <p> {weatherData[2].description.toUpperCase()} </p>

              <p>
                Min: {weatherData[2].min} C° &nbsp; Max: {weatherData[2].max} C°
              </p>
            </Col>
            <Col>
              <p> {weatherData[3].day} </p>
              <img className="mb-2" src={weatherData[3].icon} alt="" />
              <p> {weatherData[3].description.toUpperCase()} </p>

              <p>
                Min: {weatherData[3].min} C° &nbsp; Max: {weatherData[3].max} C°
              </p>
            </Col>
            <Col>
              <p> {weatherData[4].day} </p>
              <img className="mb-2" src={weatherData[4].icon} alt="" />
              <p> {weatherData[4].description.toUpperCase()} </p>
              <p>
                Min: {weatherData[4].min} C° &nbsp; Max: {weatherData[4].max} C°
              </p>
            </Col>
            <Col>
              <p> {weatherData[5].day} </p>
              <img className="mb-2" src={weatherData[5].icon} alt="" />
              <p> {weatherData[5].description.toUpperCase()} </p>
              <p>
                Min: {weatherData[5].min} C° &nbsp; Max: {weatherData[5].max} C°
              </p>
            </Col>
            <Col>
              <p> {weatherData[6].day} </p>
              <img className="mb-2" src={weatherData[6].icon} alt="" />
              <p> {weatherData[6].description.toUpperCase()} </p>
              <p>
                Min: {weatherData[6].min} C° &nbsp; Max: {weatherData[6].max} C°
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Result;
