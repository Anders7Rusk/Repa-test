# Component Library

## UI Component System

The UI component system is designed to create reusable components that maintain consistent behavior and appearance across the application.

### Buttons

#### Basic Usage
```html
<button class="btn">Click me</button>
```

#### States
- **Normal**: Default state when button is not pressed.
- **Hover**: When the user hovers over the button.
- **Active**: When the button is being clicked.
- **Disabled**: When the button is not clickable.

```css
.btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}

.btn:active {
    background-color: #004085;
}

.btn:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
}
```

### Inputs

#### Basic Usage
```html
<input type="text" class="input" placeholder="Enter text"> 
```

#### States
- **Normal**: Default state.
- **Focus**: When the input is selected.
- **Disabled**: When the input is not editable.

```css
.input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    transition: border-color 0.3s;
}

.input:focus {
    border-color: #007bff;
}

.input:disabled {
    border-color: #c0c0c0;
    background-color: #f5f5f5;
}
```

### Conclusion

This document outlines the basic usage and styling for the core UI components. It's essential to ensure that all components follow these guidelines to maintain a consistent and accessible UI.