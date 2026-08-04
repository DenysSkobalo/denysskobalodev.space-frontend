<script lang="ts">
    import { onMount } from 'svelte';
    import type { TechItem } from '../i18n/stackUi';

    export let items: TechItem[] = [];
    export let currentLang: string = 'en';

    let container: HTMLDivElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let autoScrollInterval: any;

    // Автоматична прокрутка
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            if (!isDown && container) {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1;
                }
            }
        }, 20);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
    }

    // Ручне керування кнопками
    function scroll(direction: 'left' | 'right') {
        if (!container) return;
        const amount = 300;
        container.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth'
        });
    }

    // Drag-to-scroll логіка
    function handleMouseDown(e: MouseEvent) {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    }

    function handleMouseLeave() {
        isDown = false;
    }

    function handleMouseUp() {
        isDown = false;
    }

    function handleMouseMove(e: MouseEvent) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Швидкість перетягування
        container.scrollLeft = scrollLeft - walk;
    }

    onMount(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    });
</script>

<div class="space-y-3">
    <!-- Верхня панель з кнопками керування -->
    <div class="flex items-center justify-between">
    <span class="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      Interactive Tech Stream
    </span>

        <div class="flex items-center gap-2">
      <span class="text-[11px] font-mono text-zinc-500 hidden sm:inline mr-2">
        Drag to scroll or use arrows
      </span>
            <button
                    on:click={() => scroll('left')}
                    aria-label="Scroll left"
                    class="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
                    on:click={() => scroll('right')}
                    aria-label="Scroll right"
                    class="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
            >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
    </div>

    <!-- Трек каруселі (Drag & Drop) -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
            bind:this={container}
            on:mouseenter={stopAutoScroll}
            on:mouseleave={() => { handleMouseLeave(); startAutoScroll(); }}
            on:mousedown={handleMouseDown}
            on:mouseup={handleMouseUp}
            on:mousemove={handleMouseMove}
            class="glow-card p-4 overflow-x-auto no-scrollbar flex items-center gap-4 cursor-grab active:cursor-grabbing select-none scroll-smooth"
            style="scrollbar-width: none; -ms-overflow-style: none;"
    >
        {#each items as tech}
            <a
                    href={`/${currentLang}/stack/${tech.slug}`}
                    class="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/60 hover:border-emerald-500/50 hover:scale-105 transition-all duration-200 shrink-0"
            >
                <span class="text-2xl">{tech.icon}</span>
                <div class="text-left">
                    <div class="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors">
                        {tech.name}
                    </div>
                    <div class="text-[10px] font-mono text-zinc-500">
                        {tech.level} • {tech.experienceYears}y exp
                    </div>
                </div>

                <!-- Tooltip -->
                <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-zinc-900 text-zinc-100 text-[11px] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 pointer-events-none border border-zinc-700 font-sans">
                    <div class="font-bold text-emerald-400 mb-0.5">{tech.name}</div>
                    <p class="text-[10px] text-zinc-300 leading-tight">{tech.shortDesc}</p>
                </div>
            </a>
        {/each}
    </div>
</div>