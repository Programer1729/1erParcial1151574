const btnPeticion = document.querySelector("#peticion");
const tableBody = document.querySelector("#table-casos");
const table = document.querySelector("#table");

btnPeticion.addEventListener("click", (e) => {
  e.preventDefault();

  table.style.display = "block";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const casos = JSON.parse(this.responseText);
      const casosSlice = casos.slice(0, 25);
      console.log(casosSlice);
      casosSlice.forEach((element) => {
        const row = document.createElement("tr");
        const fechaNotificacion = document.createElement("td");
        fechaNotificacion.innerHTML = element.fecha_de_notificaci_n;
        row.appendChild(fechaNotificacion);

        const ciudad = document.createElement("td");
        ciudad.innerHTML = element.ciudad_de_ubicaci_n;
        row.appendChild(ciudad);

        const atencion = document.createElement("td");
        atencion.innerHTML = element.atenci_n;
        row.appendChild(atencion);

        const edad = document.createElement("td");
        edad.innerHTML = element.edad;
        row.appendChild(edad);

        const sexo = document.createElement("td");
        sexo.innerHTML = element.sexo;
        row.appendChild(sexo);

        const tipo = document.createElement("td");
        tipo.innerHTML = element.tipo;
        row.appendChild(tipo);

        const estado = document.createElement("td");
        estado.innerHTML = element.estado;
        row.appendChild(estado);

        const ubicacionRecuperado = document.createElement("td");
        ubicacionRecuperado.innerHTML = element.ubicaci_n_recuperado;
        row.appendChild(ubicacionRecuperado);

        tableBody.appendChild(row);
      });
    }
  };
  xhttp.open("GET", "https://www.datos.gov.co/resource/gt2j-8ykr.json", true);
  xhttp.send();
});
