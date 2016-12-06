Sevgili Ahmet Kizilay,

Nasilsin dostum? Umarim her sey yolundadir!

Duplicate removal konusunda kucuk bir improvement yaptim, yalniz emin olamadigim iki tane konu var.

1- target smiley'in display div'ini nereye, nasil koymak lazim? Framework'le JS ogrendigim icin createElement falan yazarken tikanip yazamiyorum

2- anladigim kadariyla Eren'in istedigi bir filtreleme ozelligi olmasi lazim. 

Oyun basladiginda target smiley kenarda iken solda 8 adet buton koyacagiz (biyik sapka etc.) 
oyuncu target smiley'e daha kolay ulasmak icin 1 kere 1 butona basacak. basinca o butonun ozelligini tasiyan 
smileyler elenecek.


mesela react olarak
ilk once app.js'de bir buttonHelperObject olacak (duzenli olsun diye ayri bir helpers file'dan import edilebilir)

// src/app.js

buttonHelperObject = {
    {name: biyik,
    order: 0},
    {name: sapka,
    order: 1},
    {name: kupe,
    order: 2}
    etc.
}


bu objeyi button class'la iterate ederek buttonlari olusturacagiz

// src/components/button.js

export default class Button {
    
    constructor (obj) {
        this.name = obj.name
        this.order = obj.order
        this.clickHandler = this.clickHandler.bind(this)
    }

    function clickHandler () {
        // bir sekilde document'teki smiley'lara iteration yaptirip smiley.name[this.order] ? css(red) : css(green)
    }

    render () {
        return (
            <button onClick={()=>this.clickHandler}> {this.name} </button>
        )
    }
}

benim simdilik aklima gelen bu. ama bunu vanilla olarak nasil implement ederiz emin degilim. 

bunun disinda bir tane alert koymaya calistim. targetSmiley ile tiklanan smiley ayni olursa "you win!" diye alert etmesi lazim.
ancak alert ne yazik ki calismiyor. Bunun sebebi zannediyorum display edilen sey smiley'in kendisi degil, sadece img'i. 
Yani orada bir taninma eksikligi var, onu da nasil cozebilecegimiz hakkinda bir bilgin varsa sevinirim.

Bu kucuk projeyi cok keyifli buldum. Eger zamanin olursa benzer oyunlar yazabiliriz. Cok selamlar herkese
