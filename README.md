# BIC21203 Web Development — Lab #4a: Client-Side Scripting (JavaScript)

## Student Information
- **Name:** MUHAMMAD HAZIQ BIN MOHD HASREREN AELIZAY
- **Matric ID:** AI240105
- **Course:** BIC21203 Web Development
- **SECTION:** 4
---

## Project Overview
This repository contains the complete implementation for Lab #4a (Client-Side Scripting with JavaScript). The lab demonstrates modern, standard client-side scripting techniques including:
- DOM element selection and manipulation using standard methods (`document.getElementById`, `document.createElement`, `appendChild`).
- Safe text handling via `textContent` rather than `innerHTML` to prevent Cross-Site Scripting (XSS) risks.
- Event-driven programming using `addEventListener()`.
- Input validation, whitespace handling, and type conversion.
- Loop constructs to generate dynamic DOM lists without duplicate nodes.

---

## How to Run
No build step or external libraries are required. You can run the code in any desktop browser (Google Chrome, Microsoft Edge, Firefox):

1. - Clone or download this repository.
2. - Navigate into the folder of the question you want to view (`q1`, `q2`, or `q3`).
3. - Double-click on the `.html` file.

---

## Question Outputs

### Question 1: Interactive Text Changer

#### Evidence / Screenshots:
- **Initial State:**

  ![Q1 Initial State] <img width="1208" height="279" alt="image" src="https://github.com/user-attachments/assets/ce32b466-dc2e-4cba-a23e-c2977c759386" />
- **After Clicking "Change Message":**
  ![Q1 Updated State] <img width="1041" height="275" alt="image" src="https://github.com/user-attachments/assets/1bdf753b-f4de-40e3-bc88-47d5685650a2" />

---

### Question 2: Smart Number Validator

#### Evidence / Screenshots:
- **Test Case (Input: 5):**
  ![Q2 Test 5] <img width="1061" height="306" alt="image" src="https://github.com/user-attachments/assets/605aa1f2-23bd-4b70-8170-2c0978e5ea7e" />
- **Test Case (Input: 10):**
  ![Q2 Test 10] <img width="1089" height="204" alt="image" src="https://github.com/user-attachments/assets/c793f375-e28c-4cba-9123-a6bd885e7925" />
- **Test Case (Input: 15):**
  ![Q2 Test 15] <img width="1034" height="224" alt="image" src="https://github.com/user-attachments/assets/7117ce43-afd8-4580-bb1e-c55ee7dcac14" />
- **Test Case (Input: abc):**
  ![Q2 Test Invalid] <img width="1079" height="251" alt="image" src="https://github.com/user-attachments/assets/4b429c02-f346-4831-8862-1245264180b1" />
- **Test Case (Input: empty):**
  ![Q2 Test Empty] <img width="1065" height="182" alt="image" src="https://github.com/user-attachments/assets/17023981-b6bd-4784-8f85-7f7eacec815b" />

---

### Question 3: Dynamic Number Generator

#### Evidence / Screenshots:
- **Generated List (1 to 5):**
  ![Q3 Output] <img width="1071" height="257" alt="image" src="https://github.com/user-attachments/assets/ea6e3703-2cd0-40ff-8130-714b5bb1fa3a" />
  
---

## Reflection
Completing this laboratory activity provided hands-on experience in client-side scripting and browser DOM manipulation using vanilla JavaScript. Question 2 highlighted the critical importance of validating and sanitizing user input against edge cases like whitespace and non-numeric entries, while enforcing defensive scripting through safe properties like `textContent` over `innerHTML`. In addition, building the dynamic list in Question 3 demonstrated programmatic element construction with `createElement()` and node cleanup to maintain idempotent, bug-free UI updates.
