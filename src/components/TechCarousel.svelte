<script lang="ts">
    import { onMount } from 'svelte';
    import type { TechItem } from '@/i18n/stackUi';

    export let items: TechItem[] = [];
    export let currentLang: string = 'en';

    let container: HTMLDivElement;
    let isMouseDown = false;
    let startX: number;
    let scrollLeft: number;
    let isDragging = false;
    let autoScrollInterval: ReturnType<typeof setInterval> | null = null;

    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            if (!isMouseDown && container) {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1;
                }
            }
        }, 25);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
    }

    function handleMouseDown(e: MouseEvent) {
        isMouseDown = true;
        isDragging = false;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        stopAutoScroll();
    }

    function handleMouseLeave() {
        isMouseDown = false;
        isDragging = false;
        startAutoScroll();
    }

    function handleMouseUp() {
        isMouseDown = false;
        setTimeout(() => {
            isDragging = false;
        }, 50);
        startAutoScroll();
    }

    function handleMouseMove(e: MouseEvent) {
        if (!isMouseDown) return;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.8;

        if (Math.abs(walk) > 5) {
            isDragging = true;
            e.preventDefault();
            container.scrollLeft = scrollLeft - walk;
        }
    }

    function handleCardClick(e: MouseEvent) {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    onMount(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    });
</script>

<div class="space-y-3">
    <div class="flex items-center justify-between">
        <span class="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Interactive Tech Stream
        </span>
        <div class="flex items-center gap-2">
            <span class="text-[11px] font-mono text-zinc-500">
                Drag or swipe to scroll
            </span>
        </div>
    </div>

    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
            bind:this={container}
            role="region"
            aria-label="Interactive Tech Stream Carousel"
            on:mouseenter={stopAutoScroll}
            on:mouseleave={handleMouseLeave}
            on:mousedown={handleMouseDown}
            on:mouseup={handleMouseUp}
            on:mousemove={handleMouseMove}
            on:touchstart={stopAutoScroll}
            on:touchend={startAutoScroll}
            class="glow-card p-4 overflow-x-auto flex items-center gap-4 cursor-grab active:cursor-grabbing select-none scrollbar-none touch-pan-x"
            style="-webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none;"
    >
        {#each items as tech}
            <a
                    href={`/${currentLang}/stack/${tech.slug}`}
                    on:click={handleCardClick}
                    class="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/60 hover:border-emerald-500/50 hover:scale-105 transition-all duration-200 shrink-0"
            >
                <span class="text-2xl">{tech.icon}</span>
                <div class="space-y-0.5">
                    <h4 class="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors whitespace-nowrap">
                        {tech.name}
                    </h4>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-mono text-zinc-500">{tech.level}</span>
                    </div>
                </div>

                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-zinc-900 text-zinc-100 text-[11px] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 pointer-events-none border border-zinc-700 font-sans">
                    <div class="font-bold text-emerald-400 mb-0.5">{tech.name}</div>
                    <p class="text-[10px] text-zinc-300 leading-tight">{tech.shortDesc}</p>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    .scrollbar-none::-webkit-scrollbar {
        display: none;
    }
</style>