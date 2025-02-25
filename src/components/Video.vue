<template>

    <div class=" w-[90%] lg:w-[90%] mx-auto rounded-lg bg-[#14171A] p-6 py-10">
        <h2 class="text-white font-bold text-[32px] lg:font-[900] text-center">
            See How Our Smart Trading Works
        </h2>

        <p class="text-[#E8E0E0] text-[18px] text-center mt-4 font-[400]">
            Watch our system in action and discover how intelligent automation can enhance your trading experience
        </p>


        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 my-14">
            <div v-for="(video, index) in videos" :key="`${video.id}-${index}-reverse`"
                class="relative group cursor-pointer w-[300px] rounded-lg overflow-hidden" @click="openVideo(video.id)">
                <img :src="video.thumbnail" :alt="video.title"
                    class="w-full h-[169px] object-cover transition-transform duration-300 group-hover:scale-105" />
                <div
                    class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayIcon class="w-12 h-12 text-white" />
                </div>

                <div class="text-[#E8E0E0] text-[14px] font-[400] mt-2 p-2">
                    {{ video.title }}
                   
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>

const videos = [
    {
        id: 'H4EyKlqGkKw',
        thumbnail: `https://img.youtube.com/vi/H4EyKlqGkKw/maxresdefault.jpg`,
        title : 'OPTION TRADING SE RS 300000 PROFIT LIVE.'
    },
    {
        id: 'vjKFXdWtqZI',
        thumbnail: `https://img.youtube.com/vi/vjKFXdWtqZI/maxresdefault.jpg`,
        title : 'LIVE XAUUSD TRADING PROFIT $300 BOOKED | 23-10-2024'
    },
    {
        id: 'dFIz_n5hfqs',
        thumbnail: `https://img.youtube.com/vi/dFIz_n5hfqs/maxresdefault.jpg`,
        title : 'OPTION TRADING SE 01 LAC PROFIT By TRADING VIEW PROFITABLE INDICATOR'
    },
    {
        id: '91B6flgF9qQ',
        thumbnail: `https://img.youtube.com/vi/91B6flgF9qQ/maxresdefault.jpg`,
        title : 'OPTION TRADING SE 01 LAC PROFIT USING TRADING VIEW BEST PROFITABLE INDICATOR'
    },

]


</script>