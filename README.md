Manual Testing a Dancing Registration Page for Software Engineering class
# Test Cases for Dance Registration Page

## Full Name Validation
| **Input**    | **Expected Output**                                                                              |
|--------------|--------------------------------------------------------------------------------------------------|
| "John"      | Error: "Full Name must be at least 6 characters long."                               |
| "John123"   | Error: "Full Name must contain only letters and spaces."                             |
| "John Doe"  | No error.                                                                            |

## Email Validation
| **Input**             | **Expected Output**                                                                      |
|-----------------------|------------------------------------------------------------------------------------------|
| "john.doe"           | Error: "Please enter a valid email address."                                 |
| "john.doe@example.com"| No error.                                                                  |

## Gender Selection
| **Input**       | **Expected Output**                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------|
| Not selected    | Error: "Please select your gender."                                               |
| Male            | No error.                                                                        |

## Password Validation
| **Input**        | **Expected Output**                                                                          |
|------------------|----------------------------------------------------------------------------------------------|
| "12345"         | Error: "Password must be at least 8 characters long."                            |
| "strongPass123" | No error.                                                                        |

## Confirm Password Validation
| **Input**                                                                 | **Expected Output**                                                      |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Password: "strongPass123", Confirm Password: "strongPass"                | Error: "Passwords do not match."                              |
| Password: "strongPass123", Confirm Password: "strongPass123"            | No error.                                                    |

## Dance Type Selection
| **Input**       | **Expected Output**                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------|
| Not selected    | Error: "Please select a dance type."                                              |
| Hip Hop         | No error.                                                                        |

## Start Date Validation
| **Input**              | **Expected Output**                                                                    |
|------------------------|----------------------------------------------------------------------------------------|
| Yesterday's date       | Error: "Start Date must be today or in the future."                        |
| Today's date or future date| No error.                                                             |

## Phone Number Validation
| **Input**      | **Expected Output**                                                                            |
|----------------|------------------------------------------------------------------------------------------------|
| "12345"       | Error: "Please enter a valid 10-digit phone number."                               |
| "1234567890"  | No error.                                                                          |

## Successful Form Submission
| **Input**       | **Expected Output**                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------|
| All fields valid| Alert: "Form submitted successfully!" Form reset. All borders reset to default.              |
