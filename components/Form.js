import React from "react";
import Moment from "moment";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laaneBelop: 1000000,
      nominellRente: 3,
      terminGebyr: 50,
      antallAar: 5,
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    event.preventDefault();
    let jsonObject = {
      laanebelop: this.state.laaneBelop,
      nominellRente: this.state.nominellRente,
      terminGebyr: this.state.terminGebyr,
      utlopsDato: Moment("2020-01-01", "YYYY-MM-DD")
        .add(this.state.antallAar, "y")
        .format("YYYY-MM-DD"),
      saldoDato: "2020-01-01",
      datoForsteInnbetaling: "2020-01-01",
      ukjentVerdi: "TERMINBELOP",
    };
    this.props.handleSubmit(jsonObject);
  };
  render() {
    return (
      <form>
        <h1>Generisk Banks lånekalkulator!</h1>
        <h5>
          Endre noen verdier for å se tabellene og grafene oppdatere seg!
        </h5>
        <br></br>
        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label>Lånebeløp</label>
              <input
                type="number"
                className="form-control"
                name="laaneBelop"
                onChange={this.myChangeHandler}
                placeholder="Hvor mye ønsker du å låne?"
                required={true}
                value={this.state.laaneBelop}
                min={0}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Nominell rente</label>
              <input
                type="number"
                className="form-control"
                name="nominellRente"
                onChange={this.myChangeHandler}
                placeholder="Hvilken rente ønsker du?"
                required={true}
                value={this.state.nominellRente}
                min={0}
                max={100}
              />
            </div>
          </div>
          <div className="col">
            <label>Termingebyr</label>
            <input
              type="number"
              className="form-control"
              name="terminGebyr"
              onChange={this.myChangeHandler}
              placeholder="Hvor stort termingebyr ønsker du?"
              required={true}
              value={this.state.terminGebyr}
              min={0}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-auto">
            <div className="form-group">
              <label>Over hvor mange år skal lånet strekke seg?</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={this.myChangeHandler}
                name="antallAar"
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
