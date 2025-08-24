const product = [
    {category:"boquet", price: 1500, product: "1 Dozen white roses", img: "img/img1.png" },
     {category:"boquet", price: 2000, product: "1 Dozen Red roses w/ Teddy bear", img: "img/img2.png" },
      {category:"boquet", price: 1500, product: "1 Dozen white roses", img: "img/img3.png" },
       {category:"boquet", price: 1200, product: "Money boquet" , img: "img/img4.png"},
        {category:"boquet", price: 700, product: "3pcs.Roses w/ Alstroemeria", img: "img/img5.png"},
         {category:"boquet", price: 800, product: "1 pc. Sunflower w/ Asssorted Malaysian flower", img: "img/img6.png" },
          {category:"boquet", price: 600, product: "8pcs white roses", img: "img/img7.png" },
           {category:"boquet", price: 1000, product: "6pcs. white Roses w/ Alstroemeria", img: "img/img8.png" },
            {category:"boquet", price: 1200, product: "9pcs.white & red Roses w/ Alstroemeria", img: "img/img9.png" },
             {category:"boquet", price: 1500, product: "6 pcs. sunflower" , img: "img/img10.png"},
              {category:"boquet", price: 1500, product: "6pcs red roses & 2pcs sunflower" , img: "img/img11.png" },
               {category:"boquet", price: 1200, product: "5pcs. sunflower" , img: "img/img12.png" },
                {category:"boquet", price: 1500, product: "1 Dozen red roses" , img: "img/img13.png" },
                 {category:"boquet", price: 1500, product: "5pcs. sunflower" , img: "img/img14.png"},
                  {category:"boquet", price: 2500, product: "10ps Dried white & red roses", img: "img/img15.png" },
                 
                  //pot//
                   {category:"flowerpot", price: 150, product: "Flower POt" , img: "img/img16.png"},
                    {category:"flowerpot", price: 150, product: "Flower POt", img: "img/img17.png" },
                     {category:"flowerpot", price: 150, product: "Flower POt", img: "img/img18.png" },
                      {category:"flowerpot", price: 150, product: "Flower POt" , img: "img/img19.png"},

                       //flowerspray//

                        {category:"flowerspray", price: 500, product: "Flat Spray", img: "img/img27.png" },
                        
                        {category:"flowerspray", price: 500, product: "Flat Spray", img: "img/img28.png" },
                        
                        {category:"flowerspray", price: 800, product: "1 sided spray", img: "img/img29.png" },
                         {category:"flowerspray", price: 1200, product: "1 sided spary 1 dozen anthurium ", img: "img/img30.png" },
                
                          //flowerbasket//
                        {category:"flowerbasket", price: 250, product: "Flower Basket" , img: "img/img20.png" },
                        {category:"flowerbasket", price: 250, product: "Flower Basket" , img: "img/img21.png" },
                        {category:"flowerbasket", price: 250, product: "Flower Basket", img: "img/img22.png" },
                        {category:"flowerbasket", price: 250, product: "Flower Basket", img: "img/img23.png"},
                         {category:"flowerbasket", price: 250, product: "Flower Basket", img: "img/img24.png"},
                          {category:"flowerbasket", price: 250, product: "Flower Basket", img: "img/img25.png"},
                           {category:"flowerbasket", price: 250, product: "Flower Basket", img: "img/img26.png"},

                         //Funeral flower//
                          {category:"funeralflower", price: 15000, product: "Wreat anthurium white w/radus", img: "img/img31.png" },
                           {category:"funeralflower", price: 15000, product: "Wreat anthurium yellow w/radus" , img: "img/img32.png" },
                           {category:"funeralflower", price: 8000, product: "2 layer white orchids whiteus", img: "img/img33.png" },
                           {category:"funeralflower", price: 7000, product: "2 dozen orange anthurium w/ 4pcs. sunflower", img: "img/img34.png" },
                           {category:"funeralflower", price: 10000, product: "Stargazer Casa Blanca" , img: "img/img35.png" },
                            {category:"funeralflower", price: 10000, product: "Stargazer Casa Blanca" , img: "img/img36.png" },
                             {category:"funeralflower", price: 10000, product: "Stargazer Casa Blanca" , img: "img/img37.png" }


]

const selectContainer = document.querySelector(".product-select select");
const productContainer = document.querySelector(".slider-track");

function flowersCard(flowerCategory){
    if(flowerCategory === "all"){
        // diretso .map kasi lahat ng product gusto ipakita
        return product.map(function(item){
            return `
                <div class="product-card">
                    <img src="${item.img}">
                     <hr>
                    <h3>${item.product}</h3>
                    <p>P${item.price}</p>
                </div>
            `;
        }).join(""); 
    } else {
        // i-filter muna, tapos saka i-map
        return product
          .filter(function(item){
              return item.category === flowerCategory;
          })
          .map(function(item){
              return `
                  <div class="product-card">
                      <img src="${item.img}">
                      <hr>
                      <h3>${item.product}</h3>
                      <p>P${item.price}</p>
                  </div>
              `;
          }).join("");
    }
}

selectContainer.addEventListener("change", function(){
    productContainer.innerHTML = flowersCard(selectContainer.value);
});
