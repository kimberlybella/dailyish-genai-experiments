# 🍊 Juicy Word Finder

An interactive web app that helps second graders find more exciting and descriptive words for their writing!

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Your API Key

Get your Anthropic API key from [console.anthropic.com](https://console.anthropic.com/)

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your key:

```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📦 Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Method 2: Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Juicy Word Finder"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click **Add New** → **Project**
   - Import your GitHub repository

3. **Add Environment Variable:**
   - In Vercel project settings → **Environment Variables**
   - Add `ANTHROPIC_API_KEY` = `your_key_here`
   - Click **Deploy**

## 🎮 How to Use

1. Type any word (like "happy", "big", "sad")
2. Click the sparkle button or press Enter
3. Get a "juicy" (more descriptive) alternative!
4. Click the speaker icon to hear how to say it
5. Click refresh for another suggestion

## 🏗️ Project Structure

```
juicy-word-finder/
├── app/
│   ├── api/
│   │   └── suggest/
│   │       └── route.ts       # API endpoint (calls Anthropic)
│   ├── page.tsx               # Main game component
│   ├── layout.tsx             # App layout
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── .env.local                 # Your API key (don't commit!)
├── .env.local.example         # Template for environment variables
└── package.json               # Dependencies
```

## 🔒 Security

- ✅ API key stored securely on the server
- ✅ Never exposed to the browser
- ✅ Serverless function handles all AI requests

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Claude API** - AI-powered word suggestions

## 📝 License

MIT - Feel free to use this for educational purposes!
