---
type: h-entry
title: Second post
tags:
  - tech
date: '2023-06-14T00:32:47.234Z'
client_id: 'https://sparkles.sploot.com/'
---
Super awesome blog post with markdown content.

```astro
---
import { getCollection } from 'astro:content'

const notes = await getCollection('notes')
---

<ul>
  {notes.map((note) => (
    <li>
      <a href={`/notes/${note.slug}`}>{note.body}</a>
    </li>
  )}
</ul>
```
