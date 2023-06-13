import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const baseSchema = z.object({
    category: z.array(z.string()).optional()
})

export function noteSchema() {
    return baseSchema.extend({
        'in-reply-to': z.string().url().optional()
    })
}

export function articleSchema() {
    return baseSchema.extend({
        name: z.string()
    })
}

export function bookmarkSchema() {
    return baseSchema.extend({
        'bookmark-of': z.string().url()
    })
}

export function rsvpSchema() {
    return baseSchema.extend({
        'in-reply-to': z.string().url(),
        rsvp: z.enum([
            'yes',
            'no',
            'maybe',
            'interested'
        ])
    })
}

export function likeSchema() {
    return baseSchema.extend({
        'like-of': z.string().url()
    })
}

export function watchSchema() {
    return baseSchema.extend({
        'watch-of': z.string().url()
    })
}

export const collections = {
    articles: defineCollection({
        schema: articleSchema()
    }),
    bookmarks: defineCollection({
        schema: bookmarkSchema()
    }),
    likes: defineCollection({
        schema: likeSchema()
    }),
    notes: defineCollection({
        schema: noteSchema()
    }),
    rsvp: defineCollection({
        schema: rsvpSchema()
    }),
    watched: defineCollection({
        schema: watchSchema()
    })
}