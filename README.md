# 📚 Book Vibe

A modern and responsive **book management web application** built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Users can explore books, view detailed information, add books to their Read List or Wishlist, and track their reading progress through a visual chart.

---

## ✨ Features

* 📚 Browse available books
* 🔎 View detailed information for each book
* 📖 Add books to the **Read List**
* ❤️ Add books to the **Wishlist**
* 🔄 Move books from Wishlist to Read List
* 🚫 Prevent duplicate books in Read List and Wishlist
* 📊 View reading progress with a **Pages to Read chart**
* 🔔 Toast notifications for user actions
* 📱 Fully responsive design
* ⚡ Fast navigation with Next.js App Router
* 🧩 Reusable React components
* 🎨 Modern UI with Tailwind CSS
* 📝 Type-safe development with TypeScript

---

## 🛠️ Technologies Used

* **Next.js**
* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **React Toastify**
* **Recharts**
* **Lucide React**
* **Next/Image**
* **Next/Link**
* **Context API**

---

## 📂 Project Structure

```text
public/
src/
└── app/
    ├── assets/
    │   ├── book.ico
    │   └── hero_img.jpg
    │
    ├── bookdetails/
    │   ├── ReadButton.tsx
    │   └── WishListButton.tsx
    │
    ├── books/
    │   ├── [id]/
    │   │   └── page.tsx
    │   └── page.tsx
    │
    ├── context/
    │   └── BookContext.tsx
    │
    ├── homePage/
    │   ├── Banner.tsx
    │   ├── BookCard.tsx
    │   └── Books.tsx
    │
    ├── listedBooks/
    │   ├── ListedBookCard.tsx
    │   ├── page.tsx
    │   └── WishListCard.tsx
    │
    ├── pagesToRead/
    │   └── page.tsx
    │
    ├── shared/
    │   ├── BooksDetails.tsx
    │   ├── Footer.tsx
    │   └── Navbar.jsx
    │
    ├── types/
    │   └── BooksCard.ts
    │
    ├── fav.png
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git https://github.com/aminulislamdev/Book-Vibe
```

### 2. Go to the project directory

```bash
cd book-vibe
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📖 Main Features

### 📚 Book Details

Each book has its own dynamic route:

```text
/books/[id]
```

Example:

```text
/books/2
```

The page dynamically finds the selected book and displays its details.

### 📖 Read List

Users can add books to their Read List.

If a book is already in the Read List, duplicate entries are prevented.

### ❤️ Wishlist

Users can add books to their Wishlist.

If a book is already in the Read List, it cannot be added to the Wishlist.

### 🔄 Wishlist → Read List

When a wishlist book is marked as Read:

* The book is added to the Read List.
* The book is removed from the Wishlist.
* A toast notification is displayed.

### 📊 Pages to Read

The **Pages to Read** page uses **Recharts** to display the total pages of books in the Read List.

---

## 🧠 State Management

The project uses **React Context API** for managing:

```text
Read Books
Wishlist Books
```

The main context is:

```text
src/app/context/BookContext.tsx
```

This allows different components to access and update the user's book lists.

---

## 🔔 Notifications

**React Toastify** is used to provide feedback when users:

* Add a book to Read List
* Add a book to Wishlist
* Try to add a duplicate book
* Move a book from Wishlist to Read List

---

## 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

Tailwind CSS responsive utilities are used throughout the application.

---

## 👨‍💻 Author

**Aminul Islam**

🎓 Diploma in Computer Science & Technology
💻 Future Full Stack Developer

### Connect With Me

* LinkedIn: `https://linkedin.com/in/aminulislamjs/`
* GitHub: `https://github.com/aminulislamdev`

---

## 📄 License

This project is created for educational and learning purposes.
