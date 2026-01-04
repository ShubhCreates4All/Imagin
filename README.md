# Imagin 🏙️✨
> **AI-Powered Urban Planning & Civic Visualization Tool**

**Imagin** is an Augmented Reality (AR) and Generative AI application that allows citizens and municipalities to "re-imagine" their environments. By pointing a camera at urban decay (potholes, garbage, unpainted walls), Imagin uses the Gemini 1.5 Pro API to generate a realistic overlay of how the area *could* look if repaired, instantly tagging local authorities.

![Status](https://img.shields.io/badge/Status-MVP-success)
![Tech](https://img.shields.io/badge/Tech-React_|_Gemini_AI_|_Tailwind-blue)

## 🚀 The Problem
Citizens in developing urban areas often struggle to visualize the potential of their neighborhoods. Reporting issues (like potholes) is often tedious and lacks visual impact.

## 💡 The Solution
Imagin bridges the gap between **Reality** and **Potential**:
1.  **Capture:** User takes a photo of a street issue.
2.  **Generate:** AI analyzes the geometry and overlays a "fixed" version (clean streets, trees, paved roads).
3.  **Act:** The "Before vs. After" comparison is auto-formatted for social governance tagging.

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS + Framer Motion
* **AI Engine:** Google Gemini 1.5 Pro (Vision Capabilities)
* **Camera:** React-Webcam

## 📸 Key Features
* **Real-time Reality Shift:** Slider to compare "Current State" vs. "Imagin State".
* **Civic Tagging:** Auto-detects location and tags relevant municipal Twitter/X handles.
* **Low-Latency Generation:** Optimized for mobile networks.

## 🏃‍♂️ How to Run Locally
```bash
# Clone the repository
git clone [https://github.com/ShubhCreates4All/Imagin.git](https://github.com/ShubhCreates4All/Imagin.git)

# Install dependencies
npm install

# Add your API Key
# Create a .env file and add: VITE_GEMINI_API_KEY=your_key_here

# Start the server
npm run dev
