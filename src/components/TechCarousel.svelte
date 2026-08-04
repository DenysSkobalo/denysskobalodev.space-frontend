<script lang="ts">
    import { onMount } from 'svelte';
    import type { TechItem } from '@/i18n/stackUi';

    export let items: TechItem[] = [];
    export let currentLang: string = 'en';
    export let streamTitle: string = 'Interactive Tech Stream';
    export let scrollHint: string = 'Drag or swipe to scroll';

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
            {streamTitle}
        </span>
        <div class="flex items-center gap-2">
            <span class="text-[11px] font-mono text-zinc-500">
                {scrollHint}
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
                    href={`/${currentLang}/stack?tech=${tech.slug}`}
                    on:click={handleCardClick}
                    class="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/60 hover:border-emerald-500/50 hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer"
            >
                <div class="w-9 h-9 p-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <img src={tech.iconSvgUrl} alt={tech.name} class="w-full h-full object-contain" />
                </div>
                <div class="space-y-0.5">
                    <h4 class="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors whitespace-nowrap">
                        {tech.name}
                    </h4>
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-mono text-zinc-500">{tech.level}</span>
                    </div>
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