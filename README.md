# [Launch App (press Ctrl or CMD + Click to open in new tab)](https://lockboxlocatorv2.netlify.app/)

![Lockbox Locator App](https://github.com/brandonawilliams1/lockbox_locatorv2.0/blob/main/client/lockbox_locatorv2.0/public/assets/lockbox_app.png) ![screenshot of application](URL)

# Lockbox Locator App [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

---

A full-stack web application designed for Broadband Communications technicians to log essential premise information about a building's cable wiring and Cable NID location. This application enables technicians to utilize CRUD (Create, Read, Update, Delete) functionality, addressing the issue of prolonged time on job sites trying to locate units' points of entry and NID locations. The adoption of this application in the field should improve installation and troubleshooting efficiency for the technicians, also eliminating anxiety associated with lone seek-and-find methods. This is particularly important because if the technician has a reference to a unit's point of entry and/or where lines are split, not knowing this information could be a critical determining factor in the overall network performance and experience for the end user. Additionally, knowing where the NID is located, if it is in a locked area, and if Maintenance needs to be contacted ahead of time could reduce idle waiting and discovery times.

## Features

- Log information about building cable wiring
- Record the location of Cable NID
- CURD functionality for efficient data management
- Streamlined interface to reduce job site time

## Technologies Used

- **Frontend**: JavaScript, HTML, CSS, React, Vite
- **Backend**: Supabase
- **Deployment**: Netlify

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. **Fork the repository**:
   - Clone this repository to your local machine:
     ```bash
     git clone https://github.com/brandonawilliams1/lockbox_locatorv2.0.git
     ```
2. **Navigate to the project directory**:

   ```bash
   cd repo-name
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

5. **Access the application**:
   - The application should be running at `http://localhost:3000`

## Deployment

The application is deployed on Netlify and can be accessed [here](https://lockboxlocatorv2.netlify.app/).

## Usage

1. Log in to the application
2. Record or update information about building cable wiring
3. Log the location of Cable NID
4. Utilize CURD operations to manage records efficiently

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature description'`
4. Push to your fork and create a pull request
