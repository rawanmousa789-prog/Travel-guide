let buttons = document.querySelectorAll('.btn-category');
let items = document.querySelectorAll('.col-lg-6');
let noResults = document.getElementById('no-results');
let nav2 = document.querySelector('.nav2');

window.onload = function() {    
    
    if (buttons.length === 0) console.error(" لم يتم العثور على أي أزرار بكلاس .btn-category");
    if (items.length === 0) console.error(" لم يتم العثور على أي بطاقات بكلاس .item");

    let activeFilters = {
        category: 'all',
        price: 'all'
    };

    buttons.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault(); // منع اي سلوك افتراضي
            
            const group = this.getAttribute('data-filter-group');
            const value = this.getAttribute('data-filter');

            if (!group || !value) {
                console.warn("!! الزر يفتقد لخصائص data-filter-group أو data-filter");
                return;
            }

            activeFilters[group] = value;

            //change color of button whene user click it
            document.querySelectorAll(`[data-filter-group="${group}"]`).forEach(b => {
                b.classList.remove('active');
                b.style.backgroundColor = "";
            });
            this.classList.add('active');   
            this.style.backgroundColor = "#FFC107"; 
            window.scrollTo(scrollY.valueOf , 340);
            
            applyFilters();
        };
    });

    function applyFilters() {
        let count = 0;

        items.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            const cardPrice = card.getAttribute('data-price');

            const catMatch = activeFilters.category === 'all' || cardCat === activeFilters.category;
            const priceMatch = activeFilters.price === 'all' || cardPrice === activeFilters.price;

            if (catMatch && priceMatch) {
                card.style.display = "flex"; 
                card.style.animation = 'fadeIn 0.8s ease';
                count++;
            } else {
                card.style.display = "none";
            }
        });

        if (noResults) {
            noResults.style.display = count === 0 ? "block" : "none";
        }
    }

    applyFilters();
};

window.onscroll =()=>{
  if(scrollY >=401){
    nav2.style.top ='80'
    nav2.style.right ='0'
    nav2.style.position = 'fixed'
  }else{
    nav2.style.top ='0'
    nav2.style.right ='0'
    nav2.style.position = 'relative'
  }
}

