Manual Testing a Dancing Registration Page for Software Engineering class
# Test Cases for Dance Registration Page

## Full Name Validation
| **Input**    | **Expected Output**                                                                              |
|--------------|--------------------------------------------------------------------------------------------------|
| "John"      | Error: "Full Name must be at least 6 characters long." Border: Red                              |
| "John123"   | Error: "Full Name must contain only letters and spaces." Border: Red                            |
| "John Doe"  | No error. Border: Green                                                                           |

## Email Validation
| **Input**             | **Expected Output**                                                                      |
|-----------------------|------------------------------------------------------------------------------------------|
| "john.doe"           | Error: "Please enter a valid email address." Border: Red                                |
| "john.doe@example.com"| No error. Border: Green                                                                 |

## Gender Selection
| **Input**       | **Expected Output**                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------|
| Not selected    | Error: "Please select your gender." Border: Red                                              |
| Male            | No error. Border: Green                                                                       |

## Password Validation
| **Input**        | **Expected Output**                                                                          |
|------------------|----------------------------------------------------------------------------------------------|
| "12345"         | Error: "Password must be at least 8 characters long." Border: Red                           |
| "strongPass123" | No error. Border: Green                                                                       |

## Confirm Password Validation
| **Input**                                                                 | **Expected Output**                                                      |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Password: "strongPass123", Confirm Password: "strongPass"                | Error: "Passwords do not match." Border: Red                             |
| Password: "strongPass123", Confirm Password: "strongPass123"            | No error. Border: Green                                                   |

## Dance Type Selection
| **Input**       | **Expected Output**                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------|
| Not selected    | Error: "Please select a dance type." Border: Red                                             |
| Hip Hop         | No error. Border: Green                                                                       |

## Start Date Validation
| **Input**              | **Expected Output**                                                                    |
|------------------------|----------------------------------------------------------------------------------------|
| Yesterday's date       | Error: "Start Date must be today or in the future." Border: Red                       |
| Today's date or future date| No error. Border: Green                                                            |

## Phone Number Validation
| **Input**      | **Expected Output**                                                                            |
|----------------|------------------------------------------------------------------------------------------------|
| "12345"       | Error: "Please enter a valid 10-digit phone number." Border: Red                              |
| "1234567890"  | No error. Border: Green                                                                         |

## Successful Form Submission
| **Input**       | **Expected Output**                                                                           |
|-----------------|-----------------------------------------------------------------------------------------------|
| All fields valid| Alert: "Form submitted successfully!" Form reset. All borders reset to default.              |
