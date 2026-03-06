# ⛏️ SAPUI5 Fiori Drill Mining Application

A **SAPUI5 Fiori-style web application** that displays mineral drilling data and allows users to explore detailed information about mining resources.

This project demonstrates how to build an **enterprise-style SAPUI5 application using the MVC architecture, JSON models, routing, and XML views**.

The application loads mineral data from a **JSON model** and displays it in a list where users can navigate to a **details page** for more information.

---

# 🚀 Features

* View mineral drilling data
* Navigate to detailed mineral information
* SAPUI5 **MVC architecture**
* JSON Model data binding
* Routing and navigation between views
* SAP Fiori styled UI
* Modular project structure

---

# 🏗️ Project Structure

```id="viyelv"
SAPUI5_FIORI-Drill_Mining
│
├── node_modules
│
├── webapp
│   │
│   ├── controller
│   │   ├── App.controller.js
│   │   ├── View1.controller.js
│   │   └── Details.controller.js
│   │
│   ├── view
│   │   ├── App.view.xml
│   │   ├── View1.view.xml
│   │   └── Details.view.xml
│   │
│   ├── model
│   │   ├── minerals.json
│   │   └── models.js
│   │
│   ├── css
│   │
│   ├── i18n
│   │   └── i18n.properties
│   │
│   ├── Component.js
│   ├── index.html
│   └── manifest.json
│
├── test
├── package.json
├── package-lock.json
├── ui5.yaml
├── ui5-local.yaml
├── .gitignore
└── README.md
```

---

# 📱 Application Pages

## 🏠 Minerals List Page (View1)

Displays a list of available minerals and drilling data loaded from the JSON model.

Users can:

* View mineral information
* Select a mineral record
* Navigate to the details page

---

## 📄 Mineral Details Page

Shows detailed information for the selected mineral such as:

* Mineral Name
* Location
* Depth
* Mining data
* Additional details

---

# 📊 Data Model

The application uses a **JSON model** to store mineral data.

Location:

```id="tkrqif"
webapp/model/minerals.json
```

Example structure:

```json id="de6vpt"
{
  "minerals": [
    {
      "id": "1",
      "name": "Gold",
      "location": "South Africa",
      "depth": "3500m"
    }
  ]
}
```

The model is configured in:

```id="h77j0b"
webapp/model/models.js
```

---

# 🌍 Internationalization

Text labels and UI strings are maintained using the **i18n properties file**.

```id="xxm9o3"
webapp/i18n/i18n.properties
```

This allows the application to support **multiple languages** in the future.

---

# 🧰 Technologies Used

* SAPUI5
* JavaScript
* XML Views
* JSON Model
* HTML5
* CSS
* SAP Fiori Design Principles
* UI5 Tooling

---

# 📚 Learning Objectives

This project demonstrates:

* SAPUI5 MVC architecture
* JSON Model data binding
* Routing and navigation
* Building SAP Fiori style UI
* Structuring SAPUI5 applications
* UI5 Tooling setup

---

# 🔮 Future Improvements

* Add search and filter functionality
* Add charts for mineral statistics
* Integrate with **OData service**
* Improve UI using **Fiori design components**
* Add dashboard analytics for mining data

---
