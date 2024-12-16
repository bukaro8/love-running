### README for Astro Application

# **Astro Application**

This project is an Astro-based application designed to be lightweight, fast, and extensible. The application includes a dynamic menu and footer, making it easy to add new links and social icons as needed.

---

## **Features**
- 🚀 **Astro Framework**: Optimised for speed and developer experience.
- 📂 **Dynamic Menu**: Easily customise navigation links.
- 👣 **Customisable Footer**: Add or update social media icons effortlessly.
- 🎨 **Modern Design**: Responsive and visually appealing UI.

---

## **Getting Started**

### **Prerequisites**
- Node.js (v16+ recommended)
- npm or yarn installed

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/astro-application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd astro-application
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### **Running the Application**
Start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:4321/`.

---

## **Customisation**

### **1. Adding Links to the Menu**
To add more links to the navigation menu, update the `menuListItems` file:

**File Location**:  
`src/assets/constants/menuListItems.ts`

**Example**:  
To add a new "Gallery" link to the menu:
```typescript
{ title: 'Gallery', link: '/gallery' },
```

---

### **2. Adding Icons to the Footer**
To add more icons to the footer, update the `iconsListItems` file:

**File Location**:  
`src/assets/constants/iconsListItems.ts`

**Example**:  
To add an Instagram icon to the footer:
```typescript
{ name: 'instagram', link: 'https://instagram.com' },
```

---

## **Folder Structure**
```plaintext
src/
├── components/    # Reusable components for UI
├── layouts/       # Application layouts
├── pages/         # Astro pages
├── assets/        # Static files, constants, and images
│   ├── constants/ # Menu and footer icon data
└── styles/        # Global styles and CSS
```

---

## **Build for Production**
To create an optimised production build, run:
```bash
npm run build
# or
yarn build
```
The static files will be generated in the `dist` folder.

---

## **Contributing**
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to customise this README further as your project evolves! Let me know if you’d like additional sections.