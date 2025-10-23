# OpenSourceWiki

A comprehensive, downloadable library of open source tools for every software need. OpenSourceWiki is a free, self-contained website that catalogs open source software across multiple categories, making it easy to discover and explore powerful free tools.

## Features

- **35+ Open Source Tools** curated across 10 categories
- **Easy Search** - Find tools by name, description, tags, or category
- **Category Filtering** - Browse tools by Development, Design, DevOps, Security, and more
- **Fully Downloadable** - Clone or download the entire wiki for offline use
- **Zero Dependencies** - Pure HTML, CSS, and JavaScript - no build process required
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Fast & Lightweight** - Static files that load instantly

## Categories

- **Development** - IDEs, frameworks, programming languages, and development tools
- **Design** - Graphics editors, vector tools, 3D modeling software
- **Productivity** - Office suites, note-taking apps, cloud storage
- **Security** - Password managers, network analysis, encryption tools
- **DevOps** - Containers, orchestration, CI/CD, monitoring
- **Database** - SQL, NoSQL, in-memory databases
- **Content Management** - CMS platforms and website builders
- **Communication** - Messaging, chat, and collaboration platforms
- **Media** - Video players, audio editors, streaming software
- **System Tools** - Operating systems and system utilities

## Quick Start

### Online Access

1. Open `index.html` in any modern web browser
2. Browse, search, and filter through the tools
3. Click "Visit Project" to go directly to each tool's website or repository

### Download for Offline Use

```bash
# Clone the repository
git clone https://github.com/thecontentstudios/OpenSourceWiki.git

# Navigate to the directory
cd OpenSourceWiki

# Open index.html in your browser
# On macOS:
open index.html

# On Linux:
xdg-open index.html

# On Windows:
start index.html
```

The entire wiki works offline - no internet connection required after downloading!

## Project Structure

```
OpenSourceWiki/
├── index.html          # Main HTML page
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── app.js         # Application logic
├── data/
│   └── tools.json     # Tools database
├── assets/            # Images and icons (future use)
└── README.md          # This file
```

## Adding New Tools

To add a new tool to the wiki:

1. Open `data/tools.json`
2. Add a new entry to the `tools` array:

```json
{
  "id": 36,
  "name": "Tool Name",
  "description": "Brief description of what the tool does.",
  "url": "https://github.com/example/tool",
  "category": "Category Name",
  "license": "License Type",
  "tags": ["tag1", "tag2", "tag3"]
}
```

3. If adding a new category, add it to the `categories` array
4. Save the file and refresh the page

## Adding New Categories

To add a new category:

1. Open `data/tools.json`
2. Add the category name to the `categories` array
3. Save and refresh

## How to Use

### Search

Type in the search box to find tools by:
- Tool name
- Description keywords
- Tags
- Category

### Filter by Category

Click any category button to see only tools in that category. Click "All" to see all tools.

### Visit Projects

Each tool card has a "Visit Project" button that opens the tool's official website or repository in a new tab.

## Contributing

Contributions are welcome! Here's how you can help:

1. **Add Tools**: Submit tools you find valuable
2. **Improve Descriptions**: Make tool descriptions more clear and helpful
3. **Add Categories**: Suggest new categories for better organization
4. **Fix Bugs**: Report or fix any issues you find
5. **Enhance Features**: Suggest or implement new features

### Contribution Guidelines

- Ensure tools are genuinely open source
- Include accurate license information
- Write clear, concise descriptions
- Add relevant tags for searchability
- Test your changes before submitting

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Functionality and interactivity
- **JSON** - Data storage

No frameworks, no build tools, no dependencies - just pure web technologies!

## Browser Support

OpenSourceWiki works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## License

This project is free and open source. Feel free to use, modify, and distribute it.

## Roadmap

Future enhancements planned:
- [ ] Export functionality to save custom lists
- [ ] Bookmark/favorite tools
- [ ] Sort by popularity or alphabetically
- [ ] Dark mode toggle
- [ ] Tool comparison feature
- [ ] Community ratings and reviews
- [ ] RSS feed for new additions
- [ ] API for programmatic access

## Support

If you find OpenSourceWiki useful, please:
- Star the repository
- Share it with others
- Contribute new tools
- Report issues or suggest improvements

## Acknowledgments

Thanks to all the amazing open source projects featured in this wiki, and to the developers who make their tools freely available to the community.

---

**OpenSourceWiki** - Your gateway to the world of open source software
