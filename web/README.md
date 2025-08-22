# Plantich - The Sacred Alchemy of Plants

A Nordic luxury herbal apothecary platform that bridges ancient plant wisdom with modern understanding. Discover the sacred alchemy of plants through curated knowledge and premium botanical wisdom.

## 🌿 About

Plantich serves as a modern apothecary—a curated space where ancient knowledge meets contemporary understanding, where every remedy tells a story of tradition, science, and the profound connection between humans and the natural world.

### Features

- **Comprehensive Plant Database**: 50+ medicinal plants and fungi with detailed profiles
- **Natural Remedies**: 50+ common health conditions with herbal solutions
- **Advanced Search**: Filter by category (Mind, Body, Spirit) and type
- **SEO Optimized**: Structured data, sitemaps, and Open Graph images
- **Responsive Design**: Beautiful Nordic-inspired interface
- **Type Safety**: Full TypeScript implementation

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lovebym/plantich.git
cd plantich/web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── plant/[slug]/   # Individual plant pages
│   │   ├── condition/[slug]/ # Individual remedy pages
│   │   └── ...
│   ├── components/         # Reusable React components
│   └── content/           # Local content management
│       ├── plants/        # Plant data files
│       ├── remedies/      # Remedy data files
│       └── types.ts       # TypeScript interfaces
├── public/                # Static assets
└── ...
```

## 🎨 Design System

### Colors
- **Background**: `#fefcf9` - Main background
- **Ink**: `#1A1A1A` - Primary text
- **Sand**: `#EDE8E1` - Section backgrounds
- **Clay**: `#D7C6B3` - Alternative background
- **Herbal**: `#839378` - Plant green accents
- **Gold**: `#B89B5E` - Links and highlights

### Typography
- **Serif**: Cormorant Garamond - Headings
- **Sans**: Inter - Body text

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts

## 📊 Content Management

The platform uses a local content management system with TypeScript files:

### Adding a New Plant

1. Create a new file in `src/content/plants/[plant-name].ts`
2. Follow the `Plant` interface structure
3. Import and export in `src/content/index.ts`

### Adding a New Remedy

1. Create a new file in `src/content/remedies/[condition-name].ts`
2. Follow the `Remedy` interface structure
3. Import and export in `src/content/index.ts`

## 🌐 SEO & Performance

- **Structured Data**: JSON-LD for plants and remedies
- **Sitemap**: Automatic generation with all content routes
- **Open Graph**: Dynamic image generation for social sharing
- **Meta Tags**: Comprehensive SEO optimization
- **Performance**: Optimized builds and lazy loading

## 🏗️ Architecture

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Local TypeScript files
- **Deployment**: Vercel-ready

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Website**: [plantich.com](https://plantich.com)
- **Email**: hello@plantich.com

## 🙏 Acknowledgments

- Traditional herbal wisdom from cultures worldwide
- Modern scientific research on medicinal plants
- The natural world and its healing gifts

---

*"Ancient wisdom, modern clarity"* - Plantich
