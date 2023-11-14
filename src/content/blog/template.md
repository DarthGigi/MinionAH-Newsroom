---
isPublic: false # boolean, required. If false, the post will not be published
title: "My first post" # string, required. The title of the post, don't use it again in the content
description: "This is my first post" # string, required. The description of the post, don't use it again in the content
type: "post" # string. The type of the post, can be "post" or "announcement" or whatever you like.
pubDate: "Feb 19 2023" # string, required. The date of the post, will be used to sort the posts. In the format "MMM DD YYYY".
heroImage: "/assets/images/newsroom/placeholder-hero.jpg" # string, optional. The path to the hero image of the post. If not provided, the default hero image will be used. The image should be most preferably 1920x1080px and 16/9 aspect ratio. Put the image you want in the public/assets/images/newsroom/ folder and to link it, use /assets/images/newsroom/image-name.jpg.
---

Now write your post in markdown here. You can use styling like **bold** or _italic_ or ~~strikethrough~~. You can also use [links](https://www.apple.com) or images ![image](/placeholder-hero.jpg).

Code blocks are also supported:

```lua
local function hello()
    print("Hello world!")
end
```

You can also use HTML tags like `<div>` or `<span>` or `<img>`.

# Headings

Blockquotes are also supported:

> This is a blockquote. You can use it to quote someone or something.

You can also use tables:

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

And you can also use lists:

- List item 1
- List item 2
- List item 3

1. List item 1
2. List item 2
3. List item 3

You can also use horizontal rules:

---

Bascially, you can use any markdown syntax you want. If you want to learn more about markdown, you can read the [Markdown Guide](https://www.markdownguide.org/).
