import React from 'react';

const Statistic = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section class="m-0 p-0 dark:bg-gray-800 dark:text-gray-100">
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black top-0 left-0"
            ></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white font-semibold text-5xl">
                    Selamat Datang di KKN Desa Seloromo
                  </h1>
                  <p class="mt-4 text-lg text-white">
                    Desa Seloromo adalah pedesaan di karanganyar yang berada di daerah jenawi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      </section>

      <section class="pb-10 bg-blueGray-200 -mt-24 dark:bg-gray-700 dark:text-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto dark:bg-gray-800 dark:text-gray-100">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Penduduk</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Desa Seloromo memiliki total 5000 kepala keluarga dan 20000 Jiwa
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto dark:bg-gray-800 dark:text-gray-100">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-slate-400 ">
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">UMKM</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Desa Seloromo memiliki 230 UMKM baik skala mikro atau  menengah yang 
                    bergerak di bidang pertanian, wisata, dll
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto dark:bg-gray-800 dark:text-gray-100">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Eko Wisata</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Desa Seloromo Memiliki eko wisata seperti air terjun dan waduk 
                    yang biasa dinikmati penduduk maupun turis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistic;
