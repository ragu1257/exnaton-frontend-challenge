# Exnaton Coding Challenge - Frontend

This project is part of the **Exnaton Coding Challenge**, where the goal was to build a frontend tool for visualizing energy usage data in a user-friendly manner. The project retrieves and processes energy data from a fictive API and visualizes it through **KPIs** and **charts**.

---

## Task Overview

### Task A - Coding
The goal of this task was to:
- **Visualize energy data** grouped by daily, weekly, and monthly intervals.
- Compute and display **Key Performance Indicators (KPIs)**:
  - Total Production
  - Total Consumption
  - Total Self-Consumption
- Handle edge cases like missing or unavailable data.

## Task B - Product & Design
 **https://www.figma.com/board/rZQgo3GE4WFY3g8I7awEl6/Exanaton---Task-B?node-id=0-1**
---

## Features

### Features Implemented
#### 1. **Energy Data Fetching:**
- Fetched energy data from a fictive API and treated it as a real API response.
- Handled loading, error states, and empty datasets.

#### 2. **Data Grouping by Intervals:**
- Grouped energy data into daily, weekly, and monthly intervals for visualization.

#### 3. **Dynamic Visualizations:**
- Used Recharts to display a line chart representing:
  - Energy production
  - Energy consumption
  - Self-consumed energy
  - Grid withdrawal/injection
- Responsive design for different screen sizes.

#### 4. **KPIs:**
- Computed and displayed:
  - Total production
  - Total consumption
  - Total self-consumed energy.
 
#### 5. **User Interaction:**
- Provided interval selection through radio buttons (daily, weekly, monthly).
- Real-time data updates based on the selected interval.

---

## Screenshots

### **Dashboard with KPIs and Graphs**
![Screenshot 2024-11-23 at 9 50 26 PM](https://github.com/user-attachments/assets/fe350179-5686-410b-9437-860bd18a6429)
![Screenshot 2024-11-23 at 9 50 39 PM](https://github.com/user-attachments/assets/1cd0fdd1-55e5-417b-b610-4186bf1fb87a)
![Screenshot 2024-11-23 at 9 50 51 PM](https://github.com/user-attachments/assets/2747f265-62d4-47c5-9566-e6bef96cddcc)


---

## Design 

#### The components were structured with scalability in mind:

#### 1. **KPIs Component:**
- Modular and reusable for displaying any type of calculated metrics.
- Can be extended to support more KPIs in the future.

#### 2. **EnergyInfoTable:**
- Handles grouping and visualizing energy data.
- Decoupled logic for easy maintenance.

---

## Libraries and Tools Used
#### 1. **React**: For building the user interface.
#### 2. **TypeScript**: For type safety and better developer experience.
#### 3. **Recharts**: For creating responsive, interactive charts.
#### 4. **date-fns**: For date manipulation and formatting.
#### 5. **Fetch API**: For retrieving energy data from the fictive API.
#### 6. **CSS**: For basic styling.

---

## Setup

#### To run the project locally:

#### 1. Clone the repository:
    git clone <repository_url>
    cd <repository_name>
#### 2. Install dependencies:
    npm install
#### 3. Start the development server:
    npm start
#### 4. Access the app in your browser at 
    http://localhost:3000
