let inp = document.querySelector('.inp input');
let iSearch = document.querySelector('.inp i');
let nav2 = document.querySelector('.nav2');
const filterButtons = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.city-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {

      document.querySelector('.btn.active').classList.remove('active'); 
        this.classList.add('active');

        const selectedContinent = this.getAttribute('data-continent');

        cards.forEach(card => {
            const cardContinent = card.getAttribute('data-continent');

            if (selectedContinent === 'all' || selectedContinent === cardContinent) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
          
        });
      window.scrollTo(scrollY.valueOf , 345);  
    });
});

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
inp.onfocus=()=>{
    iSearch.style.display = 'none';
}
inp.onblur=()=>{
    iSearch.style.display = 'block';
}



// to view search resulate
let searchInput = document.getElementById('citySearch');
let container = document.getElementById('cardsContainer'); 
//حولنا كل الكروت لمصفوفة
const allCards = Array.from(container.getElementsByClassName('city-card'));

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    // فرز ل a , b عشان نقارن بينهم 
    const sortedCards = [...allCards].sort((a, b) => {
        const cityA = a.getAttribute('data-city').toLowerCase(); //جبنا القيم الموجودة ب data-city
        const cityB = b.getAttribute('data-city').toLowerCase();

        // نفحص ازا العنصر بيبدا بالحرف الي ادخله المستخدم
        const aStarts = cityA.startsWith(query);
        const bStarts = cityB.startsWith(query);

        // إذا كان الأول يبدأ بالحرف والثاني لا، يطلع الأول لفوق
        if (aStarts && !bStarts){
          return -1;
        } 
        if (!aStarts && bStarts){
          return 1;
        } 
        // if both same
        return cityA.localeCompare(cityB);
    });

    // بعد م رتبت هلا بدي اعرض العناصر المرتبة على الشاشة
    sortedCards.forEach(card => {
        container.appendChild(card);
        //اخفاء الكروت الي ما  بتطابق النتائج
        const cityName = card.getAttribute('data-city').toLowerCase();
        if (query.length > 0 && !cityName.includes(query)) {
            card.style.display = 'none'; // إخفاء إذا لم يكن هناك تطابق نهائياً
        } else {
            card.style.display = 'block'; // إظهار إذا كان هناك تطابق
        }
    });
});