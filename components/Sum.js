import React from "react";

class Sum extends React.Component {
  render() {
    const { internApiResponse, eksternApiSerieResponse, eksternApiAnuitetResponse } = this.props;
    var sumEksterntLån = 0;
    var sumInterntSerieLån = 0;
    var sumInterntAnnuitetsLån = 0;
    if (internApiResponse != null) {
      internApiResponse.nedbetalingsplan.innbetalinger.map((row) => {
        sumEksterntLån += row.total;
      });
    }
    if (eksternApiSerieResponse != null) {
      eksternApiSerieResponse.nedbetalingsplan.innbetalinger.map((row) => {
        sumInterntSerieLån += row.total;
      });
    }
    if (eksternApiAnuitetResponse != null) {
      eksternApiAnuitetResponse.nedbetalingsplan.innbetalinger.map((row) => {
        sumInterntAnnuitetsLån += row.total;
      });
    }
    return (
      <div className="container">
      <h1>Total kostnader</h1>
        <div className="row" style={{marginTop: "2rem"}}>
          <div className="col">
            <h1>
              Eksternt lån:
            </h1>
          </div>
          <div className="col">
            <h1>
              Internt serielån:
            </h1>
          </div>
          <div className="col">
            <h1>
              Internt annuitetslån:
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>{Math.round(sumEksterntLån)} NOK</h1>
          </div>
          <div className="col">
            <h1>{Math.round(sumInterntSerieLån)} NOK</h1>
          </div>
          <div className="col">
            <h1>{Math.round(sumInterntAnnuitetsLån)} NOK</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Sum;
