<template>
        <div class="container" id="1"> <!---5th container---->
            <div class="main-block1 row"> 

                <div class="main-block1l col-md"> <!-----left---->
                    <div class="heading-info"><h1 class="text2"> {{titre}}</h1></div>
                    <div class=""><p class="text3">{{text}}</p></div>
                    <div class="btn1-container"><button class="btn btn-lg fs-5" style="background-color: rgb(27, 179, 27); color: white; padding: 20px 25px;">{{btntext}}</button></div>
                </div>

                <div class="main-block1r col-md"> <!-----right---->
                    <img src="img/img3.png" alt="" class="img-fluid">
                </div>

            </div>
        </div>

</template>

<script>
export default {
  name: 'BlockImageRight',
  props: {
    titre: String,
    text: String,
    btntext: String
  }
}
</script>