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
      background: white;
      padding: 90px;
      border-radius: 8px;
      width: 80%;
      height: 200px;
      text-align: center;
      max-width: 500px;
      position: relative;
      justify-content: center;
      display:flex;
      border: 10px solid #24AA91;
    }

    .modal-content p{
      justify-content: center;
      display:flex;
      text-align: center;
      font-size: 29px;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      cursor: pointer;
    }

    .close:hover {
      color: red;
    }

    .imagen{
        margin:0px 0px 40px 0px;
    }
  `