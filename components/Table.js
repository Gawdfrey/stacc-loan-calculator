import React from "react";
import { MDBDataTable } from "mdbreact";

// Retrieves information from the parent component and
// displays it in a pagianted table format.
class Table extends React.Component {
  render() {
    const { response } = this.props;
    const array = [];
    
    // Loops over and retrieves and formats the necessary information.
    // Appends it to an array.
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
    // The header of the table is defined here.
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
      // The data of the table is retrieved from the array
      // defined in the loop above.
      rows: array,
    };

    return (
      <div>
        <MDBDataTable
        entries={13}
          entriesOptions={[13]}
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
