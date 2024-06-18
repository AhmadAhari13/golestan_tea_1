import "./assets/styles/style.css";
import { setupCounter } from "./indexScript.js";
//CHECK
if (window.location.pathname == "/blog") {
  //START BLOG
  document.querySelector("#app").innerHTML = `
  <!-- header -->
    <header
      class="max-h-screen h-[168.5px] lg:h-[100.5px] header z-30 w-full fixed top-0 start-0 font-normal bg-[url('../images/header-back-1.png')] bg-repeat"
    >
      <!-- dark mode -->
      <section class="z-40">
        <div
          class="darkmode fixed left-5 top-5 w-10 h-10 rounded bg-[rgba(0,0,0,0.4)] hover:bg-[#333] flex justify-center items-center cursor-pointer text-white"
        >
          <i class="fa-solid fa-moon moon" style="color: #ffffff"></i>
        </div>
      </section>
      <!-- dark mode -->
      <div
        class="container max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center text-[#afb2b4]"
      >
        <div class="header-logo align-middle mx-2 w-[170px] h-[105px]">
          <img
            src="assets/images/logo-fr.png"
            class="img-fluid mx-auto mt-3 md:absolute lg:-bottom-[50px]"
            alt=""
          />
        </div>
        <div
          class="bars block md:hidden text-3xl self-start ms-10 cursor-pointer mt-6"
        >
          <i class="fa-solid fa-bars"></i>
        </div>
        <div
          class="w-11/12 md:w-full max-h-96 header-body hidden md:flex flex-col md:flex-row md:justify-center md:items-center leading-5 md:pe-8 md:mt-3 text-sm"
        >
          <nav>
            <ul
              class="md:w-[787px] flex flex-col md:flex-row align-center justify-between lg:justify-between gap-6 lg:gap-0 pb-3 md:pb-0"
            >
              <li class="hover:text-[#ffffff]">
                <a href="/">صفحه اصلی</a>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="hover:text-[#ffffff] pb-3">شرکت گلستان</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] ps-5 sub-menu pe-3">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">معرفی شرکت</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">تاریخچه گلستان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">اخبار و اطلاعیه ها</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">مسئولیت های اجتماعی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سازمان فروش</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سازمان توزیع</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">برند ها</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="hover:text-[#ffffff]">محصولات</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] pe-3 ps-5 sub-menu">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">چای</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">ناتس</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">ادویه و چاشنی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">برنج</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">زعفران و زرشک</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">دمنوش</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">حبوبات و غلات</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">عصاره های گیاهی گلستان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">قند و شکر</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">هاتی نودل</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سایر محصولات</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">گل کیس</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="text-[#ffffff]">وبلاگ</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] pe-3 ps-5 sub-menu">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">مجله گلستان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">فرهنگ غذایی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سلامت غذایی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">تاریخچه</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">میزبانی و دیزاین</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="hover:text-[#ffffff]"><a href="#">قرعه کشی</a></li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="hover:text-[#ffffff]"><a href="#">استخدام</a></li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="hover:text-[#ffffff]">تماس با ما</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] pe-3 ps-5 sub-menu">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">دفتر مرکزی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">صدای مصرف کنندگان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">ارتباط با مشترکین</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="hover:text-[#ffffff]"><a href="#">EN</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!-- back to tup -->
    <section class="back-to-up hidden z-30">
      <a href="#">
        <div
          class="fixed left-5 bottom-5 w-10 h-10 rounded bg-[rgba(0,0,0,0.4)] hover:bg-[#333] flex justify-center items-center cursor-pointer text-white"
        >
          <!-- <i class="fa fa-angle-up"></i> -->
          <i class="fa-solid fa-angle-up"></i>
        </div>
      </a>
    </section>
    <!-- مجله گلستان -->
    <section class="flex flex-col mb-0 border-0">
      <div class="p-3 pt-[168.5px] lg:pt-36 lg:ps-10 xl:ps-16">
        <p
          class="block container mx-auto text-xl leading-5 font-bold text-[#ff0000] xl:ps-16 my-9"
        >
          مجله گلستان
        </p>
      </div>
      <div class="bg-[#f7f9fb] dark:bg-[#7a8d63] py-10 dark:text-white">
        <!-- row  -->
        <!-- class="container mx-auto flex flex-col md:flex-row justify-center items-center max-w-[980px] gap-3 p-5" -->
        <div
          class="container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:max-w-5xl p-5 gap-3 gap-y-24 place-items-center"
        >
          <!-- start items  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <img
              src="assets/images/recipe-pic-brown-rice.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              برنج قهوه‌ای، ظهور سلامت
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              در گذشته ایران و بسیاری از کشورهای جهان، برنج سفید را تنها نوع
              برنج موجود می‌دانستند. گذرزمان باعث شد تا برنج قهوه‌ای نیز به سفره
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <img
              src="assets/images/recipe-pic-tacos-Mexican.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              تاکو مکزیکی
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              یکی از غذاهای معروف مکزیکی تاکو است، تاکو شهرت جهانی دارد و در همه
              نقاط دنیا طرفداران فراوانی پیدا کرده است. برای تهیه تاکو بسته
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <img
              src="assets/images/recipe-pic-Borage-flower.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              بهترین دمنوش‌های آرامبخش
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              فنجانی نوشیدنی گرم می‌تواند یک عصر زیبا و آرام را برایتان به
              ارمغان بیاورد. دمنوش‌های آرامبخش از ترکیب گیاهان دارویی با خواص
              فراوان تهیه می‌شوند
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->

          <!-- start items  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-Indian-Rice-Nuts.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              آجیل پلو
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              آجیل پلو، یک غذای هندی هندی‌ها در طعم‌دار کردن برنج مهارت بالایی
              دارند. آجیل پلو هم یکی از غذاهای محبوب هندی‌هاست که در آن از
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-Lentil-burger.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              برگر عدس
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              اگر دوست دارید که یک برگر گیاهی و کاملاً سالم داشته باشید برگر عدس
              یک انتخاب مناسب برای شماست. عدس سرشار از پروتئین است و
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-Chocolate-cake-bundt.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              باندنت کیک شکلاتی
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              باندنت کیک مانند سایر کیک‌ها به روش عادی پخته می‌شود. اسم این کیک
              از ظرف باندنت گرفته شده است. در واقع مایع و مواد کیک
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->

          <!-- start items  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-1401-04.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              آش انار
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              برای تهیه این آش از شب قبل حبوبات را بخیسانید. در ادامه برنج،
              بلغور، لوبیا و عدس را بشورید و داخل یک قابلمه مناسب بریزید. در این
              مرحله چند لیوان آب به قابلمه…
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-1401-05.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              رولت مرغ
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              پیاز و سیر را در کاسه‌ی بزرگی رنده کنید. سپس مرغ چرخ شده، پودر
              سوخاری، تخم مرغ، زعفران دم‌کرده، نمک، فلفل سیاه، پودر پاپریکا و
              پودر گوجه را به آن اضافه کنید و …
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-Chilakile-1401.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              کیک ردولوت
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              مواد لازم آرد سفید گلستان یک و نیم پیمانهشکر یک و نیم پیمانهتخم
              مرغ دو عددباتر میلک یک پیمانهروغن مایع حدود یک پیمانهبیکینگ پودر
              گلستان
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->

          <!-- start items  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic1.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              استیک با سس قارچ
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              استیک را باید در تابه چدنی سرخ کرده و در هر نوبت یک استیک را در
              تابه قرار داد. قطعات گوشت را کمی می کوبیم. دو طرف هر قطعه را به
              نمک و فلفل آغشته می کنیم…
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic2.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              ماکارونی با سبزیجات
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
              می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
              روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic3.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              سوپ مکزیکی
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <!-- item  -->

          <!-- start items  -->
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-Chilakile-1401.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              چیلاکیله
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرست
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- video section -->
    <section class="flex flex-col bg-[#f7f9fb] dark:bg-gray-900 mt-0 border-0">
      <div class="py-1 my-4">
        <div
          class="container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:max-w-5xl max-w-[980px] gap-3 p-5"
        >
          <div
            class="bg-white dark:bg-gray-400 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 flex flex-col mx-auto"
          >
            <div id="81218454599" class="min-w-full bg-white dark:bg-black">
              <script
                type="text/JavaScript"
                src="https://www.aparat.com/embed/cQ0yF?data[rnddiv]=81218454599&data[responsive]=yes"
              ></script>
            </div>
            <p class="text-[#ff0000] text-base font-bold my-5 mx-4">
              سالاد نودل
            </p>
            <p
              class="text-[#7c7d7e] dark:text-white text-xs leading-7 font-thin mb-5 mx-4 grow"
            >
              نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی
              آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
              ببرید.
            </p>
            <div>
              <button
                type="button"
                class="hover:text-white hover:bg-[#ed1c24] dark:text-white text-sm font-thin text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
              >
                ویدیو های بیشتر
              </button>
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-400 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 mx-auto"
          >
            <div id="92720690637" class="min-w-full bg-white dark:bg-black">
              <script
                type="text/JavaScript"
                src="https://www.aparat.com/embed/Ysaot?data[rnddiv]=92720690637&data[responsive]=yes"
              ></script>
            </div>
            <p class="text-[#ff0000] text-base font-bold my-5 mx-4">
              اینستاگرام هاتی نودل
            </p>
            <p
              class="text-[#7c7d7e] dark:text-white text-xs leading-7 font-thin mb-5 mx-4 grow"
            >
              نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
              دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
              سالم و كاملی ساخته است.
            </p>
            <button
              type="button"
              class="hover:text-white hover:bg-[#ed1c24] text-sm font-thin dark:text-white text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <div
            class="bg-white dark:bg-gray-400 block shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 mx-auto"
          >
            <div id="76670066876" class="min-w-full bg-white dark:bg-black">
              <script
                type="text/JavaScript"
                src="https://www.aparat.com/embed/Mwp4H?data[rnddiv]=76670066876&data[responsive]=yes"
              ></script>
            </div>
            <p class="text-[#ff0000] text-base font-bold my-5 mx-4">
              برنج گلستان
            </p>
            <p
              class="text-[#7c7d7e] dark:text-white text-xs leading-7 font-thin mb-5 mx-4 grow"
            >
              عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست.
              با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان
              گلستان؛‌ لایق بهترین ها هستند.
            </p>
            <button
              type="button"
              class="hover:text-white hover:bg-[#ed1c24] text-sm font-thin dark:text-white text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              مشاهده محصولات
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- social network -->
    <section>
      <div
        class="bg-[#EEEFEF] py-6 flex flex-row justify-center items-center gap-2"
      >
        <a href="#">
          <div
            class="flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#5252ffc4] w-12 h-12 cursor-pointer text-[40px] font-bold"
          >
            f
          </div>
        </a>
        <a href="#">
          <div
            class="flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#5297ffda] w-12 h-12 cursor-pointer text-[40px] font-bold"
          >
            in
          </div>
        </a>
        <a href="#">
          <div
            class="text-3xl flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#b63939] w-12 h-12 cursor-pointer font-bold"
          >
            <i class="fa-brands fa-instagram"></i>
          </div>
        </a>
        <a href="#">
          <div
            class="telegram text-[50px] overflow-hidden flex justify-center items-center text-white rounded-full w-12 h-12 cursor-pointer font-bold bg-white"
          >
            <i class="fa-brands fa-telegram telegram-blue"></i>
            <i class="fa-brands fa-telegram telegram-gray"></i>
          </div>
        </a>
        <a href="#">
          <div
            class="overflow-hidden aparat flex justify-center items-center text-white rounded-full bg-white w-12 h-12 cursor-pointer text-[40px] font-bold"
          >
            <img
              src="assets/images/icons8-aparat-48.png"
              class="aparat-gray"
              alt=""
            />
            <img
              src="assets/images/icons8-aparat-48-pink.png"
              class="aparat-pink"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div
            class="flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#38b638af] w-12 h-12 cursor-pointer text-[27px] leading-6 font-bold"
          >
            GL
          </div>
        </a>
      </div>
      <div class="h-6 bg-[#ED1C24]"></div>
    </section>
    <!-- footer  -->
    <footer class="bg-[url('../images/header-back.png')]">
      <div class="container max-w-[700px] flex flex-col md:flex-row mx-auto">
        <!-- tea  -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4 text-sm">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon1.png"
            alt=""
          />
          <div>
            <span
              class="block mb-3 mt-5 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">چای گلستان</p>
          <div>
            <span class="block my-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای ممتاز هندوستان​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای ممتاز ارل گری​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای سيلان عطری​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای ممتاز سيلان​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای صبحانه گلستان​
            </div>
          </div>
        </div>
        <!-- tea bag -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon4.png"
            alt=""
          />
          <div>
            <span
              class="block mt-5 mb-3 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">تی بگ گلستان</p>
          <div>
            <span class="block mt-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              تی بگ بلک لاين
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              تی بگ ارل گری
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              دمنوش نعناع
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              دمنوش بابونه
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              دمنوش چای سبز
            </div>
          </div>
        </div>
        <!-- spice  -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon3.png"
            alt=""
          />
          <div>
            <span
              class="block mb-3 mt-5 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">ادویه گلستان</p>
          <div>
            <span class="block mt-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              زعفران ممتاز خراسان
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              ادویه کاری
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              ادویه ماست و خیار
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              فلفل سياه خالص
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              زردچوبه ممتاز
            </div>
          </div>
        </div>
        <!-- beans  -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon2.png"
            alt=""
          />
          <div>
            <span
              class="block mb-3 mt-5 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">حبوبات گلستان</p>
          <div>
            <span class="block mt-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              لوبيا قرمز ممتاز
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              لوبيا چيتی گلستان
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              عدس كانادايی
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              نخود زودپز كرمانشاه
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              لوبيا سفيد گلستان
            </div>
          </div>
        </div>
      </div>
      <!-- copy right -->
      <div class="my-9">
        <p class="text-[#9F9F9F] text-base mx-auto w-fit">
          All Right Reserved Golestan Company 2022-2025
        </p>
        <p class="text-[#7B7B7B] text-sm mx-auto w-fit">
          Design By: Golestan Studio
        </p>
      </div>
    </footer>
    <!-- end  -->
`;
  //END BLOG
} else {
  //START HOME
  document.querySelector("#app").innerHTML = `
  <!-- header -->
    <header
      class="max-h-screen h-[168.5px] lg:h-[100.5px] header z-30 w-full fixed top-0 start-0 font-normal bg-[url('../images/header-back-1.png')] bg-repeat"
    >
      <!-- dark mode -->
      <section class="z-40">
        <div
          class="darkmode fixed left-5 top-5 w-10 h-10 rounded bg-[rgba(0,0,0,0.4)] hover:bg-[#333] flex justify-center items-center cursor-pointer text-white"
        >
          <i class="fa-solid fa-moon moon" style="color: #ffffff"></i>
        </div>
      </section>
      <!-- dark mode -->
      <div
        class="container max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center text-[#afb2b4]"
      >
        <div class="header-logo align-middle mx-2 w-[170px] h-[105px]">
          <img
            src="assets/images/logo-fr.png"
            class="img-fluid mx-auto mt-3 md:absolute lg:-bottom-[50px]"
            alt=""
          />
        </div>
        <div
          class="bars block md:hidden text-3xl self-start ms-10 cursor-pointer mt-6"
        >
          <i class="fa-solid fa-bars"></i>
        </div>
        <div
          class="w-11/12 md:w-full max-h-96 header-body hidden md:flex flex-col md:flex-row md:justify-center md:items-center leading-5 md:pe-8 md:mt-3 text-sm"
        >
          <nav>
            <ul
              class="md:w-[787px] flex flex-col md:flex-row align-center justify-between lg:justify-between gap-6 lg:gap-0 pb-3 md:pb-0"
            >
              <li class="text-[#ffffff]">
                <a href="/">صفحه اصلی</a>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="hover:text-[#ffffff] pb-3">شرکت گلستان</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] ps-5 sub-menu pe-3">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">معرفی شرکت</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">تاریخچه گلستان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">اخبار و اطلاعیه ها</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">مسئولیت های اجتماعی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سازمان فروش</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سازمان توزیع</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">برند ها</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="hover:text-[#ffffff]">محصولات</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] pe-3 ps-5 sub-menu">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">چای</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">ناتس</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">ادویه و چاشنی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">برنج</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">زعفران و زرشک</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">دمنوش</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">حبوبات و غلات</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">عصاره های گیاهی گلستان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">قند و شکر</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">هاتی نودل</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سایر محصولات</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">گل کیس</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="/blog" class="hover:text-[#ffffff]">وبلاگ</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] pe-3 ps-5 sub-menu">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">مجله گلستان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">فرهنگ غذایی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">سلامت غذایی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">تاریخچه</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">میزبانی و دیزاین</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="hover:text-[#ffffff]"><a href="#">قرعه کشی</a></li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="hover:text-[#ffffff]"><a href="#">استخدام</a></li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="mega-menu">
                <a href="#" class="hover:text-[#ffffff]">تماس با ما</a>
                <div class="overflow-hidden md:absolute md:pt-3">
                  <ul class="md:bg-[#2D2D2D] min-w-[10em] pe-3 ps-5 sub-menu">
                    <li class="sub-menu-li leading-normal hover:text-[#ffffff]">
                      <a href="#" class="leading-10">دفتر مرکزی</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">صدای مصرف کنندگان</a>
                    </li>
                    <li class="sub-menu-li leading-5 hover:text-[#ffffff]">
                      <a href="#" class="leading-10">ارتباط با مشترکین</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span
                class="hidden lg:block border border-[#4d4d52] m-0 p-0"
              ></span>
              <li class="hover:text-[#ffffff]"><a href="#">EN</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!-- back to tup -->
    <section class="back-to-up hidden z-30">
      <a>
        <div
          class="fixed left-5 bottom-5 w-10 h-10 rounded bg-[rgba(0,0,0,0.4)] hover:bg-[#333] flex justify-center items-center cursor-pointer text-white"
        >
          <!-- <i class="fa fa-angle-up"></i> -->
          <i class="fa-solid fa-angle-up"></i>
        </div>
      </a>
    </section>
    <!-- hero section -->
    <section class="flex justify-center items-center w-full">
      <div
        class="w-full flex justify-center items-center bg-gradient-to-b from-[#fbfbfb] to-[#d2d2d2] pb-4"
      >
        <div
          class="container max-w-5xl flex flex-col md:flex-row pt-[168.5px] lg:pt-36 hero-section"
        >
          <div
            class="md:self-stretch flex flex-col md:w-1/2 p-11 md:ps-20 md:justify-between"
          >
            <p class="text-[27px] font-light text-[#ff0000]">
              قرعه‌کشی ماهیانه گلستان
            </p>
            <p class="mt-3 text-lg font-light text-[#58595b]">
              قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان
            </p>
            <p
              class="mt-3 text-base text-[#898989] leading-8 go-down"
              data-aos="fade-down"
            >
              هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد
              قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال
              1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
              است.
            </p>
            <button
              type="button"
              class="text-sm text-[#7C7D7E] rounded-md bg-white hover:bg-[#FF0000] hover:text-white w-max leading-7 px-5 py-1 border border-[#c8c8c8] mt-5 md:mt-0"
            >
              اطلاعات بیشتر
            </button>
          </div>
          <div class="md:w-1/2 flex justify-center items-center">
            <img
              class="img-fluid go-down"
              src="assets/images/tea-pic1.png"
              alt=""
              data-aos="fade-down"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- divider -->
    <div>
      <span class="hidden md:block my-5 mx-3 border-t border-[#dfe1e3]"></span>
    </div>
    <!-- معرفی گلستان -->
    <section class="container mx-auto leading-9 px-5 mt-5">
      <div class="max-w-3xl mx-auto go-right">
        <p class="text-lg font-bold text-[#ff0000] mt-3 md:mt-0 leading-9">
          <br /><br />
          معرفی گلستان
        </p>
        <p class="mt-3 md:mt-0 text-base text-[#898989] leading-9 font-thin">
          آنچه که امروز با نام مجموعه
          <span class="text-[#ff0000]">گلستان</span> می‌شناسیم در سال 1329 بنیان
          نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای
          پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج
          تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و
          بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.
          <span class="text-[#ff0000]">گلستان</span> پس از سال‌ها تلاش همچنان
          می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل
          اعتماد و با کیفیت تولید نماید.
        </p>
        <p class="mt-4 md:mt-4 text-base text-[#898989] leading-9 font-thin">
          هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
          تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
          بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان است.
          <br /><br /><br />
        </p>
        <p class="text-lg font-bold text-[#ff0000] mt-11 leading-9">
          محصولات گلستان​
        </p>
        <p class="mt-6 mb-9 text-base text-[#898989] leading-9 font-thin">
          <span class="text-[#ff0000]">نام تجاری گلستان</span> قدمتی به اندازه
          عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری
          عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره
          محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام
          تجاری حمایت می‌کنند. <br />
        </p>
        <!-- آیکون های معرفی -->
        <div
          class="hidden md:flex flex-row justify-center items-center gap-5 mb-12 py-16 go-in"
        >
          <div class="flex flex-col items-center border-b border-[#DBDBDB]">
            <img src="assets/images/statistics-icon-4.png" alt="" />
            <p class="text-[#7c7d7e] text-base leading-9 my-3">سرمایه انسانی</p>
          </div>
          <div class="flex flex-col items-center border-b border-[#DBDBDB]">
            <img src="assets/images/statistics-icon-3.png" alt="" />
            <p class="text-[#7c7d7e] text-base leading-9 my-3">مراكز فروش</p>
          </div>
          <div class="flex flex-col items-center border-b border-[#DBDBDB]">
            <img src="assets/images/statistics-icon-2.png" alt="" />
            <p class="text-[#7c7d7e] text-base leading-9 my-3">
              محصولات گلستان
            </p>
          </div>
          <div class="flex flex-col items-center border-b border-[#DBDBDB]">
            <img src="assets/images/statistics-icon-1.png" alt="" />
            <p class="text-[#7c7d7e] text-base leading-9 my-3">
              مشتریان گلستان
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- divider -->
    <div>
      <span class="block my-5 mx-3 border-t-2 border-[#dfe1e3]"></span>
    </div>
    <!-- pic-title-dection -->
    <section>
      <div class="">
        <div class="bg-[#E9D69F] pb-5">
          <img
            src="assets/images/image2-new-1.jpg"
            class="mx-auto w-full h-[221px] md:h-[500px]"
            alt=""
          />
        </div>
        <div class="relative">
          <div
            class="z-0 absolute flex flex-col md:left-[57%] bottom-0 min-w-full md:h-24 md:min-w-fit md:max-w-72 text-white bg-[#ED1C24] ps-[17px] pb-[4px] pe-[114px]"
          >
            <p class="text-2xl my-2">برنج گلستان</p>
            <p class="text-base my-2">معرفی محصول</p>
          </div>
        </div>
      </div>
    </section>
    <!-- divider -->
    <div>
      <span
        class="hidden md:block my-9 mx-3 border-t-2 border-[#dfe1e3]"
      ></span>
    </div>
    <!-- معرفی گلستان -->
    <section class="container mx-auto leading-9 px-5 mt-5">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg font-bold text-[#ff0000] mt-3 md:mt-0 leading-9">
          <br /><br />
          رکن اول غذای ایرانی
        </p>
        <p class="mt-3 md:mt-0 text-base text-[#898989] leading-9 font-thin">
          مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و
          هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
          كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
          وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با
          هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از
          همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
        </p>

        <div class="flex flex-row justify-start items-center gap-5 mb-12 py-16">
          <button
            type="button"
            class="text-sm text-[#7C7D7E] rounded-md bg-white hover:bg-[#FF0000] hover:text-white w-max leading-7 px-4 py-1 border border-[#c8c8c8]"
          >
            محصولات برنج
          </button>
          <button
            type="button"
            class="text-sm text-[#7C7D7E] rounded-md bg-white hover:bg-[#FF0000] hover:text-white w-max leading-7 px-4 py-1 border border-[#c8c8c8]"
          >
            آشپزخانه گلستان
          </button>
        </div>
      </div>
    </section>
    <!-- divider -->
    <div>
      <span
        class="hidden md:block my-5 mx-3 border-t-2 border-[#dfe1e3]"
      ></span>
    </div>
    <!-- pic-tea-section -->
    <section>
      <div class="">
        <div class="bg-[#E9D69F] pb-5">
          <img
            src="assets/images/image3-new.jpg"
            class="mx-auto w-full h-[221px] md:h-[500px]"
            alt=""
          />
        </div>
        <div class="relative">
          <div
            class="z-0 absolute flex flex-col md:left-[57%] bottom-0 min-w-full md:h-24 md:min-w-fit md:max-w-72 text-white bg-[#ED1C24] ps-[17px] pb-[4px] pe-[114px]"
          >
            <p class="text-[29px]">چای گلستان</p>
            <p class="text-base leading-10">معرفی محصول</p>
          </div>
        </div>
      </div>
    </section>
    <!-- divider -->
    <div>
      <span
        class="hidden md:block my-9 mx-3 border-t-2 border-[#dfe1e3]"
      ></span>
    </div>
    <!-- سابقه‌ای به قدمت یک عمر  -->
    <section class="container mx-auto leading-9 px-5">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg font-bold text-[#ff0000] leading-9 mb-3">
          سابقه‌ای به قدمت یک عمر
        </p>
        <p class="mt-3 md:mt-0 text-base text-[#898989] leading-9 font-thin">
          چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای
          برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی
          دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب
          آرامش را به همراه دارد.
        </p>
        <p class="mt-10 text-base text-[#898989] leading-9 font-thin">
          رای مردمان ایران زمین نام
          <span class="text-[#ff0000] font-bold">گلستان</span> با چای پیوند
          خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و
          بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث
          شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
          یادماندنی آن است.
        </p>
        <div class="flex flex-row justify-start items-center gap-5 py-12">
          <button
            type="button"
            class="text-sm text-[#7C7D7E] rounded-md bg-white hover:bg-[#FF0000] hover:text-white w-max leading-7 px-4 py-1 border border-[#c8c8c8]"
          >
            محصولات چای
          </button>
        </div>
      </div>
    </section>
    <!-- pic-Pistachio-section -->
    <section>
      <div class="">
        <div class="bg-[#E9D69F] pb-5">
          <img
            src="assets/images/image4-new.jpg"
            class="mx-auto w-full h-[221px] md:h-[500px]"
            alt=""
          />
        </div>
        <div class="relative">
          <div
            class="z-0 absolute flex flex-col md:left-[57%] bottom-0 min-w-full md:h-24 md:min-w-fit md:max-w-72 text-white bg-[#ED1C24] ps-[17px] pb-[4px] pe-[114px]"
          >
            <p class="text-[29px]">پسته گلستان</p>
            <p class="text-base leading-10">معرفی محصول</p>
          </div>
        </div>
      </div>
    </section>
    <!-- divider -->
    <div>
      <span
        class="hidden md:block my-9 mx-3 border-t-2 border-[#dfe1e3]"
      ></span>
    </div>
    <!-- آجيل‌های خوش خنده -->
    <section class="container mx-auto leading-9 px-5">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg font-bold text-[#ff0000] leading-9 mb-3">
          آجيل‌های خوش خنده
        </p>
        <p class="mt-3 md:mt-0 text-base text-[#898989] leading-9 font-thin">
          خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
          معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
        </p>
        <p class="mt-10 text-base text-[#898989] leading-9 font-thin">
          <span class="text-[#ff0000] font-bold">پسته گلستان</span> اما حسابش از
          دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته
          ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از
          سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته
          گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
        </p>

        <div class="flex flex-row justify-start items-center gap-5 py-12">
          <button
            type="button"
            class="text-sm text-[#7C7D7E] rounded-md bg-white hover:bg-[#FF0000] hover:text-white w-max leading-7 px-4 py-1 border border-[#c8c8c8]"
          >
            ناتس گلستان
          </button>
        </div>
      </div>
    </section>
    <!-- recipe banner -->
    <section
      class="h-64 overflow-hidden bg-center bg-[url('../images/recipe-baner-1.png')]"
    ></section>
    <!-- مجله گلستان -->
    <section class="flex flex-col">
      <div class="p-3">
        <p class="block text-xl leading-5 font-bold text-[#ff0000] ps-8 my-9">
          مجله گلستان
        </p>
      </div>
      <div class="bg-[#cde4b0] dark:bg-[#7a8d63] py-10 my-1 dark:text-white">
        <div
          class="container mx-auto flex flex-col md:flex-row-reverse justify-center items-center max-w-[980px] gap-3 p-5"
        >
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 md:self-stretch"
          >
            <img
              src="assets/images/recipe-pic-Chilakile-1401.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              چیلاکیله
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرست
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <div
            class="bg-white dark:bg-gray-700 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <img
              src="assets/images/recipe-pic3.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              سوپ مکزیکی
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <div
            class="bg-white dark:bg-gray-700 hidden lg:block shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <img
              src="assets/images/recipe-pic2.jpg"
              class="min-w-80 min-h-72 cursor-pointer hover:opacity-50"
              alt=""
            />
            <p class="text-[#ff0000] text-lg font-extralight my-5 mx-4">
              ماکارونی با سبزیجات
            </p>
            <p
              class="text-[#7c7d7e] dark:text-[#dfdfdf] text-xs leading-8 font-thin mb-5 mx-4"
            >
              ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
              می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
              روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
            </p>
            <button
              type="button"
              class="hover:text-white hover:border-[#ed1c24] hover:bg-[#ed1c24] text-sm font-thin dark:text-[#dfdfdf] text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- video section -->
    <section class="flex flex-col">
      <div class="py-1 my-1">
        <div
          class="container mx-auto flex flex-col video-section justify-center items-center max-w-[980px] gap-3 p-5"
        >
          <div
            class="bg-white dark:bg-gray-400 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80 flex flex-col"
          >
            <div id="81218454599" class="min-w-full bg-white dark:bg-black">
              <script
                type="text/JavaScript"
                src="https://www.aparat.com/embed/cQ0yF?data[rnddiv]=81218454599&data[responsive]=yes"
              ></script>
            </div>
            <p class="text-[#ff0000] text-base font-bold my-5 mx-4">
              سالاد نودل
            </p>
            <p
              class="text-[#7c7d7e] dark:text-white text-xs leading-7 font-thin mb-5 mx-4 grow"
            >
              نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی
              آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
              ببرید.
            </p>
            <div>
              <button
                type="button"
                class="hover:text-white hover:bg-[#ed1c24] dark:text-white text-sm font-thin text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
              >
                ویدیو های بیشتر
              </button>
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-400 shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <div id="92720690637" class="min-w-full bg-white dark:bg-black">
              <script
                type="text/JavaScript"
                src="https://www.aparat.com/embed/Ysaot?data[rnddiv]=92720690637&data[responsive]=yes"
              ></script>
            </div>
            <p class="text-[#ff0000] text-base font-bold my-5 mx-4">
              اینستاگرام هاتی نودل
            </p>
            <p
              class="text-[#7c7d7e] dark:text-white text-xs leading-7 font-thin mb-5 mx-4 grow"
            >
              نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
              دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
              سالم و كاملی ساخته است.
            </p>
            <button
              type="button"
              class="hover:text-white hover:bg-[#ed1c24] text-sm font-thin dark:text-white text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              ادامه مطلب
            </button>
          </div>
          <div
            class="bg-white dark:bg-gray-400 hidden lg:block shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-80"
          >
            <div id="76670066876" class="min-w-full bg-white dark:bg-black">
              <script
                type="text/JavaScript"
                src="https://www.aparat.com/embed/Mwp4H?data[rnddiv]=76670066876&data[responsive]=yes"
              ></script>
            </div>
            <p class="text-[#ff0000] text-base font-bold my-5 mx-4">
              برنج گلستان
            </p>
            <p
              class="text-[#7c7d7e] dark:text-white text-xs leading-7 font-thin mb-5 mx-4 grow"
            >
              عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست.
              با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان
              گلستان؛‌ لایق بهترین ها هستند.
            </p>
            <button
              type="button"
              class="hover:text-white hover:bg-[#ed1c24] text-sm font-thin dark:text-white text-[#7c7e7d] mb-5 rounded-lg border py-2 px-5 border-[#c8c8c8] mx-4"
            >
              مشاهده محصولات
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Social Responsibility -->
    <section>
      <div
        class="bg-[#105153] flex justify-center pt-64 border-b border-[#07787C]"
      >
        <p class="text-[#D5ECE1] text-lg font-thin leading-9">
          مسئوليت‌های اجتماعی شركت گلستان
        </p>
      </div>
      <div
        class="bg-[#105153] pb-60 flex flex-col justify-start pt-2 items-center"
      >
        <div class="flex flex-row-reverse justify-center items-end">
          <span class="text-[#009da2] text-3xl font-normal mx-1">Golestan </span
          ><span class="text-[#00d8df] text-xl font-normal align-bottom"
            >Social Responsibility</span
          >
        </div>
        <p class="text-[#bcbec0] text-lg">Mahdi Hospital</p>
        <div class="">
          <div class="z-20 relative w-96">
            <img
              class="absolute top-2"
              src="./assets/images/csr-pic1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="bg-[#E9D69F] h-5"></div>
    </section>
    <!-- divider -->
    <div>
      <span class="block my-6 mx-3 border-t-2 border-[#dfe1e3]"></span>
    </div>
    <!-- مسئوليت‌های اجتماعی گلستان-->
    <section class="container mx-auto leading-9 px-5 pt-12 mt-5">
      <div class="max-w-3xl mx-auto">
        <p class="text-lg md:text-base font-bold text-[#ff0000] leading-9 mb-3">
          مسئوليت‌های اجتماعی گلستان
        </p>
        <p class="mt-3 md:mt-0 text-base text-[#898989] leading-10 font-thin">
          كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
          قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از
          درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان
          برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
          <span class="text-[#ff0000] font-bold">گلستان</span> در فعالیت‌های‌
          اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار
          خود قرار داده است.
        </p>
        <div class="flex flex-row justify-start items-center gap-5 py-12">
          <button
            type="button"
            class="text-[15px] text-[#7C7D7E] rounded-md bg-white hover:bg-[#FF0000] hover:text-white w-max leading-7 px-4 py-1 border border-[#c8c8c8]"
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </section>
    <!-- social network -->
    <section>
      <div
        class="bg-[#EEEFEF] py-6 flex flex-row justify-center items-center gap-2"
      >
        <a href="#">
          <div
            class="flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#5252ffc4] w-12 h-12 cursor-pointer text-[40px] font-bold"
          >
            f
          </div>
        </a>
        <a href="#">
          <div
            class="flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#5297ffda] w-12 h-12 cursor-pointer text-[40px] font-bold"
          >
            in
          </div>
        </a>
        <a href="#">
          <div
            class="text-3xl flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#b63939] w-12 h-12 cursor-pointer font-bold"
          >
            <i class="fa-brands fa-instagram"></i>
          </div>
        </a>
        <a href="#">
          <div
            class="telegram text-[50px] overflow-hidden flex justify-center items-center text-white rounded-full w-12 h-12 cursor-pointer font-bold bg-white"
          >
            <i class="fa-brands fa-telegram telegram-blue"></i>
            <i class="fa-brands fa-telegram telegram-gray"></i>
          </div>
        </a>
        <a href="#">
          <div
            class="overflow-hidden aparat flex justify-center items-center text-white rounded-full bg-white w-12 h-12 cursor-pointer text-[40px] font-bold"
          >
            <img
              src="assets/images/icons8-aparat-48.png"
              class="aparat-gray"
              alt=""
            />
            <img
              src="assets/images/icons8-aparat-48-pink.png"
              class="aparat-pink"
              alt=""
            />
          </div>
        </a>
        <a href="#">
          <div
            class="flex justify-center items-center text-white rounded-full bg-[rgb(182,182,182)] hover:bg-[#38b638af] w-12 h-12 cursor-pointer text-[27px] leading-6 font-bold"
          >
            GL
          </div>
        </a>
      </div>
      <div class="h-6 bg-[#ED1C24]"></div>
    </section>
    <!-- footer  -->
    <footer class="bg-[url('../images/header-back.png')]">
      <div class="container max-w-[700px] flex flex-col md:flex-row mx-auto">
        <!-- tea  -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4 text-sm">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon1.png"
            alt=""
          />
          <div>
            <span
              class="block mb-3 mt-5 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">چای گلستان</p>
          <div>
            <span class="block my-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای ممتاز هندوستان​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای ممتاز ارل گری​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای سيلان عطری​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای ممتاز سيلان​
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              چای صبحانه گلستان​
            </div>
          </div>
        </div>
        <!-- tea bag -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon4.png"
            alt=""
          />
          <div>
            <span
              class="block mt-5 mb-3 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">تی بگ گلستان</p>
          <div>
            <span class="block mt-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              تی بگ بلک لاين
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              تی بگ ارل گری
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              دمنوش نعناع
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              دمنوش بابونه
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              دمنوش چای سبز
            </div>
          </div>
        </div>
        <!-- spice  -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon3.png"
            alt=""
          />
          <div>
            <span
              class="block mb-3 mt-5 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">ادویه گلستان</p>
          <div>
            <span class="block mt-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              زعفران ممتاز خراسان
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              ادویه کاری
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              ادویه ماست و خیار
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              فلفل سياه خالص
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              زردچوبه ممتاز
            </div>
          </div>
        </div>
        <!-- beans  -->
        <div class="w-full md:w-1/4 footer-box flex flex-col p-4">
          <img
            class="w-32 h-24 mx-auto"
            src="assets/images/footer-icon2.png"
            alt=""
          />
          <div>
            <span
              class="block mb-3 mt-5 border-t border-[#828991] self-stretch"
            ></span>
          </div>
          <p class="mx-auto text-white font-light text-base">حبوبات گلستان</p>
          <div>
            <span class="block mt-3 mb-5 border-t border-[#828991]"></span>
          </div>
          <div
            class="mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              لوبيا قرمز ممتاز
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              لوبيا چيتی گلستان
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              عدس كانادايی
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              نخود زودپز كرمانشاه
            </div>
            <div
              class="cursor-pointer text-[#BCBEC0] text-xs leading-7 hover:text-white"
            >
              لوبيا سفيد گلستان
            </div>
          </div>
        </div>
      </div>
      <!-- copy right -->
      <div class="mt-9 mb-0 pb-0">
        <p class="text-[#9F9F9F] text-base mx-auto w-fit">
          All Right Reserved Golestan Company 2022-2025
        </p>
        <p class="text-[#7B7B7B] text-sm mx-auto w-fit">
          Design By: Golestan Studio
        </p>
      </div>
    </footer>
    <!-- end  -->
`;
  //END HOME
}

//when load:
window.addEventListener("load", () => {
  setupCounter([
    document.querySelector("html"),
    document.querySelector(".back-to-up"),
    document.querySelector(".bars"),
    document.querySelector(".header-body"),
    document.querySelector(".header"),
    document.querySelector(".telegram"),
    document.querySelector(".darkmode"),
    document.querySelectorAll(".go-down"),
    document.querySelector(".go-right"),
    document.querySelector(".go-in"),
    document.querySelectorAll(".header div div nav ul li a"),
  ]);
});
