# Weather-wise

A modern, responsive weather application built with React and Vite. Get real-time weather information for any location with an intuitive search interface.

live preview: https://weather-check-pearl.vercel.app/

## Features

- 🔍 **Location Search** - Easily search for weather in any city worldwide
- 🌡️ **Real-time Weather Data** - Current temperature, conditions, and forecast details
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎨 **Clean UI** - Modern, user-friendly interface with weather cards displaying detailed information

## Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 7.2
- **HTTP Client**: Axios 1.13
- **Styling**: CSS3
- **Linting**: ESLint 9.39

## Project Structure

```
Weather-wise/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # App header component
│   │   ├── Search.jsx       # Search bar for location input
│   │   ├── WeatherCard.jsx  # Displays weather information
│   │   └── Footer.jsx       # App footer
│   ├── App.jsx              # Main app component
│   ├── App.css              # Application styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── assets/              # Images and static files
├── public/                  # Public static files
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
└── eslint.config.js        # ESLint rules configuration
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Weather-wise.git
cd Weather-wise
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building

Create an optimized production build:

```bash
npm run build
```

Output is generated in the `build/` directory.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Vite and builds to the `build/` directory
4. Your app is live!

## Environment Variables

Create a `.env` file in the root directory if you need to configure API endpoints:

```
VITE_API_URL=your_weather_api_url
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is open source and available under the MIT License.

---

**Made with ❤️ using React + Vite**
