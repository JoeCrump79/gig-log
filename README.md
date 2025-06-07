# Gig Log

A simple React application for logging and browsing concerts you've attended. Add new shows, view past events, and keep track of live music memories — all from a clean single-page interface.

## Features

- View a list of concerts pulled from a mock REST API (json-server)
- Add new shows using a controlled form
- Navigate between pages using React Router (Home, Show List, Add Show)
- Dynamic state updates after POST requests
- Minimal clean CSS styling

## Technologies Used

- React (CRA)
- React Router
- json-server
- JavaScript (ES6+)
- Custom CSS

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/JoeCrump79/gig-log.git
   cd gig-log
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the JSON backend:
   ```bash
   npx json-server --watch db.json --port 6001
   ```

4. Run the React app:
   ```bash
   npm start
   ```

   The app will be available at http://localhost:3000

## Project Structure

```
src/
├── components/
│   ├── Home.js
│   ├── NavBar.js
│   ├── ShowCard.js
│   ├── ShowForm.js
│   └── ShowList.js
├── App.js
├── App.css
├── index.js
└── ...
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

## License

MIT

## Last Updated

June 07, 2025
