# Express.js Route Handler Missing Return Statement

This repository demonstrates a common error in Express.js route handlers: a missing `return` statement within a conditional block.  This can lead to unexpected behavior where the route handler continues to execute code even after a condition is met, potentially leading to errors or unexpected responses.

The `bug.js` file contains the erroneous code, and the `bugSolution.js` file provides the corrected version.

## Bug
The bug is a missing `return` statement in the `if` condition within the `/users/:id` route handler.  Without the `return`, the code continues to execute `res.json(userData);` even when `userData` is null, resulting in an error or an unexpected response.

## Solution
Adding the `return` statement before `res.status(404).send('User not found');` ensures that the route handler terminates early when a user is not found. This prevents further execution and ensures a consistent response.