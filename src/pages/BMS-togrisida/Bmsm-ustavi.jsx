import React from 'react'

const BmsmUstavi = () => {
  return (
    <div className=' container max-w-[900px] py-5'>
      <h1 className='text-center text-xl md:text-2xl'>O‘ZBEKISTON RESPUBLIKASI MADANIYAT VAZIRLIGI</h1>
      <h2 className='text-center text-xl md:text-2xl'>RITMIKA va PARTER</h2>

      <div className='mt-10 flex flex-col max-w-[1100px] m-auto'>
        <h3 className='text-2xl text-center'>Ritmik</h3>
        <i className='text-xl ml-10 '>1 yil o'qish</i>

        <p className='text-xl '>
        Ritm asosiy mavzulardan biri emas. Ritmika - bu yordamchi dars bo'lib, bolalar musiqa partiturasini aniq eshitishlari va o'z vaqtida raqsga tushishlari va yanada musiqiy bo'lishlari mumkin. Bolalar 
        bu qanday ritmik mavzu ekanligini tushunishlari uchun birinchi dars faqat musiqa o'lchamlarini baland ovozda sanashga bag'ishlanishi kerak:
        </p>
        <ul className='text-xl mt-5 list-decimal'>
          <li>
          2/4 - "bir va ikki va"
          </li>
          <li>
          3/4 - "bir va ikki va uch va"
          </li>
          <li>
          4/4 - "bir va ikki, uch va to'rt"
          </li>
          <p className='text-xl my-3'>
          Keyingi darslarda kompleks hisoblash bilan tanishiladi. Masalan, S. Raxmaninovning “Polka”siga:
          </p>
        </ul>
          <div className='flex items-center justify-between max-w-[700px]'>
          <ul className='text-xl list-decimal'>
          
          <li>
          va bir va ikkita va;
          </li>
          <li>
          bir ikki uch;
          </li>
          <li>
          bir ikki uch;
          </li>
          
        </ul>

        <ul className='text-xl mt-5 list-decimal'>
        {/* <li>
          bir ikki uch;
          </li> */}
          <li>
          va, bir, ikki, uch;
          </li>
          <li>
          va, bir va ikkita va;
          </li>
          <li>
          bir ikki uch;
          </li>
        </ul>
          </div>

        <p className='text-xl'>
        Bu hisoblashni ovoz chiqarib, joyida harakatlar bilan, zal bo'ylab harakat qilish orqali amalga oshirishingiz mumkin.
Ritm darslarini boshqa fanlarda ijro etilgan raqs musiqasi asosida olib borish juda foydali.
Birma-bir sanash muhim, ya'ni 1-o'quvchi sanashni boshlaydi: "bir va ikkita va", keyin 2-o'quvchi davom etadi: "bir, ikki, uch", keyin boshqalar davom etadi. Siz guruhni jamoalarga bo'lishingiz mumkin: bir jamoa boshlanadi, keyin ikkinchisi davom etadi, keyin ikkala jamoa birgalikda.
        </p>

        <ol className='list-decimal text-xl mt-3'>
          <li className='mt-3'>
          polda "16" sonida va "8" sonida o'ng oyoqni chap oyog'idagi polda dastlabki holatiga qaytaring. Chap oyog'ingiz bilan ham xuddi shunday qiling. Keyin ikkala oyoqni birga ko'taring: ikkala oyog'ini 900 ga 
          ko'taring - tos suyagi ko'tarilmaydi, ikkala oyog'ini yon tomonlarga "ajralishlar" ga yoyib, so'ngra oyoqlarni erga dastlabki holatiga qaytaring.
          </li>

          <li className='mt-3'>
          Oyoqlaringizni va tanangizni "shamda" qo'llaringiz bilan ko'taring, "8" sonigacha ushlab turing, so'ngra "8" sonigacha "tomonlarga bo'linish" ga o'ting, oyoqlaringizni bir-biridan ajratib o'tiring, oldinga egilmoq; ta'zim qilmoq. . O'ng oyog'ingizni 8, chap oyog'ingizni
           8, orqangizni 32 gacha egib, takrorlang. Orqa tarafingizda yotib, boshlang'ich pozitsiyasiga qayting.
          </li>

          <li className='mt-3'>
          Oyoqlaringizni va tanangizni cho'zilgan holatda boshingiz ustiga tashlang, oyoqlaringiz erga tegishi kerak - bu holatni "8" sonigacha saqlang. Keyin tanangizni va oyoqlaringizni erga dastlabki holatiga 
          qaytaring va darhol tanangizni ko'taring, o'tiring va tanangizni orqangiz bilan to'g'rilang. Hammasini 8 marta takrorlang.
          </li>

          <li className='mt-3'>
          Boshlang'ich pozitsiyasiga qayting, oyoqlarini tizzada egib, ularni yon tomonlarga yoyib, oyoqlarini kesib o'ting - "kelebek" - boshingiz ostidagi qo'llar. Bu holatda 5 daqiqa davomida yoting, so'ng ag'daring va oshqozoningizda yoting, tirsaklaringizga suyaning, qo'llaringizni tirsagidan oldinga cho'zing, oyoqlaringizni bir-biridan ajratib oling,
           tizzalaringizni buking va oyoqlaringizni bir-biriga qo'ying. va ularni polga tashlang - "qurbaqa". 5 daqiqa davomida yoting.
          </li>

          <li className='mt-3'>
          Oshqozonda yotib, oyoqlarini cho'zing. "qayiq" mashqi. "8" da qo'llaringizni va oyoqlaringizni ko'taring, "8" da - dam oling.
          </li>

          <li className='mt-3'>
          "Savat" mashqi - oyoqlaringizni boshingizga ulang.
          </li>

          <li className='mt-3'>
          To'rt oyoqqa turing. O'ng oyog'ingizni tizzada bukilgan holda, chap yelkangizga 8 marta tashlang, so'ngra chap oyog'ingizni o'ng yelkangizga 8 marta bir xil holatda tashlang.
          </li>

          <li className='mt-3'>
          Qo'llaringizni tizzangizga qo'ying. 4 marta o'ngga, 4 marta chapga egilib, birinchi marta "ko'prik" ga qayting - qo'llaringizni
           kamaringizda ushlab turing, takrorlashda qo'llaringizni erga tushiring va qo'llaringizga suyaning, orqangizni kamaytiring, boshingizni oyoqlaringizga qo'yishga harakat qilish.
          </li>

          <li className='mt-3'>
          Boshlang'ich pozitsiyasiga qayting, ya'ni. tiz cho'k. Qo'llaringizni oldingizda erga qo'ying, kaftlaringizni erga bosing va tirsaklaringizni tekislang. Qo'llaringizni erga qo'ying va oyoqqa turing. Qo'llaringizni oyog'ingizga 4 tagacha sanab "yuring", 4 tagacha shu holatda qoling va qo'llaringizni oyoqlaringiz oldida 4 tagacha yuring. "4" gacha ushlab turing va bir necha marta takrorlang.
           marta. Keyin, oyoqlaringizni cho'zing (oyoqlar VI holatida), o'zingizni tirsaklaringizga tushiring. To'piqlaringizni ko'tarmaslikka harakat qiling, ular erga bosilishi kerak.
          </li>

          <li className='mt-3'>
          Split stretch. O'ngdagi "bo'linish" ga o'tiring, "16" sanasigacha o'tiring, tanangizni o'ng oyog'ingizga qo'ying, 16 ga qadar ushlab turing, 
          qo'llaringizni 32-pozitsiyaga ko'taring. Chapdagi hamma narsani takrorlang. oyoq Keyin o'ngga, chapga egilib, to'g'ri o'tirib, qo'llaringizni uchinchi holatga ko'taring.
          </li>

         
        </ol>
      </div>

      <div className='mt-6 max-w-[1100px] m-auto'>
        <h1 className='text-center text-2xl'>1-yil o'qish</h1>
        <h2 className='text-xl text-center my-2'>Musiqiy va ritmik ta'lim</h2>
        <p className='text-xl'>
        Talabalarning musiqiy va ritmik tarbiyasi o'qishning birinchi yilida amalga oshiriladi.
Ushbu materialni o'rganish natijasida talabalar ritmik, vosita va cholg'u talqinida elementar musiqa nazariyasining ba'zi asoslarini olishlari kerak. Musiqiy ritm ta'limi talabalarga sahnada ritmning ma'nosini tushunishga yordam berishga qaratilgan; musiqani faol, hissiy idrok etish; musiqiy intonatsiyani eshitish; musiqiy tafakkurning rivojlanish jarayonini, uning strukturaviy va metro-ritmik xususiyatlarini, dinamik, temp, modal o'zgarishlarni harakatda aks ettirish; musiqiy lug'atni o'zlashtirish.
O'rganish uchun musiqiy materialni to'g'ri tanlash va mohirona foydalanish muhimdir. Unda o‘quvchilarning yoshiga mos o‘zbek, rus, xorijiy mumtoz va xalq musiqasining yuksak badiiy namunalari bo‘lishi kerak.
Musiqiy va ritmik ta'lim kursi quyidagilarni o'z ichiga oladi:
        </p>

        <h3 className='text-2xl text-center my-3'>Mavzu 1. Musiqa dinamikasi va xarakteri.</h3>

        <div className="w-full">
        <table className="min-w-full border border-gray-300">
            <thead>
                <tr>
                    <th className="p-2 border border-gray-300 text-left">Характер</th>
                    <th className="p-2 border border-gray-300 text-left"></th>
                    <th className="p-2 border border-gray-300 text-left"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-2 border border-gray-300">legato</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">связно</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">staccato</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">отрывисто</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">sforzando</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">акцентируя, выделяя с силой</td>
                </tr>
                <tr>
                    <th className="p-2 border border-gray-300 text-left">Динамика</th>
                    <th className="p-2 border border-gray-300 text-left"></th>
                    <th className="p-2 border border-gray-300 text-left"></th>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">forte</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">громко</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">piano</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">тихо</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">crescendo</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">постепенно увеличивая силу звука</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">diminuendo</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">постепенно ослабляя силу звука</td>
                </tr>
                <tr>
                    <th className="p-2 border border-gray-300 text-left">Тема 2. Темп (скорость музыкального движения)</th>
                    <th className="p-2 border border-gray-300 text-left"></th>
                    <th className="p-2 border border-gray-300 text-left"></th>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">allegro</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">быстро</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">allegretto</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">довольно быстро</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">andante</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">умеренно, спокойно</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">adagio</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">медленно</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">ritenuto</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">постепенное замедляя</td>
                </tr>
                <tr>
                    <td className="p-2 border border-gray-300">accelerando</td>
                    <td className="p-2 border border-gray-300">__</td>
                    <td className="p-2 border border-gray-300">ускоряя</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3 className='text-2xl text-center my-3'>Mavzu 3. Metr. Musiqiy vaqt belgisi: 2/4, 3/4, 4/4, 6/8</h3>

    <p className='text-xl'>
    Takt. O'lchovning kuchli va zaif zarbalari. Barlarda va bardan tashqarida tanishish. Belgilangan o'lchamdagi vaqt.
Ritm asosiy mavzulardan biri emas. Ritmik - bu yordamchi faoliyat, bolalar notalarni aniq eshitadilar va o'z vaqtida raqsga tushadilar, yanada musiqiy bo'ladi. Bolalar bu qanday ritmik mavzu ekanligini tushunishlari uchun birinchi dars faqat musiqiy barlarni ovoz chiqarib sanashga bag'ishlanishi kerak:
2/4 - "bir va ikki va"
3/4 - "bir, ikki, uch va"
4/4 - "bir va ikki, uch va to'rt"
Keyingi darslarda murakkab hisob-kitoblar kiritiladi. Masalan, S. Raxmaninovning “Polka”siga:
va bir va ikkita va;
bir ikki uch;
va bir va ikkita va;
bir ikki uch;
bir ikki uch;
va, bir, ikki, uch;
va, bir va ikkita va;
bir ikki uch;
Bu hisoblash baland ovozda, joyida harakatlar, zal bo'ylab harakatlanishi mumkin.
Bir vaqtning o'zida bittadan sanash muhim, ya'ni 1-o'quvchi sanashni boshlaydi: "bir va ikkita va", keyin 2-chi davom etadi: "bir, ikki, uch", keyin
boshqalar davom etadi. Guruhni jamoalarga bo'lishingiz mumkin: bir jamoa boshlanadi, keyin ikkinchisi davom etadi, keyin ikkala jamoa birgalikda.
Bunday tadbirlar tufayli bolalar nafaqat ritm tuyg'usini rivojlantiradilar, balki diqqatni, ansambl hissini va reaktsiya tezligini rivojlantiradilar.

2-o'quv yili
Amalga oshirilgan mashqlar quyidagilarni o'z ichiga oladi:
1. 2/4 vaqt ichida turli xil o'zgarishlarda harakatlar bilan birgalikda hisoblash.
2. Ispan musiqasi ostida qo'lingizni qarsak chalayotganda oyoqlaringizni navbatma-navbat uring.
3. Rossiya pelletlari:
a) granulalar naqshini hisoblashda qo'lda bajariladi;
b) artikulyar: qo'l va oyoq bilan hisoblash;
c) oyoqlar.

4. Zal bo'ylab va joyida, ketma-ket va buyruq bo'yicha oldinga harakat bilan birgalikda hisoblash.

Ritmik mashg‘ulotlarni xalq estradasi, o‘zbek va tarixiy raqs darslarida o‘rganilganlarni hisobga olgan holda o‘tkazish tavsiya etiladi.

2. Musiqiy va ritmik tayyorgarlik.

Musiqiy va ritmik mashg'ulotlar dasturning barcha ko'rsatilgan mavzulariga asoslanadi. Yurish, yugurish, sakrash, sakrash, qo'llarning turli harakatlari va bu harakatlar kombinatsiyasi bajariladi.
Tantanali yoki qayg'uli, quvonchli yoki tashvishli eshitiladigan musiqa harakat tabiatida o'z ifodasini topishi kerak.
Ovozni takrorlashning tabiati (legato, staccato), dinamik soyalar (forte, pianino) tana mushaklarining bo'shashishi yoki kuchlanishida, harakatlar intensivligining oshishi yoki kamayishida aks ettirilishi kerak.
O`quvchilar e`tiborini taklif etilayotgan musiqa asarining tempiga qaratish orqali ularning har birida to`liq barqarorlikka erishish kerak. Musiqani tezlashtirganda yoki sekinlashtirganda, harakatlar tempining asta-sekin va silliq o'zgarishiga e'tibor berish kerak. Talabalar eshitgan asarning musiqiy tempini yodlab olishlari kerak, keyin esa harakatni tavsiya etilgan tempda musiqasiz bajarishlari kerak.
Musiqiy tovushni, ajralish hissini aniqlash, o'quvchilarga musiqaning vaqtinchalik hajmini to'g'ri boshqarishni o'rgatish.
Ohangning hajmini va demak, vaqtini aniqlash mahorati? kirish va pauzalarning aniqligini rivojlantiradi.
Musiqa asarining tuzilishi haqidagi mavzu ustida ishlash orqali o‘quvchilar musiqa asarining vaqt belgisiga qarab fazoda harakat va harakatni taqsimlash ko‘nikmasiga ega bo‘ladilar.
Mashqlar musiqiy nutqning davrlarga, gap va iboralarga bo'linishini aks ettirishi kerak. Ohangning zarbli konstruktsiyasi chorak, sakkizinchi, ikki va sakkizinchi notalarning zarbalarini kiritish orqali rivojlanishi kerak.
Ikki qismli va uch qismli tuzilishga ega, iboralarning tuzilishi bir xil va turli xil, iboralarning o'ziga xosligi (metroritmik takrorlash) bo'lgan kichik musiqa qismlari ustida mashqlar qurish foydalidir. Musiqiy nutqning bo'linishi talabalar guruhlarini turli xil qayta tashkil etishda aniq namoyon bo'ladi.
Talabalarning progressiyani batafsil o‘rganishi ularga turli ritmik naqshlarni aniq bajarish imkonini beradi. Bu, ayniqsa, xoreograf talabalar uchun juda muhimdir, chunki ular uchun klassik va tarixiy raqs darslarida topshiriqlarni o'zlashtirish osonroq.
O‘quvchilarni turli davomiyliklarni idrok etishga o‘rgatish guruhlarda bir vaqtda ritmik harakatlarni bajarish yo‘li bilan amalga oshiriladi: bir guruh harakatni choraklarda, ikkinchisi sakkizda va hokazolarda bajaradi.
Darslarda ritmik diktantlardan foydalanish tavsiya etiladi. "Ritmik aks-sado" (kompanist musiqiy iborani ijro etadi, o'quvchilar pauza paytida uning ritmik naqshini takrorlaydi).
“Nuqta bilan chorak va sakkizinchi”, “nuqta bilan sakkizinchi va o‘n oltinchi” ritmik figuralari bilan tanishish darslarda muhim o‘rin egallashi kerak. Birinchi raqam chorakda silliq to'xtash bilan keng harakatga to'g'ri keladi. Ikkinchi raqam sakrash va sakrash bilan yaxshi uzatiladi. Yagona fokusni tuzatishga qo'shimcha ravishda dam olish, uchlik, sinxronlash va nuqtali ritmlar bilan murakkabroq ritmik naqshlarni yarating.
    </p>
      </div>
    </div>
  )
}

export default BmsmUstavi