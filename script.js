let containers = document.querySelector(".containers");

let innerHTML = "";
items.forEach((item) => {
  innerHTML += `
  <div class="maincontainer">
          <div class="container1">
            <img src="${item.img}" alt="" srcset="" />
            <ul>
              <li>
                <span id="chicken">Chicken Item : ${item.Chicken_item}</span>
              </li>
              <li>Weight: ${item.weight}</li>
              <li>price : <span id="price">${item.price}</span></li>
              <li>Coocked by : <span id="name"> ${item.CoockedBy}</span></li>
              <li>
                <button type="button" class="btn btn-primary mybutton">
                  Buy
                </button>
              </li>
              <div class="review">⭐ | ${item.rating}</div>
            </ul>
        </div>
      </div>`
});
containers.innerHTML = innerHTML;
