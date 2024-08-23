import { css } from "lit";

export default css`
  :host {
      display: block;
      padding: 16px;
      font-family: 'Roboto', sans-serif;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 600px;
      margin: 0 auto;
    }

    form div {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
    }

    input {
      padding: 8px;
      font-size: 16px;
      border-radius: 8px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #01A1A1;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 20px;
      color: #ffffff;
      transition: background-color 0.3s;
    }
    button:hover {
     background-color: #ffffff;
     color: #01A1A1;
    }

    .back {
      padding: 10px 20px;
      background-color: #000303;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 20px;
      color: #ffffff;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal.show {
      display: flex;
    }

    .modal-content {
      background: #ddd6d6;
      padding: 20px 40px 20px 20px;
      border-radius: 12px;
      width: 70%;
      max-width: 500px;
      text-align: center;
      position: relative;
      border: 8px solid rgb(15 62 53);
    }

    .modal-content p {
      margin: 0;
      font-size: 18px;
    }

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 24px;
      cursor: pointer;
      color: #323249;
    }

    .close:hover {
      color: red;
    }

    @media (min-width: 768px) {
      .modal-content {
        padding: 30px 60px 30px 30px;
        border-radius: 18px;
        width: 80%;
      }

      .modal-content p {
        font-size: 20px;
      }

      .close {
        top: 20px;
        right: 20px;
        font-size: 26px;
      }
    }

    @media (min-width: 1024px) {
      .modal-content {
        padding: 40px 80px 40px 40px;
        border-radius: 24px;
        width: 60%;
      }

      .modal-content p {
        font-size: 24px;
      }

      .close {
        top: 30px;
        right: 30px;
        font-size: 28px;
      }
    }

    .imagen{
      margin:0px 0px 40px 0px;
    }
    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .checkbox-container input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  `