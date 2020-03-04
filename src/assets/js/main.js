 $(document).ready(function () {
     $.getScript('https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.js', function () {
         svg4everybody();
     });


     $('#header').load('header.html');
     $('#sidebar').load('sidebar.html');
     $('#footer').load('footer.html');


     $('.toggleFilters').click(function () {
          $('.filters-row').toggleClass('filtersToggle');
     });

     $('#toggleSidebar').click(function () {
        $("#sidebar").toggleClass("nav-side");
    });

    $('.memberToggle').click(function () {
        $(this).text((i,text)=>{
            return text === "Per 1000 Members" ? "total" : "Per 1000 Members";
        });
    });

 });
 










