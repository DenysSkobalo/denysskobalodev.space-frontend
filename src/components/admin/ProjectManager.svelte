<script lang="ts">
    import type { ProjectItem } from '@/i18n/projectsUi';
    import { MOCK_PROJECTS } from '@/i18n/projectsUi';
    import { slugify } from '@/utils/slugify';

    export let initialProjects: ProjectItem[] = MOCK_PROJECTS;

    let projects = initialProjects;
    let isEditing = false;
    let currentProject: Partial<ProjectItem> = createEmptyProject();
    let stackInput = '';

    function createEmptyProject(): Partial<ProjectItem> {
        return {
            slug: '',
            title: '',
            icon: '⚡',
            tagline: '',
            description: '',
            category: 'SaaS',
            status: 'Live SaaS',
            stack: [],
            demoUrl: '',
            githubUrl: '',
        };
    }

    function openNew() {
        currentProject = createEmptyProject();
        stackInput = '';
        isEditing = true;
    }

    function editProject(p: ProjectItem) {
        currentProject = { ...p };
        stackInput = p.stack.join(', ');
        isEditing = true;
    }

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        currentProject.stack = stackInput.split(',').map(s => s.trim()).filter(Boolean);

        const index = projects.findIndex(p => p.slug === currentProject.slug);
        if (index >= 0) {
            projects[index] = currentProject as ProjectItem;
        } else {
            if (!currentProject.slug) {
                currentProject.slug = slugify(currentProject.title || '', 'project');
            }
            projects = [currentProject as ProjectItem, ...projects];
        }

        isEditing = false;
    }

    function deleteProject(slug: string) {
        if (confirm('Are you sure you want to delete this project?')) {
            projects = projects.filter(p => p.slug !== slug);
        }
    }
</script>

<div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">Project List</h2>
        {#if !isEditing}
            <button on:click={openNew} class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition cursor-pointer text-center">
                + Add New Project
            </button>
        {/if}
    </div>

    {#if isEditing}
        <form on:submit={handleSubmit} class="glow-card p-4 sm:p-6 space-y-4 max-w-2xl">
            <h3 class="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                {currentProject.slug ? 'Edit Project' : 'New Project'}
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <label for="project-title" class="block text-xs font-mono text-zinc-400 mb-1">Title</label>
                    <input id="project-title" bind:value={currentProject.title} required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                    <label for="project-icon" class="block text-xs font-mono text-zinc-400 mb-1">Icon (Emoji)</label>
                    <input id="project-icon" bind:value={currentProject.icon} required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-emerald-500" />
                </div>
            </div>

            <div>
                <label for="project-tagline" class="block text-xs font-mono text-zinc-400 mb-1">Tagline</label>
                <input id="project-tagline" bind:value={currentProject.tagline} required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-emerald-500" />
            </div>

            <div>
                <label for="project-desc" class="block text-xs font-mono text-zinc-400 mb-1">Description</label>
                <textarea id="project-desc" bind:value={currentProject.description} rows="3" required class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-emerald-500"></textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <label for="project-status" class="block text-xs font-mono text-zinc-400 mb-1">Status</label>
                    <select id="project-status" bind:value={currentProject.status} class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-emerald-500">
                        <option value="Live SaaS">Live SaaS</option>
                        <option value="Open Source">Open Source</option>
                        <option value="In Development">In Development</option>
                    </select>
                </div>
                <div>
                    <label for="project-stack" class="block text-xs font-mono text-zinc-400 mb-1">Stack (comma separated)</label>
                    <input id="project-stack" bind:value={stackInput} placeholder="Go, Redis, Docker" class="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs focus:outline-none focus:border-emerald-500" />
                </div>
            </div>

            <div class="flex items-center justify-end gap-2 sm:gap-3 pt-2">
                <button type="button" on:click={() => isEditing = false} class="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-bold cursor-pointer">
                    Cancel
                </button>
                <button type="submit" class="px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 text-xs font-bold hover:bg-emerald-400 cursor-pointer">
                    Save Changes
                </button>
            </div>
        </form>
    {:else}
        <div class="glow-card overflow-hidden">
            <div class="divide-y divide-zinc-200 dark:divide-zinc-800">
                {#each projects as item}
                    <div class="p-4 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <span class="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                            <div>
                                <h4 class="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white leading-tight">{item.title}</h4>
                                <span class="text-[10px] font-mono text-emerald-500">{item.status}</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 shrink-0">
                            <button on:click={() => editProject(item)} class="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:border-zinc-400 cursor-pointer">
                                Edit
                            </button>
                            <button on:click={() => deleteProject(item.slug)} class="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border border-rose-500/30 text-rose-500 text-xs font-semibold hover:bg-rose-500/10 cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>