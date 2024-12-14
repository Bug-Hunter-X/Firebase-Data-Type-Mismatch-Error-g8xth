The solution involves adding robust type checking before using data fetched from Firebase.  We can utilize TypeScript or JavaScript's type checking capabilities, along with appropriate error handling.  Here's an example:

```javascript
import { db } from './firebaseConfig'; // Your Firebase config

db.ref('myData').once('value').then(snapshot => {
  const data = snapshot.val();

  if (typeof data === 'number') {
    // Proceed with operations that expect a number
    const result = data * 2;
    console.log('Result:', result);
  } else {
    console.error('Data is not a number:', data);
    // Handle the error appropriately, e.g., display an error message to the user.
  }
});
```

This improved code explicitly checks the data type before performing any operations. This prevents unexpected crashes due to type mismatches. Consider using TypeScript for even more rigorous type safety.