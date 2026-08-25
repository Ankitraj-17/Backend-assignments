# Assignment 4: Node.js File System Module

## Description
This assignment performs file management operations using Node.js core `fs` module.

## Tasks Implemented
1. **Task 1 (fs.writeFile)**: Creates `student.txt` containing name, course, and technology.
2. **Task 2 (fs.readFile)**: Reads and prints the contents of `student.txt` with error handling.
3. **Task 3 (fs.appendFile)**: Appends experience and city details to the existing file.
4. **Task 4 (fs.rename)**: Renames `student.txt` to `studentDetails.txt`.
5. **Task 5 (fs.unlink)**: Deletes `studentDetails.txt`.

## How to Run

1. Open terminal in project directory:
   ```bash
   cd /Users/ankitrajjha/nodejs/Assignment4
   ```

2. Run the script:
   ```bash
   node index.js
   ```

## Expected Output

```text
File created successfully

--- Student Details ---
Name: Ankit Raj Jha
Course: Full Stack Development
Technology: Node.js

Data updated successfully
File renamed from student.txt to studentDetails.txt
File studentDetails.txt deleted successfully
```
