# Expense & Income Tracker

A full-stack web application for tracking incomes and expenses, visualizing financial data, and managing personal finances. Built with React (frontend) and Node.js/Express/MongoDB (backend).

## Description
This application allows users to:
- Add, view, and delete income and expense records
- Visualize financial data with charts and summaries
- Filter and search transaction history
- See total income, expenses, and balance at a glance

---

## Data Model
### Income
- `title` (String, required, max 50)
- `amount` (Number, required)
- `type` (String, default: "income")
- `date` (Date)
- `category` (String, required)
- `description` (String, required)
- `symbol` (String, optional)
- `createdAt`, `updatedAt` (Date, auto-managed)

### Expense
- `title` (String, required, max 50)
- `amount` (Number, required)
- `type` (String, default: "expense")
- `date` (Date)
- `category` (String, required)
- `description` (String, required)
- `symbol` (String, optional)
- `createdAt`, `updatedAt` (Date, auto-managed)

---

## Main Functionalities
- **Dashboard:** Overview of total income, expenses, and balance; recent transactions; and financial charts.
- **Income Management:** Add, view, and delete income records.
- **Expense Management:** Add, view, and delete expense records.
- **Transaction History:** Filter and search transactions by category, month, year, etc.
- **Charts:** Visualize income and expenses over time and by category.

---

## Backend Structure
- **Node.js/Express** server (see `backend/`)
- **MongoDB** for data storage
- **Key files:**
  - `app.js`: Main server setup, loads routes and connects to DB
  - `models/`: Mongoose schemas for Income and Expense
  - `controllers/`: Logic for handling API requests
  - `routes/transactions.js`: All API endpoints for incomes and expenses

### API Endpoints
Base URL: `/api/v1`
- `POST   /add-income`      — Add a new income
- `GET    /get-incomes`     — Get all incomes
- `DELETE /delete-income/:id` — Delete an income by ID
- `POST   /add-expense`     — Add a new expense
- `GET    /get-expenses`    — Get all expenses
- `DELETE /delete-expense/:id` — Delete an expense by ID

---

## Frontend Structure
- **React** app (see `frontend/`)
- **Key features/components:**
  - `Dashboard`: Overview, charts, and recent transactions
  - `Income`, `Expenses`: Manage income/expense records
  - `Form`, `ExpenseForm`: Add new records
  - `IncomeItem`: Display individual income/expense
  - `Transaction`, `History`, `Filter`: View and filter transaction history
  - `Chart`: Data visualization (line/bar charts)
  - `Navigation`: Sidebar navigation
  - `Orb`: Animated background effect
- **Global State:** Managed via React Context (`globalContext.js`)
- **Styling:** CSS modules and global styles

---

## Setup & Installation

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB (local or cloud instance)

### Backend
```bash
cd backend
npm install
# Create a .env file with PORT=5000 (or your preferred port)
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```
