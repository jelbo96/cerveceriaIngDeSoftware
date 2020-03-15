//Script buscador datatables

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

$(document).ready(function() {
  var table = $("#example-table").DataTable({
    select: true,
    dom: "Blfrtip",
    
    dom: "Blfrtip",
    buttons: [
      { extend: "excel", text: " Exportar a excel" },
      
    ],
    language: {
      lengthMenu: "Mostrando _MENU_  elementos por página",
      search: "Buscar:",
      zeroRecords: "No se encontró ningun elemento",
      info: "Mostrando página _PAGE_ de _PAGES_",
      infoEmpty: "No hay elementos disponibles",
      infoFiltered: "(Filtrado de _MAX_ elementos)",
      paginate: {
        first: "Primera",
        previous: "Anterior",
        next: "Siguiente",
        last: "Ultima"
      }
    }
  });
  table.buttons().container()
  .appendTo( '#example_wrapper .col-md-6:eq(0)' );
});
