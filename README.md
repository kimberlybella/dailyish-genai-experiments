# Daily(ish) GenAI Experiments

A modern, elegant website for documenting real-world AI tool experiments. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Elegant Design**: Clean, minimalist aesthetic matching your Canva design with dark/light contrast
- **Blog System**: Markdown-based blog with frontmatter for easy content management
- **Category Filtering**: Organize experiments by category (Tool Comparison, Creative Tools, etc.)
- **Newsletter Integration**: Email signup form (ready to connect to your service)
- **Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Built-in Next.js SEO features
- **Easy Content Management**: Just add markdown files to the `posts/` folder

## Getting Started

### Prerequisites

You'll need Node.js installed on your computer. If you don't have it:

1. Download from [nodejs.org](https://nodejs.org/) (get the LTS version)
2. Install and verify by running `node --version` in your terminal

### Installation

1. **Navigate to the project folder**:
   ```bash
   cd dailyish-genai-experiments
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and go to `http://localhost:3000`

## Adding Blog Posts

1. Create a new `.md` file in the `posts/` folder
2. Add frontmatter at the top (see example below)
3. Write your content in Markdown
4. Save the file - it will automatically appear on your site!

### Example Blog Post Format

```markdown
---
title: "Your Experiment Title"
date: "2025-01-15"
category: "Tool Comparison"
excerpt: "A brief description of your experiment that appears in the listing."
image: "/images/your-image.jpg"
tags: ["ChatGPT", "Productivity", "Writing"]
---

## Your Heading

Your content here...
```

### Available Categories

- Document & Data Processing
- Creative & Visual Tools
- Research & Information Gathering
- Education & Learning
- Personal & Family Tasks
- Tool Comparison
- Safety & Limitations

## Customization

### Updating Your Photo

1. Add your photo to `public/images/`
2. Update the About component in `components/About.tsx`

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  dark: "#1a1a1a",  // Change the dark background
  light: "#f5f5f0", // Change the light background
}
```

### Newsletter Integration

The newsletter form is in `components/Newsletter.tsx`. To connect it to your email service:

1. Choose a service (Mailchimp, ConvertKit, Buttondown, etc.)
2. Add your API endpoint in the `handleSubmit` function
3. Update the form to send data to your service

Example for Mailchimp:
```typescript
const response = await fetch('/api/subscribe', {
  method: 'POST',
  body: JSON.stringify({ email }),
});
```

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Option 3: Your Current Hosting

You can export as static files:

1. Update `next.config.mjs`:
   ```javascript
   const nextConfig = {
     output: 'export',
   };
   ```
2. Run `npm run build`
3. Upload the `out/` folder to your host

## Project Structure

```
dailyish-genai-experiments/
├── app/                    # Next.js app directory
│   ├── experiments/        # Blog listing and individual posts
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
├── lib/                   # Utility functions (blog posts handling)
├── posts/                 # Your blog posts (markdown files)
├── public/                # Static files (images, etc.)
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Support

Questions? Issues?

- Check the [Next.js documentation](https://nextjs.org/docs)
- Email: hello@dailyishgenaiexperiments.com

## License

This project is private and owned by Daily(ish) GenAI Experiments.
