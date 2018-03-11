<template>
  <div>
      <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/5/1faec33b2d15d28a7517477044274408-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/0/2db873df143ac7516b18a963924680f1-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/1/1eafdbbc2ae3fe4963c536f80e73962d-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/5/7001ca1aba908b11c49dc35173a9a185-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/8/c444e09869c1c6da79708dd6e215a3cd-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/2/7db6310f06eb8491ffcf0f15eb6ab5ec-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/1/55eb585662b826950e3c5cbb5f54f8ba-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>
              <swiper-slide><span class="watch-label">加勒比海盗</span>
<img src="http://static.metacritic.com/images/products/movies/2/362846e0271e930168e491cb517e956f-250h.jpg" style="width:200px;height:300px;" alt=""/>
              </swiper-slide>


              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          slidesPerColumn: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
           autoplay: {
                      delay: 2500,
                      disableOnInteraction: false
                    }
        }
      }
    }
  }
</script>

