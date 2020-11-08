export default function (req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const {
    laanebelop,
    nominellRente,
    terminGebyr,
    utlopsDato,
    saldoDato,
    datoForsteInnbetaling,
    ukjentVerdi,
  } = req.body;

  var h = {
    "nedbetalingsplan": {
      "innbetalinger": [
      {
      	"restgjeld": laanebelop,
        "dato": saldoDato,
        "innbetaling": 0.0,
        "gebyr": 0.0,
        "renter": 0.0,
        "total": 0.0
      }
      ]
    },
  }
  const datoDiff = monthsDiff(datoForsteInnbetaling, utlopsDato)
  var restgjeld = laanebelop
  var rente = laanebelop * (nominellRente / 100 / datoDiff)
  var dato = new Date(datoForsteInnbetaling)
  var avdrag = laanebelop / datoDiff;
  for (var i = 0; i <= datoDiff; i++) {
    restgjeld -= avdrag;
    rente = restgjeld * (nominellRente / 100 / datoDiff);
    h.nedbetalingsplan.innbetalinger.push(
      {
      "restgjeld": Math.round(restgjeld),
      "dato": dato.toISOString().substring(0, 10),
      "innbetaling": Math.round(avdrag),
      "gebyr": terminGebyr,
      "renter": Math.round(rente),
      "total": Math.round(avdrag + rente + terminGebyr),
    }
    );
    dato.setMonth(dato.getMonth() + 1, 1);
  }
  h.nedbetalingsplan.innbetalinger.pop();
  res.status(200).json(h);
}

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

function monthsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let years = yearsDiff(d1, d2);
  let months = years * 12 + (date2.getMonth() - date1.getMonth());
  return months;
}
