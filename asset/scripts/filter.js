filter("all")
function filter(c) {
 var input, filter, table, tr, td, i, txtValue;
  
  filter = c.toUpperCase();
  table = document.getElementById("timeline");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == 'ALL') {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}