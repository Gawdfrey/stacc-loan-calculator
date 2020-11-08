import Layout from "../components/Layout";
import Form from "../components/Form";
import React from "react";
import Table from "../components/Table";
import Chart from "../components/Chart";
import { Carousel, CarouselItem } from "react-bootstrap";
import Sum from "../components/Sum";

const ekstern_api_url =
  "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";

const intern_api_url_serie = "http://localhost:3000/api/Serielaan";
const intern_api_url_annuitet = "http://localhost:3000/api/Annuitetslaan";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonObject: null,
      internApi: null,
      eksternApiSerie: null,
      eksternApiAnnuitet: null,
      index: 0,
    };
  }

  changeIndex = (newIndex) => this.setState({ index: newIndex });

  handleSubmit = (laanDetaljer) => {
    this.setState({ jsonObject: laanDetaljer });
    fetch(ekstern_api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(laanDetaljer),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ internApi: result });
      });

    fetch(intern_api_url_serie, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(laanDetaljer),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ eksternApiSerie: result });
      });

    fetch(intern_api_url_annuitet, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(laanDetaljer),
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ eksternApiAnnuitet: result });
      });
  };

  render() {
    return (
      <Layout>
        <div>
          <Form handleSubmit={this.handleSubmit} />
        </div>
        <div class="row justify-content-center" style={{ marginTop: "3rem" }}>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
            type={{ marginTop: "3rem", textAlign: "center" }}
          >
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.changeIndex(0)}
            >
              Lån fra ekstern API
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.changeIndex(1)}
            >
              Serielån fra intern API
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.changeIndex(2)}
            >
              Annuitetslån fra intern API
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.changeIndex(3)}
            >
              Sum
            </button>
          </div>
        </div>
        <Carousel activeIndex={this.state.index} controls={true}>
          <CarouselItem>
            <div className="row">
              <div className="col" style={{ marginTop: 20 }}>
                <h1>Eksternt lån</h1>
                <Table response={this.state.internApi} />
              </div>
              <div className="col" style={{ marginTop: 20 }}>
                <div className="row justify-content-center">
                  <Chart response={this.state.internApi} />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="row">
              <div className="col" style={{ marginTop: 20 }}>
                <h1>Serielån</h1>
                <Table response={this.state.eksternApiSerie} />
              </div>
              <div className="col" style={{ marginTop: 20 }}>
                <div className="row justify-content-center">
                  <Chart response={this.state.eksternApiSerie} />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="row">
              <div className="col" style={{ marginTop: 20 }}>
                <h1>Annuitetslån</h1>
                <Table response={this.state.eksternApiAnnuitet} />
              </div>
              <div className="col" style={{ marginTop: 20 }}>
                <div className="row justify-content-center">
                  <Chart response={this.state.eksternApiAnnuitet} />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="row">
              <div className="col" style={{ marginTop: 20 }}>
                <Sum
                  internApiResponse={this.state.internApi}
                  eksternApiAnnuitetResponse={this.state.eksternApiAnnuitet}
                  eksternApiSerieResponse={this.state.eksternApiSerie}
                />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
      </Layout>
    );
  }
}

export default Index;
