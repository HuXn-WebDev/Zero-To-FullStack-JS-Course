// -------------------------
function fetchDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data retrieved from the server.");
    }, 2000);
  });
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining tasks can be executed here.");
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserData();

// -------------------------
// Refactoring our previous example to use (Async/Await)
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Inside (callbackHell) Function";
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }

// function firstFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed First`;
//       console.log("Inside (firstFunc) Function");
//       resolve(processedData);
//     }, 1000);
//   });
// }

// function secondFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed Second`;
//       console.log("Inside (secondFunc) Function.");
//       resolve(processedData);
//     }, 1500);
//   });
// }

// async function processDataWithAsyncAwait() {
//   try {
//     const data = await fetchData();
//     const processedData1 = await firstFunc(data);
//     const processedData2 = await secondFunc(processedData1);
//     console.log(
//       `Final result of all functions with async/await: ${processedData2}`
//     );
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// processDataWithAsyncAwait();
