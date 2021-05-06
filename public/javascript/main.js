let pantallaCargaDatos_medicamentos = document.getElementById(
  "pantallaCargaDatos_medicamentos"
);
let pantallaMedicamentos_btn = document.getElementById(
  "pantallaMedicamentos_btn"
);
let pantallaCargaDatos_glucemia = document.getElementById(
  "pantallaCargaDatos_glucemia"
);
let pantallaCargaDatos_presion = document.getElementById(
  "pantallaCargaDatos_presion"
);
let pantallaCargaDatos_btn = document.getElementById("pantallaCargaDatos_btn");
let medicamentosCargados = document.getElementById(
  "pantallaCargaDatos_seleccionMedicamentos_btn"
);
let listaNuevosMedicamentos = document.getElementById(
  "listaNuevosMedicamentos"
);
let pantallaCargaDatos = document.getElementById("pantallaCargaDatos");
let pantallaDetalle = document.getElementById("pantallaDetalle");
let pantallaMedicamentos = document.getElementById("pantallaMedicamentos");
let inputMedicamentos = document.getElementById("inputMedicamentos");
let pantallaDetalle_cargarGlucemia = document.getElementById(
  "pantallaDetalle_cargarGlucemia"
);
let pantallaDetalle_cargarPresion = document.getElementById(
  "pantallaDetalle_cargarPresion"
);
let pantallaListado = document.getElementById("pantallaListado");
let pantallalistado_info = document.getElementById("pantallalistado_info");

let pantallaListado_btn = document.getElementById("pantallaListado_btn");
let pantallaDetalle_cargarMedicamentos = document.getElementById(
  "pantallaDetalle_cargarMedicamentos"
);
let finalizar = document.getElementById("pantallaMedicamentos_btn");
let marcarMedicamentos = pantallaCargaDatos_medicamentos.addEventListener(
  "click",
  function (e) {
    seleccionMedicamentos.style.display = "block";
    pantallaCargaDatos_btn.style.display = "none";
    pantallaDetalle_cargarMedicamentos.style.display = "block";
  }
);

let abrirPantallaDetalle = pantallaCargaDatos_btn.addEventListener(
  "click",
  function (e) {
    pantallaDetalle.style.display = "block";
    pantallaCargaDatos.style.display = "none";
  }
);

let abrirCargaMedicamentos = pantallaCargaDatos_seleccionMedicamentos_btn.addEventListener(
  "click",
  function (e) {
    pantallaMedicamentos.style.display = "block";
    pantallaCargaDatos.style.display = "none";
  }
);

let checkGlucemia = pantallaCargaDatos_glucemia.addEventListener(
  "click",
  function () {
    pantallaDetalle_cargarGlucemia.style.display = "block";
  }
);
let checkPresion = pantallaCargaDatos_presion.addEventListener(
  "click",
  function (e) {
    pantallaDetalle_cargarPresion.style.display = "block";
  }
);

let armarListaMedicamentos = medicamentosCargados.addEventListener(
  "click",
  function (e) {
    let cantidadMedicamentos = document.getElementById("cantidadMedicamentos")
      .value;
    let modeloMedicamento = `<br> Tu medicamento <br> <li id="pantallaMedicamentos_medicinas" class="pantallaMedicamentos_medicinas"><input type="text"
    placeholder="Medicamento" class="nombreMedicina" value=""></li>`;

    for (i = 0; i < cantidadMedicamentos; i++) {
      listaNuevosMedicamentos.innerHTML += modeloMedicamento;
    }
    console.log(cantidadMedicamentos);
    //RECUPERAR nombre usuarie
    let agregarNombre = document.getElementById("pantallaCargaDatos_usuario")
      .value;
    let modeloTusControlesx = `<h5 id= "inpresionNombre">${agregarNombre}, estos son tus controles:</h5>`;
    pantallaListado_nombre.innerHTML += modeloTusControlesx;
  }
);
// RECUPERAR NOMBRES MEDICAMENTOS
let pantallaDetalle_medicamentos = document.getElementById(
  "pantallaDetalle_medicamentos"
);
let abrirDetalleDesdeMedicamentos = pantallaMedicamentos_btn.addEventListener(
  "click",
  function (e) {
    pantallaMedicamentos.style.display = "none";
    pantallaDetalle.style.display = "block";
    let nombremedicina1 = document.getElementsByClassName("nombreMedicina");
    for (i = 0; i < nombremedicina1.length; i++) {
      var nombreRecuperado = nombremedicina1[i].value;
      console.log(nombreRecuperado);
      let modeloNombreMedicamento = `<li id="nombreMedicamento" class="nombreMedicamento" data-medicamento="${nombreRecuperado}">${nombreRecuperado} <input class="medicamento_checked" type="checkbox" value="segundoCheckbox" name="medicamento_checked"></li>`;
      pantallaDetalle_medicamentos.innerHTML += modeloNombreMedicamento;
    }
  }
);
// IMPRIMIR VALORES EN PANTALLA LISTADO
function cargarEnLista() {
  pantallaListado.style.display = "block";
  pantallaDetalle.style.display = "none";
  let infoGlucemia = document.getElementById(
    "pantallaDetalle_cargarGlucemia_info"
  ).value;
  document.getElementById("pantallaDetalle_cargarGlucemia_info").value = "";
  let infoPresion = document.getElementById(
    "pantallaDetalle_cargarPresion_info"
  ).value;
  document.getElementById("pantallaDetalle_cargarPresion_info").value = "";
  const fecha = new Date();
  const hoy = fecha.getDate();
  const mesActual = fecha.getMonth() + 1;
  let fechaCargada = " " + hoy + "/" + mesActual;
  let modeloListado = `<hr>
          <div class="infoCargada">
          <li>Fecha:${fechaCargada}
          </li>
          <li id="pantallaListado_info_presion">Presión:${infoPresion}</li>
          <li id="pantallaListado_info_glucemia">Glucemia:${infoGlucemia}</li>
          <li id="pantallaListado_info_medicamentos">Medicamentos: </li>
          </div>`;
  pantallalistado_info.innerHTML += modeloListado;
  let nombremedicina1 = document.getElementsByClassName("nombreMedicina");
  for (i = 0; i < nombremedicina1.length; i++) {
    let infoMedicamentos = nombremedicina1[i].value;
    console.log(infoGlucemia, infoPresion, infoMedicamentos);
    let modeloListadoMed = `<p>${infoMedicamentos}<input class="medicamento_lista_checked" type="checkbox" value="primerCheckbox" name="medicamento_lista_checked"></p>
            `;
    pantallalistado_info.innerHTML += modeloListadoMed;
  }
  if (infoPresion == "") {
    let dataPresion = document.getElementById("pantallaListado_info_presion");
    dataPresion.style.display = "none";
  }
  if (infoGlucemia == "") {
    let dataGlucemia = document.getElementById("pantallaListado_info_glucemia");
    dataGlucemia.style.display = "none";
  }
  let dataMedicamentos = document.getElementById(
    "pantallaListado_info_medicamentos"
  );
  let medicamentosChecked = dataMedicamentos.checked;
  if (medicamentosChecked) {
    dataMedicamentos.style.display = "block";
  } else {
    dataMedicamentos.style.display = "none";
  }
  var medicamento_checked = document.getElementsByClassName(
    "medicamento_checked"
  );
  let medicamento_lista_checked = document.getElementsByClassName(
    "medicamento_lista_checked"
  );
  for (var i = 0; i < medicamento_checked.length; i++) {
    let isChecked = medicamento_checked[i].checked;
    if (isChecked) {
      console.log("checkbox esta seleccionado");
      medicamento_lista_checked[i].checked = true;
    } else {
      medicamento_lista_checked[i].style.display = "none";
    }
  }
}

let cargarOtro = pantallaListado_btn.addEventListener("click", function (e) {
  pantallaDetalle.style.display = "block";
  pantallaListado.style.display = "none";
});
let pantallaListado_nombre = document.getElementById("pantallaListado_nombre");
let inprimirNombre = pantallaCargaDatos_btn.addEventListener(
  "click",
  function (e) {
    let agregarNombre = document.getElementById("pantallaCargaDatos_usuario")
      .value;
    let modeloTusControles = `<h5 id= "inpresionNombre">${agregarNombre}, estos son tus controles:</h5>`;
    pantallaListado_nombre.innerHTML += modeloTusControles;
  }
);
