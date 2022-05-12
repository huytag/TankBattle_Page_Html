
let Data = import('./data.js');

(function ($) {
  $(function () {
    $(document).ready(function () {
      renderMarket();
    });
  });

  async function renderMarket() {
    const listData = await Data;
    listData.data.map( (v, k) => {
      $(".render-market")
        .append(`<div class="col-xl-3 col-md-4 col-sm-6 col-6 mrb--2">
        <div class="listing-type-buy_now ${v.type} ${v.color}  tank tank_item box">
          ${v.type === "type-tank" ? `<div class="tank_item_head level-11">
          <div class="badge">
            <div class="full position-relative w-100 h-100 badge_score_wrap">
              <span class="badge_score level-11">${v.score}</span>
            </div>
          </div>
        </div>` : ""}      
          <div class="tank_item_bod pd-2 pt-2 px-3 d-flex">
            <h2 class="tank_name m-0 p-0">${v.name}</h2>
            <div class="box_image">
              <img src="${v.image}">
            </div>
          </div>
          <div class="tank_item_foot text-center py-2">
            <div class="tank_price h-100 d-flex justify-content-center">
              ${v.price}
            </div>
          </div>
        </div>
      </div>`);
    });
  }
})(jQuery);
