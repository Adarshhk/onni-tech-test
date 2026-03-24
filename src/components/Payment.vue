<template>
    <section class="w-full">

        <!-- Top Blue Header Band -->
        <div class="payment-header bg-[#4984C4] w-full px-8 md:px-16 lg:px-24 py-44">
            <h1 class="text-white font-bold text-3xl md:text-4xl lg:text-6xl leading-tight max-w-3xl">
                Secure & Seamless Payments for Your Algo Trading Journey
            </h1>
        </div>

        <!-- Bottom Dark Section -->
        <div class="bg-[#0d0f12] w-full px-4 md:px-10 lg:px-20 py-20 flex items-center justify-center">

            <!-- Payment Card — wide, spacious, matches screenshot -->
            <div class="payment-card w-full max-w-5xl rounded-2xl border border-[#2a4a7a] p-8 md:p-12" style="background: linear-gradient(135deg, #0f1e35 0%, #111f38 60%, #0d1a2e 100%);
               box-shadow: 0 0 0 1px rgba(73,132,196,0.3), 0 24px 60px rgba(0,0,0,0.5);">
                <div class="flex flex-col sm:flex-row gap-10 md:gap-16 items-start">

                    <!-- Left: QR Code -->
                    <div class="flex flex-col items-start gap-4 shrink-0">
                        <div
                            class="rounded-2xl border-[3px] border-[#4984C4] p-3 bg-white shadow-lg shadow-[#4984c4]/20">
                            <img src="/src/assets/img/qr.jpeg" alt="UPI QR Code"
                                class="w-48 h-48 md:w-64 md:h-64 object-contain" />
                        </div>
                        <div class="mt-1">
                            <p class="text-[#6b7fa3] text-sm mb-1 font-medium">UPI ID:</p>
                            <p class="text-white text-base font-semibold">yogesh.kshirsagar20002@okhdfcbank</p>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="hidden sm:block w-px self-stretch bg-[#1e3a5f] mx-4"></div>
                    <div class="block sm:hidden w-full h-px bg-[#1e3a5f]"></div>

                    <!-- Right: Bank Details -->
                    <div class="flex flex-col gap-8 justify-center flex-1 py-2">

                        <div class="detail-row" data-delay="0">
                            <p class="text-[#6b7fa3] text-sm mb-2 font-medium">Bank name</p>
                            <p class="text-white text-xl md:text-2xl font-bold">Union Bank of India</p>
                        </div>

                        <div class="detail-row" data-delay="100">
                            <p class="text-[#6b7fa3] text-sm mb-2 font-medium">Account name</p>
                            <p class="text-white text-xl md:text-2xl font-bold tracking-wide">YOGESH RAMESH KSHIRSAGAR
                            </p>
                        </div>

                        <div class="detail-row" data-delay="200">
                            <p class="text-[#6b7fa3] text-sm mb-2 font-medium">Account Number</p>
                            <p class="text-white text-xl md:text-2xl font-bold tracking-widest">696902010000818</p>
                        </div>

                        <div class="detail-row" data-delay="300">
                            <p class="text-[#6b7fa3] text-sm mb-2 font-medium">IFSC Code</p>
                            <p class="text-white text-xl md:text-2xl font-bold tracking-widest">UBINO569691</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

let observer = null;

const initObserver = () => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = Number(el.dataset.delay || 0);
                    setTimeout(() => el.classList.add('in-view'), delay);
                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.payment-header, .payment-card, .detail-row').forEach((el) =>
        observer.observe(el)
    );
};

onMounted(() => initObserver());
onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.payment-header {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.payment-header.in-view {
    opacity: 1;
    transform: translateX(0);
}

.payment-card {
    opacity: 0;
    transform: translateY(48px) scale(0.97);
    transition: opacity 0.75s ease 0.2s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.payment-card.in-view {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.detail-row {
    opacity: 0;
    transform: translateX(24px);
    transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.detail-row.in-view {
    opacity: 1;
    transform: translateX(0);
}
</style>