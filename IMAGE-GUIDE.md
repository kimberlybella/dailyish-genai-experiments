# Adding Cover Images to Your Blog Posts

## ✅ Your Blog Posts Are Ready!

I've created 39 blog posts from your Google Sheet. Now you just need to add cover images!

## Where to Put Images

Add your cover images to this folder:
```
public/images/posts/
```

## Image Naming

Name each image to match the blog post slug. For example:

| Blog Post Title | Image Filename |
|----------------|----------------|
| Claude Projects - The Foundation of Thought Partnership | `claude-projects-foundation-thought-partnership.jpg` |
| Gemini & ChatGPT - The Power of Comparison | `gemini-chatgpt-the-power-of-comparison.jpg` |
| Planning a K-Pop Demon Hunter Birthday Party | `planning-a-k-pop-demon-hunter-iykyk-birthday-party-with-claude.jpg` |

## Finding Your Post Slugs

To see all your post filenames (which match the image names needed):

```bash
ls posts/
```

Or check the `posts/` folder directly!

## Image Specifications

- **Format**: JPG or PNG
- **Size**: Recommended 1200x630px (works great for social sharing too)
- **Quality**: High quality, but keep under 500KB for fast loading

## Quick Steps

1. **Save your images** to `public/images/posts/`
2. **Name them** to match the post slug (without the `.md`)
3. **Push to GitHub** - that's it!

## Example

If you have a post file named:
```
posts/claude-projects-foundation-thought-partnership.md
```

Your image should be:
```
public/images/posts/claude-projects-foundation-thought-partnership.jpg
```

## Don't Have Images Yet?

No problem! The site will work fine without them. The image placeholders won't show broken images - they just won't display until you add them.

You can add images gradually over time. Just:
1. Drop the image in `public/images/posts/`
2. Push to GitHub
3. Image appears on your site automatically!

## Need to Add More Posts Later?

Just create a new `.md` file in the `posts/` folder following the format, or run the import script again with updated CSV data.
