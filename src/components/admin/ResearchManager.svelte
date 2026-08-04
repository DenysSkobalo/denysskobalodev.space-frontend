<script lang="ts">
    import type { ResearchItem } from '@/i18n/researchUi';
    import { MOCK_RESEARCH_ITEMS } from '@/i18n/researchUi';

    export let initialItems: ResearchItem[] = MOCK_RESEARCH_ITEMS;

    let items = initialItems;
    let isEditing = false;
    let currentItem: Partial<ResearchItem> = createEmptyItem();
    let tagsInput = '';

    function createEmptyItem(): Partial<ResearchItem> {
        return {
            slug: '',
            title: '',
            summary: '',
            category: 'Distributed Systems',
            date: new Date().toISOString().split('T')[0],
            readTime: '5 min read',
            tags: [],
        };
    }

    function openNew() {
        currentItem = createEmptyItem();
        tagsInput = '';
        isEditing = true;
    }

    function editItem(item: ResearchItem) {
        currentItem = { ...item };
        tagsInput = item.tags.join(', ');
        isEditing = true;
    }

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        currentItem.tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

        const index = items.findIndex(i => i.slug === currentItem.slug);
        if (index >= 0) {
            items[index] = currentItem as ResearchItem;
        } else {
            if (!currentItem.slug) {
                currentItem.slug = currentItem.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'paper-' + Date.now();
            }
            items = [currentItem as ResearchItem, ...items];
        }

        isEditing = false;
    }

    function deleteItem(slug: string) {
        if (confirm('Are you sure you want to delete this research paper?')) {
            items = items.filter(i => i.slug !== slug);
        }
    }
</script>

<div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">Research Papers & RFCs</h2>
        {#if !isEditing}
            <button on:click={openNew} class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs hover:bg-amber-400 transition cursor-pointer text-center">
                + Write New Paper
            </button>
        {/if}
    </div>

    {#if isEditing}
        <form on:submit={handleSubmit} class="glow-card p-4 sm:p-6 space-y-4 max-w-3xl">
            <h3 class="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                {currentItem.slug ? 'Edit Research Paper' : 'New Research Paper / RFC'}
            </h3>

            <div>
                <label for="paper-title" class="block text-xs font-mono text-zinc-400 mb-1">Paper Title</label>
                <input id="paper-title" bind:value={currentItem.title} required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-amber-500" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                    <label for="paper-category" class="block text-xs font-mono text-zinc-400 mb-1">Category</label>
                    <select id="paper-category" bind:value={currentItem.category} class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-amber-500">
                        <option value="Distributed Systems">Distributed Systems</option>
                        <option value="Performance">Performance</option>
                        <option value="RFC / Blueprint">RFC / Blueprint</option>
                    </select>
                </div>

                <div>
                    <label for="paper-date" class="block text-xs font-mono text-zinc-400 mb-1">Date Published</label>
                    <input id="paper-date" type="date" bind:value={currentItem.date} required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-amber-500" />
                </div>

                <div>
                    <label for="paper-read-time" class="block text-xs font-mono text-zinc-400 mb-1">Estimated Read Time</label>
                    <input id="paper-read-time" bind:value={currentItem.readTime} placeholder="8 min read" required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-amber-500" />
                </div>
            </div>

            <div>
                <label for="paper-summary" class="block text-xs font-mono text-zinc-400 mb-1">Summary / Abstract</label>
                <textarea id="paper-summary" bind:value={currentItem.summary} rows="3" required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-amber-500" placeholder="Brief explanation of the research problem and findings..."></textarea>
            </div>

            <div>
                <label for="paper-tags" class="block text-xs font-mono text-zinc-400 mb-1">Tags (comma separated)</label>
                <input id="paper-tags" bind:value={tagsInput} placeholder="Go, Raft, Consensus, Architecture" class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-amber-500" />
            </div>

            <div class="flex items-center justify-end gap-2 sm:gap-3 pt-2">
                <button type="button" on:click={() => isEditing = false} class="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-bold cursor-pointer">
                    Cancel
                </button>
                <button type="submit" class="px-4 py-2 rounded-lg bg-amber-500 text-zinc-950 text-xs font-bold hover:bg-amber-400 cursor-pointer">
                    Publish Paper
                </button>
            </div>
        </form>
    {:else}
        <div class="glow-card overflow-hidden">
            <div class="divide-y divide-zinc-200 dark:divide-zinc-800">
                {#each items as item}
                    <div class="p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-500">
                                    {item.category}
                                </span>
                                <span class="text-[11px] font-mono text-zinc-500">{item.date} • {item.readTime}</span>
                            </div>
                            <h4 class="text-sm font-bold text-zinc-900 dark:text-white">{item.title}</h4>
                            <p class="text-xs text-zinc-500 line-clamp-2 sm:line-clamp-1">{item.summary}</p>
                        </div>

                        <div class="flex items-center gap-2 shrink-0 self-end sm:self-start pt-1 sm:pt-0">
                            <button on:click={() => editItem(item)} class="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:border-zinc-400 cursor-pointer">
                                Edit
                            </button>
                            <button on:click={() => deleteItem(item.slug)} class="px-3 py-1.5 rounded-lg border border-rose-500/30 text-rose-500 text-xs font-semibold hover:bg-rose-500/10 cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>