
# CollaborateX

A real-time collaborative platform for code editing, drawing, chatting, and file management. Built with a modern React frontend and a Node.js/Express backend using Socket.IO for live collaboration.

## Features
- Real-time collaborative code editor
- Live drawing board
- File management and sharing
- Chat system
- User presence and activity status
- Responsive and modern UI

## Tech Stack

### Client
- React 18
- TypeScript
- Vite
- Tailwind CSS
- CodeMirror (code editor)
- tldraw (drawing)
- Socket.IO Client
- React Router

### Server
- Node.js
- Express
- TypeScript
- Socket.IO
- CORS, dotenv

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup

#### 1. Clone the repository
```sh
git clone https://github.com/Abhishek-raj-292002/Collborate-x.git
cd CollaborateX -v2
```

#### 2. Install dependencies

##### Client
```sh
cd client
npm install
```

##### Server
```sh
cd ../server
npm install
```

#### 3. Run the app

##### Start the server
```sh
cd server
npm run dev
```

##### Start the client
```sh
cd ../client
npm run dev
```

The client will be available at `http://localhost:5173` (or as specified by Vite), and the server at `http://localhost:3000`.

## Folder Structure
```
CollaborateX -v2/
├── client/      # Frontend React app
│   ├── src/
│   └── ...
├── server/      # Backend Node.js/Express app
│   ├── src/
│   └── ...
└── README.md
```

## Usage
- Open the client in your browser.
- Create or join a workspace to collaborate in real time.
- Use the sidebar to switch between code, drawing, files, and chat.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


