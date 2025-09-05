<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form inputs safely
    $firstName = htmlspecialchars($_POST['firstName']);
    $middleName = htmlspecialchars($_POST['middleName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $batch = htmlspecialchars($_POST['batch']);
    $technology = htmlspecialchars($_POST['technology']);
    $idNumber = htmlspecialchars($_POST['idNumber']);
    $contactNumber = htmlspecialchars($_POST['contactNumber']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Confirmation</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
  <style>
    body {
      background-color: lightgray;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      font-family: 'Open Sans', sans-serif;
    }

    .confirmation-box {
      background: #fff;
      padding: 30px 40px;
      margin: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      width: 500px;
      max-width: 100%;
      text-align: left;
      animation: fadeIn 0.5s ease-in-out;
    }

    .confirmation-header {
      background: #f7f7f7;
      padding: 15px 20px;
      border-radius: 7px;
      margin-bottom: 20px;
      text-align: center;
    }

    .confirmation-header h2 {
      color: green;
      margin: 0;
      font-size: 22px;
    }

    .confirmation-details {
      margin: 15px 0;
    }

    .confirmation-details p {
      font-size: 16px;
      margin: 10px 0;
    }

    .confirmation-details strong {
      color: #333;
    }

    .btn-back {
      margin-top: 20px;
      display: inline-block;
      padding: 12px 20px;
      background: blue;
      color: white;
      border-radius: 10px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s ease;
    }

    .btn-back:hover {
      background: darkblue;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="confirmation-box">
    <div class="confirmation-header">
      <h2><i class="fa fa-check-circle"></i> You have been registered successfully</h2>
    </div>

    <div class="confirmation-details">
      <p><strong>Name:</strong> <?= $firstName . " " . $middleName . " " . $lastName ?></p>
      <p><strong>Batch:</strong> <?= $batch ?></p>
      <p><strong>Technology:</strong> <?= $technology ?></p>
      <p><strong>ID Number:</strong> <?= $idNumber ?></p>
      <p><strong>Contact Number:</strong> <?= $contactNumber ?></p>
    </div>

    <div style="text-align: center;">
      <a href="index.html" class="btn-back"><i class="fa fa-arrow-left"></i> Register Another</a>
    </div>
  </div>
</body>
</html>