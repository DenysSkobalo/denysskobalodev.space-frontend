export function slugify(text: string, prefix = 'item'): string {
    const slug = text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
    return slug || `${prefix}-${Date.now()}`;
}