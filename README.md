# DualMaps

A simple Next.js project demonstrating how to integrate OpenLayers and ol-ext to create a dynamic dual map layout.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Additional Configuration](#additional-configuration)
- [Contributing](#contributing)

## Introduction

This project showcases how to use Next.js along with OpenLayers and ol-ext to create a web application with a dynamic dual map layout. It includes two map components, `Map1` and `Map2`, each displaying a simple OpenStreetMap layer.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shreyas-Ingale/DualMaps.git
   cd DualMaps
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000/` in your browser to see the dual map layout.

## Project Structure

The project structure is as follows:

- **`components`**: Contains reusable React components, including `Map1.js` and `Map2.js`.
- **`pages`**: Contains the main pages of the Next.js application, including `dualmap.js`.
- **`public`**: Static assets such as images or stylesheets.

## Usage

The dual map layout is displayed on the `/` route. Each map is represented by a separate component (`Map1` and `Map2`).

## Additional Configuration

For additional configuration or to incorporate ol-ext features, refer to the documentation of OpenLayers and ol-ext. You may need to customize the components and configurations based on your specific requirements.
