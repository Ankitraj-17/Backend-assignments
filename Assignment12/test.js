/**
 * Automated test script to verify all 5 test criteria required by Assignment 12
 */
require("dotenv").config();

const BASE_URL = `http://localhost:${process.env.PORT || 3000}`;

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m"
};

async function runTests() {
  console.log(`${colors.cyan}========================================`);
  console.log(`Running Tests for Assignment 12 Auth API`);
  console.log(`Target: ${BASE_URL}`);
  console.log(`========================================${colors.reset}\n`);

  // Generate unique email to avoid collision if run multiple times
  const timestamp = Date.now();
  const testUser = {
    name: "Ankitraj",
    email: `Ankitraj_${timestamp}@gmail.com`,
    password: "Ankitraj@123"
  };

  let token = null;

  // --- Test 1: Register ---
  console.log(`${colors.yellow}Test 1 — Register (POST /register)${colors.reset}`);
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testUser)
    });
    const data = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Response:`, data);
    if (res.status === 201 && data.message === "User registered successfully") {
      console.log(`${colors.green}✓ Test 1 Passed: User registered successfully${colors.reset}\n`);
    } else {
      console.log(`${colors.red}✗ Test 1 Failed${colors.reset}\n`);
    }
  } catch (err) {
    console.error(`${colors.red}Error in Test 1:${colors.reset}`, err.message);
  }

  // --- Test 2: Login ---
  console.log(`${colors.yellow}Test 2 — Login (POST /login)${colors.reset}`);
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testUser.email,
        password: testUser.password
      })
    });
    const data = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Response:`, data);
    if (res.status === 200 && data.token) {
      token = data.token;
      console.log(`${colors.green}✓ Test 2 Passed: Token received successfully${colors.reset}\n`);
    } else {
      console.log(`${colors.red}✗ Test 2 Failed${colors.reset}\n`);
    }
  } catch (err) {
    console.error(`${colors.red}Error in Test 2:${colors.reset}`, err.message);
  }

  // --- Test 3: Access Private Endpoint Without Token ---
  console.log(`${colors.yellow}Test 3 — Access Private Endpoint Without Token (GET /profile)${colors.reset}`);
  try {
    const res = await fetch(`${BASE_URL}/profile`);
    const data = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Response:`, data);
    if (res.status === 401) {
      console.log(`${colors.green}✓ Test 3 Passed: 401 Unauthorized as expected${colors.reset}\n`);
    } else {
      console.log(`${colors.red}✗ Test 3 Failed (Expected 401, got ${res.status})${colors.reset}\n`);
    }
  } catch (err) {
    console.error(`${colors.red}Error in Test 3:${colors.reset}`, err.message);
  }

  // --- Test 4: Access Private Endpoint With Invalid Token ---
  console.log(`${colors.yellow}Test 4 — Access Private Endpoint With Invalid Token (GET /profile)${colors.reset}`);
  try {
    const res = await fetch(`${BASE_URL}/profile`, {
      headers: {
        Authorization: "Bearer invalid_token_123456789"
      }
    });
    const data = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Response:`, data);
    if (res.status === 401) {
      console.log(`${colors.green}✓ Test 4 Passed: 401 Unauthorized as expected${colors.reset}\n`);
    } else {
      console.log(`${colors.red}✗ Test 4 Failed (Expected 401, got ${res.status})${colors.reset}\n`);
    }
  } catch (err) {
    console.error(`${colors.red}Error in Test 4:${colors.reset}`, err.message);
  }

  // --- Test 5: Access Private Endpoint With Valid Token ---
  console.log(`${colors.yellow}Test 5 — Access Private Endpoint With Valid Token (GET /profile)${colors.reset}`);
  if (!token) {
    console.log(`${colors.red}Skipping Test 5 because token was not received in Test 2${colors.reset}\n`);
    return;
  }
  try {
    const res = await fetch(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Response:`, data);
    if (res.status === 200 && data.user && data.user.email === testUser.email.toLowerCase()) {
      console.log(`${colors.green}✓ Test 5 Passed: Profile returned successfully with 200 OK${colors.reset}\n`);
    } else {
      console.log(`${colors.red}✗ Test 5 Failed${colors.reset}\n`);
    }
  } catch (err) {
    console.error(`${colors.red}Error in Test 5:${colors.reset}`, err.message);
  }

  console.log(`${colors.cyan}========================================`);
  console.log(`All Tests Completed!`);
  console.log(`========================================${colors.reset}`);
}

runTests();
