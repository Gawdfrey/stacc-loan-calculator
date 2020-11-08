import React from "react";
import { MDBDataTable } from "mdbreact";

class Table extends React.Component {
  render() {
    const { response } = this.props;
    const array = [];
    
    if (response != null) {
      response.nedbetalingsplan.innbetalinger.map((row) => {
        array.push({
          dato: row.dato,
          innbetaling: Math.round(row.innbetaling) + "  NOK",
          gebyr: Math.round(row.gebyr) + "  NOK",
          renter: Math.round(row.renter) + "  NOK",
          restgjeld: Math.round(row.restgjeld) + "  NOK",
          total: Math.round(row.total) + "  NOK",
        });
        return array;
      });
    }
    const data = {
      columns: [
        {
          label: "Dato",
          field: "dato",
          sort: "disabled",
          width: 150,
        },
        {
          label: "Innbetaling",
          field: "innbetaling",
          sort: "disabled",
          width: 270,
        },
        {
          label: "Gebyr",
          field: "gebyr",
          sort: "disabled",
          width: 200,
        },
        {
          label: "Renter",
          field: "renter",
          sort: "disabled",
          width: 100,
        },
        {
          label: "Restgjeld",
          field: "restgjeld",
          sort: "disabled",
          width: 150,
        },
        {
          label: "Terminkostnad",
          field: "total",
          sort: "disabled",
          width: 100,
        },
      ],
      rows: array,
    };

    return (
      <div>
        <MDBDataTable
        entries={12}
          entriesOptions={[12]}
          entriesLabel=""
          paginationLabel={["Tilbake", "Neste"]}
          searching={false}
          sortable={false}
          striped
          bordered
          hover
          data={data}
        />
      </div>
    );
  }
}

export default Table;
